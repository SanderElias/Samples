import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynFormComponent } from './dyn-form.component';

const routes: Routes = [{ path: '', component: DynFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynFormRoutingModule { }
