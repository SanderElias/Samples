import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BintreeRoutingModule } from './bintree-routing.module';
import { BintreeComponent } from './bintree.component';
import { BNodeComponent } from './b-node/b-node.component';


@NgModule({
    imports: [
        CommonModule,
        BintreeRoutingModule,
        BintreeComponent,
        BNodeComponent
    ]
})
export class BintreeModule { }
