/**
 * I'm importing zoneJs in here, so I can quickly switch to using the NoopZone if I want to test something around that
 */
import "zone.js"
import {
  NgZone,
  enableProdMode,
  importProvidersFrom,
  ɵNoopNgZone,
} from '@angular/core';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { environment } from './environments/environment';

/** load icons from FontAwseome */
library.add(faPlay as any, faPause as any);
dom.watch();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      // BrowserModule,
      // HttpClientModule,
      ScullyLibModule,
    ),
    provideRouter(routes),
    // { provide: NgZone, useClass: ɵNoopNgZone },
  ],
}).catch(err => console.error(err));
