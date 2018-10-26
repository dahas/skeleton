import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';

import { AppSharedModule } from '../app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    OneRoutingModule,
    AppSharedModule
  ],
  declarations: [
    OneComponent
  ]
})
export class OneModule { }
