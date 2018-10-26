import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../app-shared.module';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';

@NgModule({
  imports: [
    AppSharedModule,
    CommonModule,
    OneRoutingModule
  ],
  declarations: [
    OneComponent
  ]
})
export class OneModule { }
