import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TumblrComponent } from './tumblr.component';

export const routes: Routes = [{ path: '', component: TumblrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TumblrRoutingModule { }
