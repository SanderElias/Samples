/**
 * I'm importing zoneJs in here, so I can quickly switch to using the NoopZone if I want to test something around that
 */
import { enableProdMode } from '@angular/core';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { appConfig } from './app/app.config';

/** load icons from FontAwseome */
library.add(faPlay as any, faPause as any);
dom.watch();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
