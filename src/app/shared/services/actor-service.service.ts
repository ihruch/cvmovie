import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { filter, pluck, tap, map} from 'rxjs/operators';

@Injectable()
export class ActorsService {

  apiUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'd73711f75d852eb912c0d4955eb96e08';
  searchUrl: string = `${this.apiUrl}/search`;
  personUrl: string = `${this.apiUrl}/person`;

  params: string = `&api_key=${this.apiKey}&language=ru-RU`;
  paramsKey: string = `?api_key=${this.apiKey}`;
  paramsLang: string = `&language=ru-RU`;

  imgPath: string = 'https://image.tmdb.org/t/p';
  impMainPath: string = 'https://image.tmdb.org/t/p/w235_and_h235_face/';
  populareActors: any;

  constructor(private http: HttpClient) { }

  getActors(idPage) {
    return this.http.get(`${this.personUrl}/popular?page=${idPage}${this.params}`).pipe(
      tap( data => {
        if(data['page'] === 1) {
          this.populareActors = data;
        }
      })
    )
  }

  getSingleActor(id) {
    return this.http.get(`${this.personUrl}/${id}${this.paramsKey}${this.paramsLang}`);
  }

  getSocialMedia(id) {
    return this.http.get(`${this.personUrl}/${id}/external_ids${this.paramsKey}${this.paramsLang}`);
  }
  getPlayFilms(id) {
    // https://api.themoviedb.org/3/person/60073/combined_credits?api_key=d73711f75d852eb912c0d4955eb96e08&language=ru-RU

    return this.http.get(`${this.personUrl}/${id}/combined_credits${this.paramsKey}${this.paramsLang}`);
  }
}


