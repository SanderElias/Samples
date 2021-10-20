import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStateRoutingModule } from './local-state-routing.module';
import { LocalStateComponent } from './local-state.component';
import { LsHomeComponent } from './ls-home/ls-home.component';


@NgModule({
  declarations: [
    LocalStateComponent,
    LsHomeComponent
  ],
  imports: [
    CommonModule,
    LocalStateRoutingModule
  ]
})
export class LocalStateModule { }
