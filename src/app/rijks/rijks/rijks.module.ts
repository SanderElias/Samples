import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtDetailComponent } from '../art-detail/art-detail.component';
import { ArtistsComponent } from '../artists/artists.component';

@NgModule({
  declarations: [ArtDetailComponent, ArtistsComponent],
  imports: [CommonModule]
})
export class RijksModule {}
