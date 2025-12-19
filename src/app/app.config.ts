// import "zone.js"
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { routes } from './routes';

export const appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideClientHydration(withIncrementalHydration())
  ]
};
