import type { ApplicationConfig } from '@angular/core';
import { mergeApplicationConfig } from '@angular/core';

import { MetaData, ServerMetaData } from './util/metaData.service';
import { appConfig } from './app.config';

// import a polyfill for Temporal, since it's not yet supported in Node.js
// note: remove this once Temporal is supported in Node.js!
import 'temporal-polyfill/global'

const serverConfig: ApplicationConfig = {
  // providers: [provideServerRendering()]
  providers: [{ provide: MetaData, useClass: ServerMetaData }]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
