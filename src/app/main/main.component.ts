import { Component, OnInit } from '@angular/core';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FilmServiceService } from './../shared/services/film-service.service';
import { ActorsService } from './../shared/services/actor-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  popFirstFilm: any;
  popSecondFilm: any;
  popThirdFilm: any;
  popFourthFilm: any;
  popFifthFilm: any;
  popSixthFilm: any;
  popularThreeFilm: any;
  firstPage = 1;

  popularActors: any;
  errorActor: any;
  errorFilms: any;
  constructor(
    private filmService: FilmServiceService,
    private actorService: ActorsService
  ) { }

  ngOnInit() {
    if ( this.filmService.populareFilm ) {
      [
        this.popFirstFilm,
        this.popSecondFilm,
        this.popThirdFilm,
        this.popFourthFilm,
        this.popFifthFilm,
        this.popSixthFilm
      ] = this.filmService.populareFilm['results'];
    } else {      
      this.filmService.getFilms(this.firstPage).subscribe( 
        films => {
          [
            this.popFirstFilm,
            this.popSecondFilm,
            this.popThirdFilm,
            this.popFourthFilm,
            this.popFifthFilm,
            this.popSixthFilm
          ] = films['results'];
        },
        error => {
          this.errorFilms = error.message;
          console.log(error);
        }
    )
    }

    this.actorService.getActors(1).subscribe(
      data => {
        console.log('Actors data', data)
        this.popularActors = data['results'].slice(0,4);
      },
      error => {
         this.errorActor = error.message;
         console.log('errorActor ', error);
      }
    )

  }

  castActor(arr) {
    const str = [];
    arr.forEach(element => {
      str.push(element.title);
    });
    return str.join(', ');
  }

}
