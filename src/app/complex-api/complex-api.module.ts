import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APISampleComponent } from './apisample/apisample.component';
import { ShowRecComponent } from './show-rec/show-rec.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: APISampleComponent }];

@NgModule({
  declarations: [APISampleComponent, ShowRecComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule]
})
export class ComplexAPIModule {}
