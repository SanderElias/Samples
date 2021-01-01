import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) },
  { path: 'code-sample', loadChildren: () => import('./code-sample/code-sample.module').then(m => m.CodeSampleModule) },
  { path: 'slide', loadChildren: () => import('./slide/slide.module').then(m => m.SlideModule) },
  // { path: '**', redirectTo: 'code-sample' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
