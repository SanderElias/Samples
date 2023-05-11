import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: ':id', loadComponent: () => import('./relation-detail/relation-detail.component').then(m => m.RelationDetailComponent) },
  { path: '', loadComponent: () => import('./relation-list.component').then(m => m.RelationListComponent) },
];

