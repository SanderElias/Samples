import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalogClockRoutingModule } from './analog-clock-routing.module';
import { AnalogClockComponent } from './analog-clock.component';


@NgModule({
  declarations: [AnalogClockComponent],
  imports: [
    CommonModule,
    AnalogClockRoutingModule
  ]
})
export class AnalogClockModule { }
