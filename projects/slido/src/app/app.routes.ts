import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'present',
    loadComponent: () => import('./present/present.component').then(m => m.PresentComponent),
    children: [
      {
        path: ':index',
        loadComponent: () => import('./slide/slide.component').then(m => m.SlideComponent)
      }
    ]
  },
  { path: 'overview', loadComponent: () => import('./overview/overview.component').then(m => m.OverviewComponent) },
  {
    path: '**',
    redirectTo: 'overview'
  }
];
