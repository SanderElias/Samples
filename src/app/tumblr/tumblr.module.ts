import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TumblrRoutingModule } from './tumblr-routing.module';
import { TumblrComponent } from './tumblr.component';


@NgModule({
    imports: [
        CommonModule,
        TumblrRoutingModule,
        TumblrComponent
    ]
})
export class TumblrModule { }
