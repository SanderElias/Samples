import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgTestRoutingModule } from './svg-test-routing.module';
import { SvgTestComponent } from './svg-test.component';
import { BlocksComponent } from './blocks/blocks.component';


@NgModule({
    imports: [
        CommonModule,
        SvgTestRoutingModule,
        SvgTestComponent, BlocksComponent
    ]
})
export class SvgTestModule { }
