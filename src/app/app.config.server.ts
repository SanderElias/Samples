import type { ApplicationConfig } from '@angular/core';
import { mergeApplicationConfig } from '@angular/core';

import { appConfig } from './app.config';
import { MetaData, ServerMetaData } from './util/metaData.service';

const serverConfig: ApplicationConfig = {
  // providers: [provideServerRendering()]
  providers: [{ provide: MetaData, useClass: ServerMetaData }]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
