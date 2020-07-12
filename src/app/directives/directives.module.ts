import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesSampleComponent } from './directives-sample/directives-sample.component';
import { IdDirective } from './id.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DirectivesSampleComponent,
  },
];

@NgModule({
  declarations: [DirectivesSampleComponent, IdDirective],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DirectivesModule {}
