import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { FilmServiceService } from './../services/film-service.service';
import { forkJoin, Observable } from 'rxjs';
import { filter, pluck, tap } from 'rxjs/operators';

@Injectable()

export class FilmCastResolver implements Resolve<any> {
  dataStream: any;
  constructor(
    private filmService: FilmServiceService,
  ) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any>|any {
    const id = route.paramMap.get('id');
    return this.dataStream = forkJoin(
      this.filmService.getActorsFilm(id),
      this.filmService.getCrewFilm(id)
    )
  }
}
