import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ObservableStateComponent } from './observable-sate/observable-state.component';
import { LifeycleHooksSampleComponent } from './lifeycle-hooks-sample/lifeycle-hooks-sample.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: ObservableStateComponent },
  { path: 'hook', component: LifeycleHooksSampleComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [ObservableStateComponent, LifeycleHooksSampleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class ObservableStateModule {}
