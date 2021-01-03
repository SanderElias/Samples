import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSlideComponent } from './view-slide.component';

const routes: Routes = [
  { path: '', component: ViewSlideComponent },
  { path: ':slide', component: ViewSlideComponent },
  { path: '**', component: ViewSlideComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSlideRoutingModule {}
