import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'one',
  pathMatch: 'full'
}, {
  path: 'one',
  component: OneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }
