import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequiredAttributesComponent } from './required-attributes/required-attributes.component';
import { WaitForItComponent } from './required-attributes/wait-for-it/wait-for-it.component';

export const routes: Routes = [{ path: '', component: RequiredAttributesComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), RequiredAttributesComponent, WaitForItComponent]
})
export class RequiredAttributesModule {}
