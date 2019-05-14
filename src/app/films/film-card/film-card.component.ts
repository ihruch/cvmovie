import { Component, OnInit, AfterViewInit, OnDestroy,  ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FilmServiceService } from '../../shared/services/film-service.service';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ModalYoutubeComponent } from './../shared/modal-youtube/modal-youtube.component';

import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit, AfterViewInit, OnDestroy {
  idFilm: String;
  bgPathImg: String;
  film: any;
  imgMainPath = this.filmService.smallMainPage;

  filmDesc: any;
  filmVideo: any[];
  filmActors: any[];
  filmCrew: any[];
  filmSimilar: any[];
  bkUrl: any;
  tempCrewArr =[];
  fb = faFacebookSquare;
  insta = faInstagram;
  isVisible: boolean;
  isYouTubeUrl: string;

  @ViewChild('imgCard', { read: ElementRef}) private  imgCard: ElementRef;

  constructor(
    private filmService: FilmServiceService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.route.data.subscribe( data => {
      [ this.filmDesc, this.filmVideo, this.filmActors, this.filmCrew, this.filmSimilar ] = data.sFilm;
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isYouTubeID(this.filmVideo);
    this.bkUrl = this.getBkUrl();

    console.log(this.filmDesc);
    console.log(this.filmVideo);
    console.log(this.filmActors);
    console.log(this.filmCrew);
    console.log(this.filmSimilar);
  }/** end ngOnInit */


  getBkUrl() {
    const styles = {
      'background-image': 'url(https://image.tmdb.org/t/p/w1400_and_h450_face' + this.filmDesc['backdrop_path'] + ')'
    };
    return styles;
  }

  isYouTubeID(param) {
    if (param.length > 0) {
      this.isYouTubeUrl = param[0].key;
    } else {
      this.isYouTubeUrl = '';
      this.isVisible = true;
    }

  }

  ngAfterViewInit() {
    console.log(' Is run ngAfterViewInit');

    this.filmCrew.forEach(element => {
      if( element.department === 'Directing' ) {
        this.tempCrewArr.push(element);
      }
    })
  }

  addFavorite() {}
  addBookmark() {}
  
  playYoutube() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;

    dialogConfig.width = '100vw';
    dialogConfig.panelClass = 'myapp-no-padding-dialog';

    dialogConfig.data = {
      id: 1,
      title: this.filmDesc['title'],
      idYouTube: this.isYouTubeUrl
    };
    this.dialog.open(ModalYoutubeComponent, dialogConfig);
  }

  ngOnDestroy() {}
  
  
}










