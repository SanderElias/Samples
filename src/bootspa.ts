import {enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';

/** load icons from FontAwseome */
library.add(faPlay, faPause);
dom.watch();

if (environment.production) {
  enableProdMode();
}

platformBrowser()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
