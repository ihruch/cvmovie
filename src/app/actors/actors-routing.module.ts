import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsComponent } from './actors.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { ActorResolver } from './../shared/guards/actor-resolver.guard';

const routes: Routes = [
  {
    path: 'actors',
    component: ActorsComponent,
    children: [
      {
        path: '',
        component: ActorListComponent
      },
      {
        path: ':id',
        component: ActorCardComponent,
        resolve: {
          sActor: ActorResolver
        },
      }
    ]

  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class ActorsRoutingModule { }
