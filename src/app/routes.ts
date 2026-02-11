import type { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'blog', loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent) },
  { path: 'blog/:id', loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent) },
  {
    path: '',
    loadComponent: () => import('./demo.component').then(m => m.DemoComponent),
    children: [
      {
        path: 'filterSamp',
        data: {
          completeStatic: true,
          listOrigin: 'https://jsonplaceholder.typicode.com/users'
        },
        loadComponent: () => import('./filter-samp/filter-sample/filter-sample.component').then(m => m.FilterSampleComponent)
      },
      {
        path: 'modalSamp',
        loadComponent: () => import('./modal-samp/modal-demo/modal-demo.component').then(m => m.ModalDemoComponent)
      },
      {
        path: 'mixinSamp',
        loadComponent: () => import('./mixins/mixins/mixins.component').then(m => m.MixinsComponent)
      },
      {
        path: 'htmlLoad',
        loadComponent: () => import('./html-load/htmlload/htmlload.component').then(m => m.HtmlloadComponent)
      },
      // {
      //   path: 'popup',
      //   outlet: 'popup',
      //   loadChildren: '../../src/app/routed-popup/routed-popup.module#RoutedPopupModule',
      // },
      {
        path: 'requiredAttributes',
        loadComponent: () =>
          import('./required-attributes/required-attributes/required-attributes.component').then(m => m.RequiredAttributesComponent)
      },
      // {
      //   path: 'viewModel',
      //   loadChildren: () => import('./view-model/view-model.routes').then(m => m.routes),
      //   canActivate: [() => !globalThis.isServer],
      // },
      {
        path: 'complexAPI',
        loadComponent: () => import('./complex-api/apisample/apisample.component').then(m => m.APISampleComponent)
      },
      {
        path: 'pokeAPI',
        loadComponent: () => import('./poke-api/pokemain/pokemain.component').then(m => m.PokeMainComponent)
      },
      {
        path: 'observableState',
        loadChildren: () => import('./observable-state/observable-state.routes').then(m => m.routes)
      },
      {
        path: 'DirectiveSamp',
        loadComponent: () =>
          import('./directives/directives-sample/directives-sample.component').then(m => m.DirectivesSampleComponent)
      },
      {
        path: 'svg',
        loadComponent: () => import('./svg-calendar/svg-calender/svg-calender.component').then(m => m.SvgCalenderComponent)
      },
      {
        path: 'testOb',
        loadChildren: () => import('./test/test.routes').then(module => module.routes)
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'dynhtml',
        loadComponent: () => import('./dynamichtml/dynamichtml.component').then(m => m.DynamicHtmlComponent)
      },
      {
        path: 'snow',
        loadComponent: () => import('./snow/snow.component').then(m => m.SnowComponent)
      },

      {
        path: 'tumblr',
        loadComponent: () => import('./tumblr/tumblr.component').then(m => m.TumblrComponent)
      },
      {
        path: 'bigData',
        loadComponent: () => import('./big-data/big-data.component').then(m => m.BigDataComponent)
      },
      {
        path: 'svgTest',
        loadComponent: () => import('./svg-test/svg-test.component').then(m => m.SvgTestComponent)
      },

      {
        path: 'pannel',
        loadComponent: () => import('./pannel-stuff/pannel-stuff.component').then(m => m.PannelStuffComponent)
      },
      {
        path: 'clock',
        loadComponent: () => import('./analog-clock/analog-clock.component').then(m => m.AnalogClockComponent)
      },
      {
        path: 'gridThings',
        loadComponent: () => import('./gridthings/gridthings/gridthings.component').then(m => m.GridthingsComponent)
      },
      {
        path: 'bintree',
        loadComponent: () => import('./bintree/bintree.component').then(m => m.BintreeComponent)
      },
      {
        path: 'localState',
        loadChildren: () => import('./local-state/local-state.routes').then(m => m.routes)
      },
      {
        path: 'lazyComponents',
        loadComponent: () => import('./lazy-component/lazy-component.component').then(m => m.LazyComponentComponent)
      },
      {
        path: 'svgTimer',
        loadComponent: () => import('./svg-timer/svg-timer.component').then(m => m.SvgTimerComponent)
      },
      {
        path: 'svgClock',
        loadComponent: () => import('./svg-clock/svg-clock.component').then(m => m.SvgClockComponent)
      },
      {
        path: 'dynForm',
        loadComponent: () => import('./dyn-form/dyn-form.component').then(m => m.DynFormComponent)
      },
      {
        path: 'rxjsTest',
        loadComponent: () => import('./rxjstest/rxjstest.component').then(m => m.RxjstestComponent)
      },

      {
        path: 'unsubSample',
        loadComponent: () => import('./unsub-sample/unsub-sample.component').then(m => m.UnsubSampleComponent)
      },
      {
        path: 'unsubSample/:id',
        loadComponent: () => import('./unsub-sample/unsub-sample.component').then(m => m.UnsubSampleComponent)
      },
      { path: 'rvt', loadChildren: () => import('./rvt/routes') },
      {
        path: 'gridCalender',
        loadComponent: () => import('./grid-calender/grid-calender.component').then(m => m.GridCalenderComponent)
      },
      {
        path: 'summary',
        loadComponent: () => import('./html-summary/html-summary.component').then(m => m.HtmlSummaryComponent)
      },
      {
        path: 'resizePanel',
        loadComponent: () => import('./resizable-panels/resizable-panels.component').then(m => m.ResizablePanelsComponent)
      },
      {
        path: 'signalsInForm',
        loadComponent: () => import('./signals-form/signals-form.component').then(m => m.SignalsFormsComponent)
      },

      {
        path: 'card',
        loadComponent: () => import('./card/card.component').then(m => m.CardComponent)
      },
      {
        path: 'cells',
        loadComponent: () => import('./cells/cells.component').then(m => m.CellsComponent)
      },
      {
        path: 'cellsRaw',
        loadComponent: () => import('./cells/cell-raw/cell-raw.component').then(m => m.CellRawComponent)
      },

      {
        path: 'routeList',
        loadComponent: () => import('./route-list/route-list.component').then(m => m.RouteListComponent)
      },
      {
        path: 'formErrors',
        loadComponent: () => import('./form-error/form-error.component')
      },
      {
        path: 'dialog',
        loadComponent: () => import('./dialog/dialog.component')
      },
      {
        path: 'signalInputMusings',
        loadComponent: () =>
          import('./signal-input-musings/signal-input-musings.component').then(m => m.SignalInputMusingsComponent)
      },
      {
        path: 'signalPlay',
        loadComponent: () => import('./signal-play/signal-play.component')
      },
      // {
      //   path: 'signalError',
      //   loadComponent: () => import('./signal-error/signal-error.component'),
      // },
      // {
      //   path: 'signalPlay/:id',
      //   loadComponent: () => import('./signal-play/signal-play.component'),
      // },
      {
        path: 'eventedOutputs',
        loadComponent: () => import('./evented-outputs/evented-outputs.component').then(m => m.EventedOutputsComponent)
      },
      {
        path: 'indexDb',
        loadComponent: () => import('./indexdb/indexdb.component').then(m => m.IndexdbComponent),
        title: 'IndexDb sample'
      },
      {
        path: 'acnhorPosition',
        loadComponent: () => import('./anchor-pos/anchor-pos.component').then(m => m.AnchorPosComponent),
        title: 'Anchor Position demo'
      },
      {
        path: 'outOfOrder',
        loadComponent: () => import('./out-of-order/out-of-order.component').then(m => m.OutOfOrderComponent)
      },
      {
        path: 'stepper',
        loadComponent: () => import('./stepper/stepper.component').then(m => m.StepperComponent)
      },
      {
        path: 'iconSprite',
        loadComponent: () => import('./icon-sprite/icon-sprite.component').then(m => m.IconSpriteComponent)
      },
      {
        path: 'reusableDialog',
        loadComponent: () => import('./reusable-dialog/reusable-dialog.component').then(m => m.ReusableDialogComponent)
      },
      {
        path: 'tableHover',
        loadComponent: () => import('./table-hover/table-hover.component').then(m => m.TableHoverComponent)
      },
      {
        path: 'signalDebounce',
        loadComponent: () => import('./signal-debounce/signal-debounce.component').then(m => m.SignalDebounce)
      },
      {
        path: 'crudStuff',
        loadComponent: () => import('./crud-stuff/crud-stuff.component').then(m => m.CrudStuffComponent)
      },
      {
        path: 'customNativeForm',
        loadComponent: () => import('./custom-native-form/custom-native-form.component').then(m => m.CustomNativeFormComponent)
      },
      {
        path: 'inputHostExperiment',
        loadComponent: () =>
          import('./input-host-experiment/input-host-experiment.component').then(m => m.InputHostExperimentComponent)
      },
      {
        path: 'meteredView',
        loadComponent: () => import('./metered-view/metered-view.component').then(m => m.MeteredViewComponent)
      },

      // { path: '**', redirectTo: 'inputHostExperiment' },
      // { path: '**', redirectTo: 'routeList' },
      // { path: '**', redirectTo: 'crudStuff' }
      {
        path: 'mqtt',
        loadChildren: () => import('./mqtt/routes')
      },
      {
        path: 'signalForms',
        loadComponent: () =>
          import('./signal-forms-experiment/signal-forms-experiment.component').then(m => m.SignalFormsExperimentComponent)
      },
      {
        path: 'signalForms/tree',
        loadComponent: () => import('./signal-forms-experiment/signal-tree/signal-tree.component').then(m => m.SignalTreeComponent)
      },
      {
        path: 'signalForms/dynamic',
        loadComponent: () => import('./signal-forms-experiment/dynamic/dynamic.component').then(m => m.DynamicComponent)
      },
      {
        path: 'toh',
        loadComponent: () => import('./toh/toh.component').then(m => m.TohComponent)
      },
      {
        path: 'toh/cdk',
        loadComponent: () => import('./toh/toh-cdk/toh-cdk.component').then(m => m.TohCdkComponent)
      },
      {
        path: 'vt',
        loadComponent: () => import('./view-transitions/view-transitions.component').then(m => m.ViewTransitionsComponent)
      },
      {
        path: 'inMem',
        loadComponent: () => import('./in-mem-sample/in-mem-sample.component').then(m => m.InMemSampleComponent)
      },
      {
        path: 'dynSignalForm',
        loadComponent: () => import('./dynsignal-form/dynsignal-form.component').then(m => m.DynsignalFormComponent)
      },

      { path: 'dyn-route', loadChildren: () => import('./dyn-route/dyn-routes.routes').then(m => m.dynRoutes) },
      { path: 'timer', loadComponent: () => import('./timer/timer.component').then(m => m.TimerComponent) },
      { path: 'temporal', loadComponent: () => import('./temporal/temporal.component').then(m => m.TemporalComponent) },
      { path: 'gridPlay', loadComponent: () => import('./grid-play/grid-play.component').then(m => m.GridPlayComponent) },

      // { path: '**', redirectTo: 'routeList' },
      { path: '**', redirectTo: 'temporal' }
      // { path: '**', redirectTo: 'vt' }
    ]
  }
];
