import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { ModalOverviewComponent } from './../shared/modal-overview/modal-overview.component';

import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {
  dataActor: any = {};
  dataMedia: any = {};
  dataTwitter: any = {};
  playFilms: any = {};
  dataFb: any = {};
  dataInst: any = {};
  dataAlsoKnown: any;
  faCalendar = faChevronCircleDown;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    window.scrollTo(0,0);
    this.route.data.subscribe( data => {
         console.log(data);
        [ this.dataActor, this.dataMedia, this.playFilms ]  = data['sActor'];
        this.getMediaSocial();
        this.dataAlsoKnown = this.playFilms['cast'];
    });
  }

    getMediaSocial() {
       
      if( this.dataMedia['twitter_id'] !== null) {
        this.dataTwitter = {
          status: true,
          name: 'Twitter',
          icon: faTwitterSquare,
          id: this.dataMedia['twitter_id'],
          path: 'https://twitter.com/',
        }
      };
      if( this.dataMedia['facebook_id'] !== null) {
        this.dataFb = {
          status: true,
          name: 'Facebook',
          icon: faFacebookSquare,
          id: this.dataMedia['facebook_id'],
          path: 'https://www.facebook.com/',
        }
      };
      if( this.dataMedia['instagram_id'] !== null) {
        this.dataInst = {
          status: true,
          name: 'Instagram',
          icon: faInstagram,
          id: this.dataMedia['instagram_id'],
          path: 'https://www.instagram.com/',
        }
      }
    }

    openOverview() {
      const dialogConfig = new MatDialogConfig();
   
      dialogConfig.width = '80vw';
      dialogConfig.data = {
        id: 2,
        biography: this.dataActor['biography']
      };

      this.dialog.open(ModalOverviewComponent, dialogConfig);
    }
    
    checkGender(data){
      return  (data === 1)? 'Женский' : 'Мужской';

    }

}
