import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from './slide.component';

const routes: Routes = [
  { path: ':slug', component: SlideComponent },
  { path: '**', component: SlideComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideRoutingModule {}
