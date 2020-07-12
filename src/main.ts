import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { dom, library } from '@fortawesome/fontawesome-svg-core';
// import { faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/** load icons from FontAwseome */
library.add(faPlay, faPause);
dom.watch();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
