import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgTimerComponent } from './svg-timer.component';

const routes: Routes = [{ path: '', component: SvgTimerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvgTimerRoutingModule { }
