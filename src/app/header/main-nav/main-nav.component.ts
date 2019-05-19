import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnChanges {
  isShow: boolean;

  links: object[] = [
    {
      path: '/main',
      label: 'Главная',
      active: 'button-active',
      icon: 'home'
    },
    {
      path: '/films',
      label: 'Фильмы',
      active: 'button-active',
      icon: 'format_list_bulleted'
    },
    {
      path: '/actors',
      label: 'Актеры',
      active: 'button-active',
      icon: 'recent_actors'
    }
  ];
  
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.changeBreakPoint();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeBreakPoint();
  }

  changeBreakPoint() {
    this.breakpointObserver.observe(['(min-width: 768px)']).subscribe( (state: BreakpointState) => {
      if (state.matches) {
        // console.log('Viewport is 768px or over!');
        this.isShow = false;
       } else {
        // console.log('Viewport is getting SMALLER!');
        this.isShow = true;
      }
    });
  }

}
