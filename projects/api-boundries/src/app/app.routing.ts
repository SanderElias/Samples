import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'relations', loadChildren: () => import('./relation-list/relation-list.routing').then(m => m.routes) },
  { path: 'bRelations', loadChildren: () => import('./b-relation-list/b-relation-list.routing').then(m => m.routes) },
  { path: '**', redirectTo: 'bRelations' }
];


