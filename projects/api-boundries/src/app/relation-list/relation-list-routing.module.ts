import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelationDetailComponent } from './relation-detail/relation-detail.component';
import { RelationListComponent } from './relation-list.component';

const routes: Routes = [
  { path: ':id', component: RelationDetailComponent },
  { path: '', component: RelationListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationListRoutingModule { }
