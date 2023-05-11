import { Routes } from '@angular/router';
import { BRelationListComponent } from './b-relation-list.component';
import { RelationDetailComponent } from './relation-detail/relation-detail.component';

export const routes: Routes = [
  { path: ':id', component: RelationDetailComponent },
  { path: '', component: BRelationListComponent },
];

