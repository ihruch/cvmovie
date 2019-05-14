import { Component, OnInit, ViewChild, Input } from '@angular/core';
 


@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.scss']
})
export class ActorItemComponent implements OnInit {
  @Input() actor: any;
  @Input() imgPath: string;

  constructor() { }

  ngOnInit() {
   
  }
  modifyData(arr) {
    const strFilm = [];
    arr.forEach(el => {
       strFilm.push(el.title); 
    });
    return strFilm.join(', ');
  }


}
