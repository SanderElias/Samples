import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'theBad', loadComponent: () => import('./vm-home/vm-home.component').then(m => m.VmHomeComponent) },
  { path: 'theGood', loadComponent: () => import('./vm-home-vm/vm-home-vm.component').then(m => m.VmHomeVmComponent) },
  { path: 'user', loadComponent: () => import('./demo-user/demo-user.component').then(m => m.DemoUserComponent) },
  {
    path: 'user/:id',
    loadComponent: () => import('./demo-user/demo-user.component').then(m => m.DemoUserComponent),
    data: {
      fetchListFrom: 'https://jsonplaceholder.typicode.com/users',
      idProperty: 'id'
    }
  },
  {
    path: 'user/:id/related/:friendCode',
    loadComponent: () => import('./demo-user/demo-user.component').then(m => m.DemoUserComponent)
  },
  { path: '**', redirectTo: 'theGood' }
];
