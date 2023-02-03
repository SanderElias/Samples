import { Routes } from '@angular/router';
import { LocalStateComponent } from './local-state.component';
import { LsHomeComponent } from './ls-home/ls-home.component';

export const routes: Routes = [{ path: '', component: LocalStateComponent ,
  children: [
    { path: ':id', component: LsHomeComponent },
    { path: '', redirectTo: './1', pathMatch: 'full' }

  ]}];


