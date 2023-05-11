import { Routes } from '@angular/router';
import { RelationDetailComponent } from './relation-detail/relation-detail.component';
import { RelationListComponent } from './relation-list.component';

export const routes: Routes = [
  { path: ':id', component: RelationDetailComponent },
  { path: '', component: RelationListComponent }];

