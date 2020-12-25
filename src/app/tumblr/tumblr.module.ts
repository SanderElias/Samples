import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TumblrRoutingModule } from './tumblr-routing.module';
import { TumblrComponent } from './tumblr.component';


@NgModule({
  declarations: [TumblrComponent],
  imports: [
    CommonModule,
    TumblrRoutingModule
  ]
})
export class TumblrModule { }
