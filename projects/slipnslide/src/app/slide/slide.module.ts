import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SlideRoutingModule } from './slide-routing.module';
import { SlideComponent } from './slide.component';

@NgModule({
  declarations: [SlideComponent],
  imports: [CommonModule, SlideRoutingModule],
})
export class SlideModule {}
