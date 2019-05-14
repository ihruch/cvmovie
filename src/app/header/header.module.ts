import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { FilmsRoutingModule } from '../films/films-routing.module';
import { ActorsRoutingModule } from '../actors/actors-routing.module'; 
import { AppRoutingModule } from './../app-routing.module';

import { HeaderComponent } from './header.component';
import { MainNavComponent } from './main-nav/main-nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainNavComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FilmsRoutingModule,
    ActorsRoutingModule,
    AppRoutingModule
  ]
})
export class HeaderModule { }
