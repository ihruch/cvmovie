import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmServiceService } from '../shared/services/film-service.service';

import { FilmResolver } from './.././shared/guards/film-resolver.guard';
import { FilmCastResolver } from './.././shared/guards/film-cast.guard';

import { FilmsComponent } from './films.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { RatioIconComponent } from './shared/ratio-icon/ratio-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from './../shared/shared.module';

import { ActorListComponent } from './actor-list/actor-list.component';
import { ModalYoutubeComponent } from './shared/modal-youtube/modal-youtube.component';
import { YoutubePipe } from './shared/pipes/youtube.pipe';

@NgModule({
  declarations: [
    FilmsComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmCardComponent,
    RatioIconComponent,
    
    ActorListComponent,
    ModalYoutubeComponent,
    YoutubePipe
  ],
  exports: [
    FilmsComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmCardComponent,
    RatioIconComponent,
    ActorListComponent,
    ModalYoutubeComponent,
    YoutubePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FilmsRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [
    FilmServiceService,
    FilmResolver,
    FilmCastResolver
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ModalYoutubeComponent]

})
export class FilmsModule { }
