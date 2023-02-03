import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesSampleComponent } from './directives-sample/directives-sample.component';
import { IdDirective } from './id.directive';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: DirectivesSampleComponent,
  },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), DirectivesSampleComponent, IdDirective]
})
export class DirectivesModule {}
