import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSlideRoutingModule } from './view-slide-routing.module';
import { ViewSlideComponent } from './view-slide.component';

@NgModule({
  imports: [CommonModule, ViewSlideRoutingModule,  ViewSlideComponent],
})
export class ViewSlideModule {}
