import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigDataComponent } from './big-data.component';

const routes: Routes = [{ path: '', component: BigDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigDataRoutingModule { }
