import type { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./observable-sate/observable-state.component').then(m => m.ObservableStateComponent) },
  {
    path: 'hook',
    loadComponent: () => import('./lifeycle-hooks-sample/lifeycle-hooks-sample.component').then(m => m.LifeycleHooksSampleComponent)
  },
  { path: '**', redirectTo: '' }
];
