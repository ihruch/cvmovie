import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FilmServiceService } from './../../shared/services/film-service.service';
import { CrewFilm } from './../shared/models/crew-film';
import { ActorFilm } from './../shared/models/actor-film';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  filmActors: ActorFilm[] = [];
  filmCrew: CrewFilm[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmServiceService
  ) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
       [this.filmActors, this.filmCrew ] = data.peopleFilm;
       window.scrollTo(0,0);
    })
    
  }

}
