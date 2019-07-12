import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeMainComponent } from './pokemain/pokemain.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: PokeMainComponent }, { path: '**', redirectTo: '' }];

@NgModule({
  declarations: [PokeMainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PokeApiModule {}
