import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./menu/menu.component').then(m => m.MenuComponent)
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./device-list.component').then(m => m.DeviceListComponent)
  },
  {
    path: 'power',
    loadComponent: () => import('./mqtt.component').then(m => m.MqttComponent)
  }
];
