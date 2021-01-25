
// import * as rxjs from  'rxjs'
(async function () {
  const {enableProdMode } = await import('@angular/core');
  const { platformBrowserDynamic } = await import('@angular/platform-browser-dynamic');
  const { AppModule } = await import('./app/app.module');
  const { environment } = await import('./environments/environment');
  const { dom, library } = await import('@fortawesome/fontawesome-svg-core');
  const { faPlay } = await import('@fortawesome/free-solid-svg-icons/faPlay');
  const { faPause } = await import('@fortawesome/free-solid-svg-icons/faPause');

  /** load icons from FontAwseome */
  library.add(faPlay, faPause);
  dom.watch();

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
})();
