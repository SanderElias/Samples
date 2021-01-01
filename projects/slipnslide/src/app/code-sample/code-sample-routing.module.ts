import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeSampleComponent } from './code-sample.component';

const routes: Routes = [{ path: '', component: CodeSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeSampleRoutingModule { }
