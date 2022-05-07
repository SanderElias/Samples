import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynFormRoutingModule } from './dyn-form-routing.module';
import { DynFormComponent } from './dyn-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DynFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DynFormRoutingModule
  ]
})
export class DynFormModule { }
