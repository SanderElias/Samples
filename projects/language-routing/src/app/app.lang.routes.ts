import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':langId',
    loadComponent: () =>
      import('./lang/lang.component').then(m => m.LangComponent),
    loadChildren: () => import('./app.routes').then(m => m.routes),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pick-lang/pick-lang.component').then(m => m.PickLangComponent),
  },
];
