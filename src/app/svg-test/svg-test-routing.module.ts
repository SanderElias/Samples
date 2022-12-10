import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgTestComponent } from './svg-test.component';

export const routes: Routes = [{ path: '', component: SvgTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvgTestRoutingModule { }
