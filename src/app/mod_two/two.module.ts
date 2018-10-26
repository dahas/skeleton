import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../app-shared.module';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { TestComponent } from './cmp_test/test.component';

@NgModule({
  imports: [
    AppSharedModule,
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [TwoComponent, TestComponent]
})
export class TwoModule { }
