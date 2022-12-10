import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgClockComponent } from './svg-clock.component';

export const routes: Routes = [{ path: '', component: SvgClockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvgClockRoutingModule { }
