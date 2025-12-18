import type { BootstrapContext } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { serverRoutes } from './app/server.routes';

globalThis.serverSide = true;

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(
    AppComponent,
    {
      ...config,
      providers: [...config.providers, provideServerRendering(withRoutes(serverRoutes))]
    },
    context
  );

export default bootstrap;
