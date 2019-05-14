import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonComponentComponent } from './non-component.component';

describe('NonComponentComponent', () => {
  let component: NonComponentComponent;
  let fixture: ComponentFixture<NonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
