import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection(),importProvidersFrom(BrowserModule, AppRoutingModule)]
}).catch(err => console.error(err));
