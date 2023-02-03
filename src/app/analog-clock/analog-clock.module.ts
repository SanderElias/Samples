import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalogClockRoutingModule } from './analog-clock-routing.module';
import { AnalogClockComponent } from './analog-clock.component';


@NgModule({
    imports: [
        CommonModule,
        AnalogClockRoutingModule,
        AnalogClockComponent
    ]
})
export class AnalogClockModule { }
