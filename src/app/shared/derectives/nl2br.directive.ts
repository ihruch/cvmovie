
import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appNl2br]'
})
export class Nl2brDirective {
  @Input() appNl2br: string;

  constructor() { }

  @HostBinding('innerHtml') get modifyText() {
    return this.nl2br(this.appNl2br);
  }

  nl2br(text: string): string {
    return text.replace(/([^>])\n/g, '$1<br/>');
  }
}
