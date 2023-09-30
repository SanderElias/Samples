import { Routes } from '@angular/router';
import {routes as appRoutes} from './app.routes'

export const routes: Routes = [
  {
    path: ':langId',
    loadComponent: () => import('./lang/lang.component').then(m => m.LangComponent),
    children: appRoutes
  },
  {
    "path": '',
    pathMatch: 'full',
    loadComponent: () => import('./pick-lang/pick-lang.component').then(m => m.PickLangComponent)
  }
];
