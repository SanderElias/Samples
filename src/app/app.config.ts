// import "zone.js"
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  provideClientHydration,
  withIncrementalHydration
} from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './routes';
import { HttpGetCachingInterceptor } from './util/http-cache-system';
import { ClientMetaData, MetaData } from './util/metaData.service';

export const appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([HttpGetCachingInterceptor])),
    provideClientHydration(withIncrementalHydration()),
    { provide: MetaData, useClass: ClientMetaData }
  ]
};
