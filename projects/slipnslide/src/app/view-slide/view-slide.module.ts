import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSlideRoutingModule } from './view-slide-routing.module';
import { ViewSlideComponent } from './view-slide.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  imports: [CommonModule, ViewSlideRoutingModule, ScullyLibModule, ViewSlideComponent],
})
export class ViewSlideModule {}
