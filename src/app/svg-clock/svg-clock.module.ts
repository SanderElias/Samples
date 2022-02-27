import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgClockRoutingModule } from './svg-clock-routing.module';
import { SvgClockComponent } from './svg-clock.component';


@NgModule({
  declarations: [
    SvgClockComponent
  ],
  imports: [
    CommonModule,
    SvgClockRoutingModule
  ]
})
export class SvgClockModule { }
