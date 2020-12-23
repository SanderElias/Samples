import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowRoutingModule } from './snow-routing.module';
import { SnowComponent } from './snow.component';


@NgModule({
  declarations: [SnowComponent],
  imports: [
    CommonModule,
    SnowRoutingModule
  ]
})
export class SnowModule { }
