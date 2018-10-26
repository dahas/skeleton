import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [TwoComponent, TestComponent]
})
export class TwoModule { }
