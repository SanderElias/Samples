import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./local-state.component').then(m => m.LocalStateComponent),
    children: [
      { path: ':id', loadComponent: () => import('./ls-home/ls-home.component').then(m => m.LsHomeComponent) },
      { path: '', redirectTo: './1', pathMatch: 'full' }
    ]
  }
];
