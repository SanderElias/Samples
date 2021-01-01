import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeSampleRoutingModule } from './code-sample-routing.module';
import { CodeSampleComponent } from './code-sample.component';


@NgModule({
  declarations: [CodeSampleComponent],
  imports: [
    CommonModule,
    CodeSampleRoutingModule
  ]
})
export class CodeSampleModule { }
