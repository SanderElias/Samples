import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtDetailComponent } from './rijks/art-detail/art-detail.component';
import { ArtistsComponent } from './rijks/artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtDetailComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
