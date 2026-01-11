// import "zone.js"
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { routes } from './routes';
import { ClientMetaData, MetaData } from './util/metaData.service';
import { HttpGetCachingInterceptor } from './util/caching.interceptor';

export const appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([HttpGetCachingInterceptor])),
    provideClientHydration(withIncrementalHydration()),
    { provide: MetaData, useClass: ClientMetaData }
  ]
};
