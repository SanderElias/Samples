import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

export const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, {...config, providers: [provideZonelessChangeDetection(), ...config.providers]}, context);

