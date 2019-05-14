import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActorsService } from './../../shared/services/actor-service.service';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  lengthPag = null;
  pageSize = 20;
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataActors: any;

  pageConfig = {
    currentPage : 1,
    totalResult: null,
    totalPage: null,
    lastPage: null
  };
  imgPath: string = this.actorsService.impMainPath;
  constructor(
    private actorsService: ActorsService,
  ) { }

  saveData(data) {
    this.dataActors = data.results;
    this.pageConfig.currentPage = data.page;
    this.pageConfig.totalPage = data.total_pages;
    this.pageConfig.totalResult = data.total_results;
    this.lengthPag = data.total_results;
  }

  ngOnInit() {
   this.getDataActors();
  }

  getDataActors() {
    this.actorsService.getActors(this.pageConfig.currentPage).subscribe( actors => {
      console.log(actors);
      this.saveData(actors);
    })
  }

  handlerClickPaginator(event) {
    console.log('handling paginator ', event);
    this.pageConfig.currentPage = this.pageEvent.pageIndex + 1;
    this.getDataActors();
  }

}
