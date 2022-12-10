import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixinsComponent } from './mixins/mixins.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{ path: '', component: MixinsComponent }];

@NgModule({
  declarations: [MixinsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MixinsModule {}
