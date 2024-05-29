import { enableProdMode, importProvidersFrom } from '@angular/core';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule, ScullyLibModule)],
}).catch(err => console.error(err));
