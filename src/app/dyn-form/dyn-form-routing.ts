import type { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', loadComponent: () => import('./dyn-form.component').then(m => m.DynFormComponent) }];
