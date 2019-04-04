import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ObservableSateComponent } from './observable-sate/observable-sate.component';

const routes: Routes = [{ path: '', component: ObservableSateComponent }];

@NgModule({
  declarations: [ObservableSateComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ObservableStateModule {}
