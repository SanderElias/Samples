import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmHomeComponent } from './vm-home/vm-home.component';
import { Routes, RouterModule } from '@angular/router';
import { PaintingComponent } from './painting/painting.component';
import { QuoteComponent } from './quote/quote.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { VmHomeVmComponent } from './vm-home-vm/vm-home-vm.component';

const routes: Routes = [
  { path: 'theBad', component: VmHomeComponent},
  { path: 'theGood', component: VmHomeVmComponent },
  { path: '**', redirectTo: 'theGood'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    VmHomeComponent,
    PaintingComponent,
    QuoteComponent,
    PlayButtonComponent,
    VmHomeVmComponent
  ]
})
export class ViewModelModule {}
