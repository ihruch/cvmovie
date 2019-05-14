import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private sanitaizer: DomSanitizer) {}
  transform(value: any) {
    return this.sanitaizer.bypassSecurityTrustResourceUrl(value);
 
  }

}
