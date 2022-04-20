import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynFormRoutingModule } from './dyn-form-routing.module';
import { DynFormComponent } from './dyn-form.component';


@NgModule({
  declarations: [
    DynFormComponent
  ],
  imports: [
    CommonModule,
    DynFormRoutingModule
  ]
})
export class DynFormModule { }
