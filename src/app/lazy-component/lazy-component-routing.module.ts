import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponentComponent } from './lazy-component.component';

const routes: Routes = [{ path: '', component: LazyComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyComponentRoutingModule { }
