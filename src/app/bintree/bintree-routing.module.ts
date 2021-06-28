import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BintreeComponent } from './bintree.component';

const routes: Routes = [{ path: '', component: BintreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BintreeRoutingModule { }
