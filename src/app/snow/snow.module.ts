import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowRoutingModule } from './snow-routing.module';
import { SnowComponent } from './snow.component';


@NgModule({
    imports: [
        CommonModule,
        SnowRoutingModule,
        SnowComponent
    ]
})
export class SnowModule { }
