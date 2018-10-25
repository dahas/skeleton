import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
  path: '',   // When no route applied redirect to default
  redirectTo: 'one',
  pathMatch: 'full'
}, {
  path: 'one',
  loadChildren: 'src/app/mod_one/one.module#OneModule'  // Lazy loading
}, {
  path: 'two',
  loadChildren: 'src/app/mod_two/two.module#TwoModule'  // Lazy loading
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
