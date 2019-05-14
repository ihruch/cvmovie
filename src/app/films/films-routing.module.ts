import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './films.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmResolver } from './../shared/guards/film-resolver.guard';
import { FilmCastResolver } from './../shared/guards/film-cast.guard';
import { ActorListComponent } from './actor-list/actor-list.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent,
    children: [
      {
        path: '',
        component: FilmListComponent
      },
      {
        path: ':id',
        component: FilmCardComponent,
        resolve: {
          sFilm: FilmResolver
        },
      },
      {
        path: ':id/actors',
        component: ActorListComponent,
        resolve: {
          peopleFilm: FilmCastResolver
        },
      }
    ]

  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class FilmsRoutingModule { }
