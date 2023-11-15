import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: 'testob', loadComponent: () => import('./test/test.component').then(m => m.TestComponent) },
  { path: '**', redirectTo: 'testob' },
];
