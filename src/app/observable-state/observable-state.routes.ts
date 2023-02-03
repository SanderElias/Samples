import { Routes } from '@angular/router';
import { LifeycleHooksSampleComponent } from './lifeycle-hooks-sample/lifeycle-hooks-sample.component';
import { ObservableStateComponent } from './observable-sate/observable-state.component';

export const routes: Routes = [
  { path: '', component: ObservableStateComponent },
  { path: 'hook', component: LifeycleHooksSampleComponent },
  { path: '**', redirectTo: '' },
];

