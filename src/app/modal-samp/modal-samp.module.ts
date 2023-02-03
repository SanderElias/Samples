import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';

const route: Routes = [{ path: '', component: ModalDemoComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(route), ModalDemoComponent]
})
export class ModalSampModule {}
