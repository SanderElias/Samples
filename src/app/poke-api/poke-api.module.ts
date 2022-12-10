import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeMainComponent } from './pokemain/pokemain.component';
import { Routes, RouterModule } from '@angular/router';
import { SeLetModule } from '@se-ng/let';

export const routes: Routes = [
  { path: '', component: PokeMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [PokeMainComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SeLetModule],
})
export class PokeApiModule {}
