import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'relations', loadChildren: () => import('./relation-list/relation-list.module').then(m => m.RelationListModule) },
  { path: 'bRelations', loadChildren: () => import('./b-relation-list/b-relation-list.module').then(m => m.BRelationListModule) },
  { path: '**', redirectTo: 'bRelations' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
