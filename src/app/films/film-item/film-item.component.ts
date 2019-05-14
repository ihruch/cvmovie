import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Film } from './../shared/models/film';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit{
  isTrue = true;
  showLargeImg ;

  @Input() film: Film;
  @Input() imgPath: String;
  @Input() view: any;
    
  maxImg: String = '/w500_and_h282_face';
  minImg: String  = '/w185_and_h278_bestv2';
  constructor(
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    // console.log('ITEM VIEW -- ', this.view);
   }


}
