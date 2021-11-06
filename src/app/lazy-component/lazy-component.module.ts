import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentRoutingModule } from './lazy-component-routing.module';
import { LazyComponentComponent } from './lazy-component.component';

@NgModule({
  declarations: [
    LazyComponentComponent,

  ],
  imports: [
    CommonModule,
    LazyComponentRoutingModule
  ]
})
export class LazyComponentModule { }
