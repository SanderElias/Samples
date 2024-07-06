import "zone.js"
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './routes';

export const appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    // provideExperimentalZonelessChangeDetection(),
  ],
};
