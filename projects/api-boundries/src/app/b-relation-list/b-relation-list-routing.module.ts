import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BRelationListComponent } from './b-relation-list.component';
import { RelationDetailComponent } from './relation-detail/relation-detail.component';

export const routes: Routes = [
  { path: ':id', component: RelationDetailComponent },
  { path: '', component: BRelationListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRelationListRoutingModule { }
