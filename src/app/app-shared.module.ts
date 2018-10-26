import { NgModule } from '@angular/core';
import { ZoomDirective } from './shared/zoom.directive';

@NgModule({
    declarations: [
      ZoomDirective
    ],
    imports: [],
    exports: [ZoomDirective]
  })
export class AppSharedModule { }
