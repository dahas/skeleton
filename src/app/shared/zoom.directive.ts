import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[baseZoom]'
})
export class ZoomDirective {

  @HostBinding('style.font-size.px') size: any;

  @HostListener('click') onClick() {
    console.log('afassadada');
    this.size = '40';
  }

  constructor() { }

}
