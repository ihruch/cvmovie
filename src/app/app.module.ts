import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './header/header.module';
import { FilmsModule } from './films/films.module';
import { ActorsModule } from './actors/actors.module';

import { FilmsRoutingModule } from './films/films-routing.module';
import { ActorsRoutingModule } from './actors/actors-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**components */
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import { NonComponentComponent } from './non-component/non-component.component';

import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlertMsgComponent,
    NonComponentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule ,
    HttpClientModule,
    FilmsRoutingModule,
    ActorsRoutingModule,
    AppRoutingModule,
    HeaderModule,
    FilmsModule,
    ActorsModule,
    LayoutModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
