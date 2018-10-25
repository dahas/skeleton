import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from './app.component';

import { OneModule } from './one/one.module';
import { TwoModule } from './mod_two/two.module';
import { TestComponent } from './mod_two/test/test.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneModule,
    TwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
