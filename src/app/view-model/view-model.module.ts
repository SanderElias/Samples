import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmHomeComponent } from './vm-home/vm-home.component';
import { Routes, RouterModule } from '@angular/router';
import { PaintingComponent } from './painting/painting.component';
import { QuoteComponent } from './quote/quote.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { VmHomeVmComponent } from './vm-home-vm/vm-home-vm.component';
import { DemoUserComponent } from './demo-user/demo-user.component';

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
    path: '/user/:id/related/:friendCode',
    component: DemoUserComponent,
  },
  { path: '**', redirectTo: 'theGood' },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), VmHomeComponent,
        PaintingComponent,
        QuoteComponent,
        PlayButtonComponent,
        VmHomeVmComponent,
        DemoUserComponent]
})
export class ViewModelModule {}
