import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideRoutingModule } from './slide-routing.module';
import { SlideComponent } from './slide.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [SlideComponent],
  imports: [CommonModule, SlideRoutingModule, ScullyLibModule],
})
export class SlideModule {}
