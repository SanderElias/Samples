import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FilterSampleComponent } from './filter-sample/filter-sample.component';

const routes: Routes = [{ path: '**', component: FilterSampleComponent }];

@NgModule({
  declarations: [FilterSampleComponent],
  imports: [CommonModule, ReactiveFormsModule  , RouterModule.forChild(routes)]
})
export class FilterSampModule {}

