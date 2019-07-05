import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'filterSamp',
    loadChildren:
      () => import('../../src/app/filter-samp/filter-samp.module').then(m => m.FilterSampModule)
  },
  {
    path: 'modalSamp',
    loadChildren: () => import('../../src/app/modal-samp/modal-samp.module').then(m => m.ModalSampModule)
  },
  {
    path: 'mixinSamp',
    loadChildren: () => import('../../src/app/mixins/mixins.module').then(m => m.MixinsModule)
  },
  {
    path: 'htmlLoad',
    loadChildren: () => import('../../src/app/html-load/html-load.module').then(m => m.HtmlLoadModule)
  },
  {
    path: 'requiredAttributes',
    loadChildren:
      () => import('../../src/app/required-attributes/required-attributes.module').then(m => m.RequiredAttributesModule)
  },
  {
    path: 'viewModel',
    loadChildren: () => import('../../src/app/view-model/view-model.module').then(m => m.ViewModelModule)
  },
  {
    path: 'complexAPI',
    loadChildren:
      () => import('../../src/app/complex-api/complex-api.module').then(m => m.ComplexAPIModule)
  },
  {
    path: 'observableState',
    loadChildren:
      () => import('../../src/app/observable-state/observable-state.module').then(m => m.ObservableStateModule)
  },
  { path: 'DirectiveSamp', loadChildren: () => import('../../src/app/directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'observableState' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
