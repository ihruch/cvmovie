import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { FilmServiceService } from '../../shared/services/film-service.service';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  dataFilms: object[] = [];
  imgPath: String; // poster_path
  kindView: any;

   // MatPaginator Inputs
   lengthPag = null;
   pageSizePag = 20;
   pageEvent: PageEvent;
   hidePageSize = false;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   
   
  pageConfig = {
    currentPage : 1,
    totalResult: null,
    totalPage: null,
    lastPage: null
  };

  selected: String = 'minSizeImg';

  constructor(
    private filmService: FilmServiceService,
  ) {}


 
  ngOnInit() {
    this.changeView();
    this.imgPath = this.filmService.imgPath;
    this.getDataFilms();
  }

  saveData(data) {
    this.dataFilms = data.results;
    this.pageConfig.currentPage = data.page;
    this.pageConfig.totalPage = data.total_pages;
    this.pageConfig.totalResult = data.total_results;
    this.lengthPag = data.total_results;
  }

  changeView() {
    this.kindView = ( this.selected === 'minSizeImg') ? true : false;
    this.getDataFilms();
  }

  getDataFilms() {
    this.filmService.getFilms(this.pageConfig.currentPage).subscribe( films => {
      console.log(films);
      this.saveData(films);
    });
  }

  handlerClickPaginator(event) {
    this.pageConfig.currentPage = this.pageEvent.pageIndex + 1;
    this.getDataFilms();

  }



}




