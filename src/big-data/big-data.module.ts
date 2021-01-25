import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigDataRoutingModule } from './big-data-routing.module';
import { BigDataComponent } from './big-data.component';
import { SeLetModule } from '@se-ng/let';


@NgModule({
  declarations: [BigDataComponent],
  imports: [
    CommonModule,
    BigDataRoutingModule,
    SeLetModule
  ]
})
export class BigDataModule { }
