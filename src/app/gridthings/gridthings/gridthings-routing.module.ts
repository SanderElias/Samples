import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridthingsComponent } from './gridthings.component';

const routes: Routes = [{ path: '', component: GridthingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridthingsRoutingModule { }
