import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalogClockComponent } from './analog-clock.component';

export const routes: Routes = [{ path: '', component: AnalogClockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalogClockRoutingModule { }
