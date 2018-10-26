import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoComponent } from './two.component';
import { CanViewContentGuard } from './can-view-content.guard';

const routes: Routes = [{
  path: '',
  component: TwoComponent,
  canActivate: [CanViewContentGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanViewContentGuard]
})
export class TwoRoutingModule { }
