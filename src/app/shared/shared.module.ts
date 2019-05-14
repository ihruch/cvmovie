import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadImgDirective } from './derectives/load-img.directive';
import { Nl2brDirective } from './derectives/nl2br.directive';


@NgModule({
  declarations: [
    LoadImgDirective,
    Nl2brDirective
  ],
  exports: [
    LoadImgDirective,
    Nl2brDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
