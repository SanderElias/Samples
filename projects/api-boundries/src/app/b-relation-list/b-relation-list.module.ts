import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRelationListRoutingModule } from './b-relation-list-routing.module';
import { BRelationListComponent } from './b-relation-list.component';
import { RelationComponent } from './relation/relation.component';
import { RelationDetailComponent } from './relation-detail/relation-detail.component';
import { OrderRowComponent } from './order-row/order-row.component';
import { ProductDetailComponent } from './order-row/product-detail/product-detail.component';


@NgModule({
  declarations: [
    BRelationListComponent,
    RelationComponent,
    RelationDetailComponent,
    OrderRowComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    BRelationListRoutingModule
  ]
})
export class BRelationListModule { }
