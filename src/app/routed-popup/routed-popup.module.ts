import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BackDropComponent } from './back-drop/back-drop.component';
import { BackHomeComponent } from './back-home/back-home.component';

/** routes */
const routes: Routes = [
  {
    path: 'up',
    component: BackDropComponent,
    outlet: 'popup',
    // children: [
    //   { path: '', component: BackHomeComponent, outlet: 'popup' },
    //   { path: '**', redirectTo: '', outlet: 'popup' }
    // ]
  }
];

@NgModule({
  declarations: [BackDropComponent, BackHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class RoutedPopupModule {}
