import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { FilmServiceService } from './../services/film-service.service';
import { forkJoin } from 'rxjs';
import { filter, pluck, tap } from 'rxjs/operators';
@Injectable()

export class FilmResolver implements Resolve<any> {
  dataStream: any;
  constructor(
    private filmService: FilmServiceService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    const id  = route.paramMap.get('id');
    return  this.dataStream = forkJoin(
       this.filmService.getMainInfoFilm(id),
       this.filmService.getVideoFilm(id),
       this.filmService.getActorsFilm(id),
       this.filmService.getCrewFilm(id),
       this.filmService.getSimilarFilms(id)
    );
  }

}
