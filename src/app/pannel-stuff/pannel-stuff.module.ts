import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PannelStuffRoutingModule } from './pannel-stuff-routing.module';
import { PannelStuffComponent } from './pannel-stuff.component';
import {
  PannelCloseDirective,
  PannelComponent,
  PannelFooterDirective,
} from './pannel/pannel.component';

@NgModule({
  declarations: [
    PannelStuffComponent,
    PannelComponent,
    PannelCloseDirective,
    PannelFooterDirective,
  ],
  imports: [CommonModule, PannelStuffRoutingModule],
})
export class PannelStuffModule {}
