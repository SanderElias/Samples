import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';

const route: Routes = [{ path: '', component: ModalDemoComponent }];

@NgModule({
  declarations: [ModalDemoComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class ModalSampModule {}
