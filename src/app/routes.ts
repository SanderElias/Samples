
export const routes = [
  {
    path: 'filterSamp',
    data: {
      completeStatic: true,
      listOrigin: 'https://jsonplaceholder.typicode.com/users',
    },
    loadComponent: () => import('./filter-samp/filter-sample/filter-sample.component').then(m => m.FilterSampleComponent),
  },
  { path: 'modalSamp', loadComponent: () => import('./modal-samp/modal-demo/modal-demo.component').then(m => m.ModalDemoComponent), },
  { path: 'mixinSamp', loadComponent: () => import('./mixins/mixins/mixins.component').then(m => m.MixinsComponent), },
  { path: 'htmlLoad', loadComponent: () => import('./html-load/htmlload/htmlload.component').then(m => m.HtmlloadComponent) },
  // {
  //   path: 'popup',
  //   outlet: 'popup',
  //   loadChildren: '../../src/app/routed-popup/routed-popup.module#RoutedPopupModule',
  // },
  { path: 'requiredAttributes', loadComponent: () => import('./required-attributes/required-attributes/required-attributes.component').then(m => m.RequiredAttributesComponent), },
  { path: 'viewModel', loadChildren: () => import('./view-model/view-model.routes').then(m => m.routes), },
  { path: 'complexAPI', loadComponent: () => import('./complex-api/apisample/apisample.component').then(m => m.APISampleComponent), },
  { path: 'pokeAPI', loadComponent: () => import('./poke-api/pokemain/pokemain.component').then(m => m.PokeMainComponent), },
  {
    path: 'observableState',
    loadChildren: () =>
      import('./observable-state/observable-state.routes').then(
        m => m.routes
      ),
  },
  {
    path: 'DirectiveSamp', loadComponent: () => import('./directives/directives-sample/directives-sample.component').then(m => m.DirectivesSampleComponent),
  },
  { path: 'svg', loadComponent: () => import('./svg-calendar/svg-calender/svg-calender.component').then(m => m.SvgCalenderComponent), },
  { path: 'testOb', loadChildren: () => import('./test/test.routes').then(module => module.routes), },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'dynhtml', loadComponent: () => import('./dynamichtml/dynamichtml.component').then(m => m.DynamicHtmlComponent) },
  { path: 'snow', loadComponent: () => import('./snow/snow.component').then(m => m.SnowComponent) },
  { path: 'tumblr', loadComponent: () => import('./tumblr/tumblr.component').then(m => m.TumblrComponent) },
  { path: 'bigData', loadComponent: () => import('./big-data/big-data.component').then(m => m.BigDataComponent) },
  { path: 'svgTest', loadComponent: () => import('./svg-test/svg-test.component').then(m => m.SvgTestComponent) },
  { path: 'pannel', loadComponent: () => import('./pannel-stuff/pannel-stuff.component').then(m => m.PannelStuffComponent) },
  { path: 'clock', loadComponent: () => import('./analog-clock/analog-clock.component').then(m => m.AnalogClockComponent) },
  { path: 'gridThings', loadComponent: () => import('./gridthings/gridthings/gridthings.component').then(m => m.GridthingsComponent) },
  { path: 'bintree', loadComponent: () => import('./bintree/bintree.component').then(m => m.BintreeComponent) },
  { path: 'localState', loadChildren: () => import('./local-state/local-state.routes').then(m => m.routes) },
  { path: 'lazyComponents', loadComponent: () => import('./lazy-component/lazy-component.component').then(m => m.LazyComponentComponent) },
  { path: 'svgTimer', loadComponent: () => import('./svg-timer/svg-timer.component').then(m => m.SvgTimerComponent) },
  { path: 'svgClock', loadComponent: () => import('./svg-clock/svg-clock.component').then(m => m.SvgClockComponent) },
  { path: 'dynForm', loadComponent: () => import('./dyn-form/dyn-form.component').then(m => m.DynFormComponent) },
  { path: 'rxjsTest', loadComponent: () => import('./rxjstest/rxjstest.component').then(m => m.RxjstestComponent) },
  { path: 'unsubSample', loadComponent: () => import('./unsub-sample/unsub-sample.component').then(m => m.UnsubSampleComponent) },
  { path: 'unsubSample/:id', loadComponent: () => import('./unsub-sample/unsub-sample.component').then(m => m.UnsubSampleComponent) },
  { path: 'rvt', loadChildren: () => import('./rvt/routes') },
  { path: 'gridCalender', loadComponent: () => import('./grid-calender/grid-calender.component').then(m => m.GridCalenderComponent) },
  { path: 'summary', loadComponent: () => import('./html-summary/html-summary.component').then(m => m.HtmlSummaryComponent) },
  { path: '**', redirectTo: 'summary' },
];
