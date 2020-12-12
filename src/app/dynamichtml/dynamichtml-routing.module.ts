import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicHtmlComponent } from './dynamichtml.component';

const routes: Routes = [{ path: '', component: DynamicHtmlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamichtmlRoutingModule { }
