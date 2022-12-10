import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgCalenderComponent } from './svg-calender/svg-calender.component';

export const routes: Routes = [{ path: '', component: SvgCalenderComponent }];

@NgModule({
  declarations: [SvgCalenderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SvgCalendarModule {}
