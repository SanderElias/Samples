import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PannelStuffComponent } from './pannel-stuff.component';

const routes: Routes = [{ path: '', component: PannelStuffComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PannelStuffRoutingModule { }
