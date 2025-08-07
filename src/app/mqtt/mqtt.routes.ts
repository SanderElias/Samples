import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./device-list.component').then(m => m.DeviceListComponent),
  },
];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./mqtt.component').then(m => m.MqttComponent),
  },
];
