import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-component',
  templateUrl: './non-component.component.html',
  styleUrls: ['./non-component.component.scss']
})
export class NonComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
