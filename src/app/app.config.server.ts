import type { ApplicationConfig } from '@angular/core';
import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';

import { appConfig } from './app.config';
import { withIncrementalHydration } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  // providers: [provideServerRendering()]
  providers: []
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
