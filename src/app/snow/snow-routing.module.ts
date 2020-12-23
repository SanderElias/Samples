import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnowComponent } from './snow.component';

const routes: Routes = [{ path: '', component: SnowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnowRoutingModule { }
