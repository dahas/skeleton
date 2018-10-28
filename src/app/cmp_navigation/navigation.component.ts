import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'base-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})
export class NavigationComponent {

  @Input() title: string;
  @ViewChild('toggler') toggler: ElementRef;

  constructor() { }

  toggle() {
    /**
     * In order to hide the bootstrap menu on smaller devices
     * after clicking an item, it needs a little hack. First
     * the toggler must be visible. Then we emit a click event
     * on the toggler when clicking a menu item.
     */
    if (this.toggler.nativeElement.offsetParent !== null) {
      this.toggler.nativeElement.click();
    }
  }

}
