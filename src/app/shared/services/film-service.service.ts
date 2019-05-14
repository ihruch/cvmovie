import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { filter, pluck, tap, map} from 'rxjs/operators';

@Injectable()
export class FilmServiceService {

  apiUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'd73711f75d852eb912c0d4955eb96e08';
  movieUrl: string = `${this.apiUrl}/movie`;
  searchUrl: string = `${this.apiUrl}/search`;
  personUrl: string = `${this.apiUrl}/person`;

  params: string = `&api_key=${this.apiKey}&language=ru-RU`;
  paramsKey: string = `?api_key=${this.apiKey}`;
  paramsLang: string = `&language=ru-RU`;


  imgPath: string = 'https://image.tmdb.org/t/p';

   smallBackPath: string = `${this.imgPath}/w235_and_h235_face`;
  smallMainPage: string = `${this.imgPath}/w300_and_h450_face`; //https://image.tmdb.org/t/p/w300_and_h450_bestv2

  smallPortret: string = `${this.imgPath}/w138_and_h175_face`;
  populareFilm: any;
  
  constructor(private http: HttpClient) { }

  getFilms(idPage) {
    return this.http.get(`${this.movieUrl}/popular?page=${idPage}${this.params}`).pipe(
      tap( data => {
        if(data['page'] === 1) {
          this.populareFilm = data;
        }
      })
    )
  }

  getMainInfoFilm(idFilm) {
    return this.http.get(`${this.movieUrl}/${idFilm}${this.paramsKey}${this.paramsLang}`) ;
  }

  getVideoFilm(idFilm) {
    return this.http.get(`${this.movieUrl}/${idFilm}/videos${this.paramsKey}${this.paramsLang}`).pipe( pluck('results') );
  }
  
  getActorsFilm(idFilm) {
    return this.http.get(`${this.movieUrl}/${idFilm}/credits${this.paramsKey}`).pipe( pluck('cast'));
     
        
  }
  getCrewFilm(idFilm) {
    return this.http.get(`${this.movieUrl}/${idFilm}/credits${this.paramsKey}`).pipe( pluck('crew'));
    // .pipe(filter(person => person['job'] === 'Director' ));
  }

  getSimilarFilms(idFilm) {
    return this.http.get(
      `${this.movieUrl}/${idFilm}/similar${this.paramsKey}${this.paramsLang}`
    );
  }
}

