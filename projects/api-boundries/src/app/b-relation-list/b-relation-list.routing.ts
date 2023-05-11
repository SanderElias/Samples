import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: ':id', loadComponent: () => import('./b-relation-detail/b-relation-detail.component').then(m => m.BRelationDetailComponent) },
  { path: '', loadComponent: () => import('./b-relation-list.component').then(m => m.BRelationListComponent) },
];

