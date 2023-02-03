import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgCalenderComponent } from './svg-calender/svg-calender.component';

export const routes: Routes = [{ path: '', component: SvgCalenderComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SvgCalenderComponent]
})
export class SvgCalendarModule {}
