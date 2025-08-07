import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./mqtt.component').then(m => m.MqttComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./device-list.component').then(m => m.DeviceListComponent)
  }
];

export default routes;
