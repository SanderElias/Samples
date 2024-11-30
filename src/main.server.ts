import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { serverRoutes } from './app/server.routes';

globalThis.serverSide = true;

const bootstrap = () => bootstrapApplication(AppComponent, { ...config,
  providers: [
    ...config.providers,
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes)
  ]
 });

// const oldLog = console.log;

// console.log = (...args) => {
//   // throw new Error('console.log is not allowed in the server side');
//   const caller_line = (new Error).stack.split('\n')[4];
//   const index = caller_line.indexOf('at ');
//   const clean = caller_line.slice(index + 2, caller_line.length);
//   oldLog(`[LOG] ${clean}`);
//   oldLog(...args);
// };

export default bootstrap;
