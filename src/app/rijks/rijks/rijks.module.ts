import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ArtDetailComponent } from '../art-detail/art-detail.component';
import { ArtistsComponent } from '../artists/artists.component';

@NgModule({
  declarations: [ArtDetailComponent, ArtistsComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RijksModule {}
