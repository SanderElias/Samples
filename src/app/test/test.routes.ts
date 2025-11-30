import type { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'testob', loadComponent: () => import('./test/test.component').then(m => m.TestComponent) },
  { path: '**', redirectTo: 'testob' }
];
