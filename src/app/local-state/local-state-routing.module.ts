import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalStateComponent } from './local-state.component';
import { LsHomeComponent } from './ls-home/ls-home.component';

const routes: Routes = [{ path: '', component: LocalStateComponent ,
  children: [
    { path: ':id', component: LsHomeComponent },
    { path: '', redirectTo: './1', pathMatch: 'full' }

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalStateRoutingModule { }
