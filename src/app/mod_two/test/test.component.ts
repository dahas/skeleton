import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  public myColor = 'violet';

  constructor() { }

  ngOnInit() {
  }

}
