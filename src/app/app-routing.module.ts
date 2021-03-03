import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'filterSamp',
    data: {
      completeStatic: true,
      listOrigin: 'https://jsonplaceholder.typicode.com/users',
    },
    loadChildren: () =>
      import('../../src/app/filter-samp/filter-samp.module').then(m => m.FilterSampModule),
  },
  {
    path: 'modalSamp',
    loadChildren: () =>
      import('../../src/app/modal-samp/modal-samp.module').then(m => m.ModalSampModule),
  },
  {
    path: 'mixinSamp',
    loadChildren: () => import('../../src/app/mixins/mixins.module').then(m => m.MixinsModule),
  },
  {
    path: 'htmlLoad',
    loadChildren: () =>
      import('../../src/app/html-load/html-load.module').then(m => m.HtmlLoadModule),
  },
  // {
  //   path: 'popup',
  //   outlet: 'popup',
  //   loadChildren: '../../src/app/routed-popup/routed-popup.module#RoutedPopupModule',
  // },
  {
    path: 'requiredAttributes',
    loadChildren: () =>
      import('../../src/app/required-attributes/required-attributes.module').then(
        m => m.RequiredAttributesModule
      ),
  },
  {
    path: 'viewModel',
    loadChildren: () =>
      import('../../src/app/view-model/view-model.module').then(m => m.ViewModelModule),
  },
  {
    path: 'complexAPI',
    loadChildren: () =>
      import('../../src/app/complex-api/complex-api.module').then(m => m.ComplexAPIModule),
  },
  {
    path: 'pokeAPI',
    loadChildren: () => import('../../src/app/poke-api/poke-api.module').then(m => m.PokeApiModule),
  },
  {
    path: 'observableState',
    loadChildren: () =>
      import('../../src/app/observable-state/observable-state.module').then(
        m => m.ObservableStateModule
      ),
  },
  {
    path: 'DirectiveSamp',
    loadChildren: () =>
      import('../../src/app/directives/directives.module').then(m => m.DirectivesModule),
  },
  {
    path: 'svg',
    loadChildren: () =>
      import('../../src/app/svg-calendar/svg-calendar.module').then(m => m.SvgCalendarModule),
  },
  {
    path: 'testOb',
    loadChildren: () => import('../../src/app/test/test.module').then(module => module.TestModule),
  },
  { path: 'home', component: HomeComponent },
  { path: 'dynhtml', loadChildren: () => import('./dynamichtml/dynamichtml.module').then(m => m.DynamichtmlModule) },
  { path: 'snow', loadChildren: () => import('./snow/snow.module').then(m => m.SnowModule) },
  { path: 'tumblr', loadChildren: () => import('./tumblr/tumblr.module').then(m => m.TumblrModule) },
  { path: 'bigData', loadChildren: () => import('./big-data/big-data.module').then(m => m.BigDataModule) },
  { path: 'svgTest', loadChildren: () => import('./svg-test/svg-test.module').then(m => m.SvgTestModule) },
  { path: 'pannel', loadChildren: () => import('./pannel-stuff/pannel-stuff.module').then(m => m.PannelStuffModule) },
  { path: 'clock', loadChildren: () => import('./analog-clock/analog-clock.module').then(m => m.AnalogClockModule) },
  { path: 'gridThings', loadChildren: () => import('./gridthings/gridthings/gridthings.module').then(m => m.GridthingsModule) },
  { path: '**', redirectTo: 'gridThings' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
