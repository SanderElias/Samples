import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtDetailComponent } from '../art-detail/art-detail.component';
import { ArtistsComponent } from '../artists/artists.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArtDetailComponent, ArtistsComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RijksModule {}
