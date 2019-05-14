
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ActorsService } from './../services/actor-service.service';
import { forkJoin, Observable } from 'rxjs';
@Injectable()

export class ActorResolver implements Resolve<any>  {
    dataStream: any;
    constructor(
        private actorsService: ActorsService,
    ) {}
    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|any { 
        const id = route.paramMap.get('id');

        return  this.dataStream = forkJoin(
                    this.actorsService.getSingleActor(id),
                    this.actorsService.getSocialMedia(id),
                    this.actorsService.getPlayFilms(id)
                );
    }
}