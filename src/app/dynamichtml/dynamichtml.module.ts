import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamichtmlRoutingModule } from './dynamichtml-routing.module';
import { DynamicHtmlComponent } from './dynamichtml.component';


@NgModule({
    imports: [CommonModule, DynamichtmlRoutingModule, DynamicHtmlComponent]
})
export class DynamichtmlModule {
  constructor() {}
}
