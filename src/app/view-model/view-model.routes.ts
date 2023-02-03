import { Routes } from '@angular/router';
import { DemoUserComponent } from './demo-user/demo-user.component';
import { VmHomeVmComponent } from './vm-home-vm/vm-home-vm.component';
import { VmHomeComponent } from './vm-home/vm-home.component';

export const routes: Routes = [
  { path: 'theBad', component: VmHomeComponent },
  { path: 'theGood', component: VmHomeVmComponent },
  { path: 'user', component: DemoUserComponent },
  {
    path: 'user/:id',
    component: DemoUserComponent,
    data: {
      fetchListFrom: 'https://jsonplaceholder.typicode.com/users',
      idProperty: 'id',
    },
  },
  {
    path: 'user/:id/related/:friendCode',
    component: DemoUserComponent,
  },
  { path: '**', redirectTo: 'theGood' },
];


