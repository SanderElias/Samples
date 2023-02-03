import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FilterSampleComponent } from './filter-sample/filter-sample.component';

export const routes: Routes = [{ path: '**', component: FilterSampleComponent }];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), FilterSampleComponent]
})
export class FilterSampModule {}
