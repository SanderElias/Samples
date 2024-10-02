const core = await import('@angular/core');
const { provideZoneChangeDetection } = core;
const { provideRouter } = await import('@angular/router');

import { routes } from './app.routes';
import type { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)],
};
