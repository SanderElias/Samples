import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgTestRoutingModule } from './svg-test-routing.module';
import { SvgTestComponent } from './svg-test.component';
import { BlocksComponent } from './blocks/blocks.component';


@NgModule({
  declarations: [SvgTestComponent, BlocksComponent],
  imports: [
    CommonModule,
    SvgTestRoutingModule
  ]
})
export class SvgTestModule { }
