import { Routes } from '@angular/router';

import { BackDropComponent } from './back-drop/back-drop.component';

/** routes */
export const routes: Routes = [
  {
    path: 'up',
    component: BackDropComponent,
    outlet: 'popup',
    // children: [
    //   { path: '', component: BackHomeComponent, outlet: 'popup' },
    //   { path: '**', redirectTo: '', outlet: 'popup' }
    // ]
  },
];
