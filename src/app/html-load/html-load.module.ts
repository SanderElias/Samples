import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlloadComponent } from './htmlload/htmlload.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{ path: '', component: HtmlloadComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), HtmlloadComponent]
})
export class HtmlLoadModule {}
