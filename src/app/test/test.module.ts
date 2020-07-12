import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObsClickDirective } from './obs-click.directive';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'testob', component: TestComponent },
  { path: '**', redirectTo: 'testob' },
];

@NgModule({
  declarations: [ObsClickDirective, TestComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TestModule {}
