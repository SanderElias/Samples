import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamichtmlRoutingModule } from './dynamichtml-routing.module';
import { DynamicHtmlComponent } from './dynamichtml.component';


@NgModule({
  declarations: [DynamicHtmlComponent],
  imports: [CommonModule, DynamichtmlRoutingModule],
})
export class DynamichtmlModule {
  constructor() {}
}
