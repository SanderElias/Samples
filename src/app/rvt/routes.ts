import type { Route } from '@angular/router';

const routes: Route[] = [
  { path: 'template', loadComponent: () => import('./template/template.component') },
  { path: 'reactive', loadComponent: () => import('./reactive/reactive.component') },
  { path: '', loadComponent: () => import('./both/both.component') },
  { path: '**', redirectTo: 'both' }
];

export default routes;
