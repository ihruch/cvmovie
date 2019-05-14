import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { MaterialModule } from './../material.module';
import { SharedModule } from './../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ActorsComponent } from './actors.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorItemComponent } from './actor-item/actor-item.component';
import { ActorCardComponent } from './actor-card/actor-card.component';

import { ActorsService } from './../shared/services/actor-service.service';
import { ActorResolver } from './../shared/guards/actor-resolver.guard';
import { ModalOverviewComponent } from './shared/modal-overview/modal-overview.component';

@NgModule({
  declarations: [
    ActorsComponent,
    ActorListComponent,
    ActorItemComponent,
    ActorCardComponent,
    ModalOverviewComponent,
  ],
  exports: [
    ActorsComponent,
    ActorListComponent,
    ActorItemComponent,
    ActorCardComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    MaterialModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [
    ActorsService,
    ActorResolver,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ModalOverviewComponent]
  
})
export class ActorsModule { }
