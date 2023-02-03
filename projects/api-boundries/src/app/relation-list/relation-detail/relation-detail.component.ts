import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of, zip } from 'rxjs';
import { map, pluck, shareReplay, switchMap, take } from 'rxjs/operators';
import { OrdersService } from '../../orders.service';
import { ProductsService } from '../../products.service';
import { RelationsService } from '../../relations.service';
import { OrderRowComponent } from './order-row/order-row.component';
import { RelationComponent } from '../relation/relation.component';
import { NgIf, NgForOf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-relation-detail',
    template: `
  <ng-container *ngIf="relation$|async as relation">
     <app-relation [relation]="relation" detail></app-relation>
  </ng-container>
  <h4>Orders:</h4>
  <app-order-row *ngFor="let order of orders$|async" [order]="order"></app-order-row>
  `,
    standalone: true,
    imports: [NgIf, RelationComponent, NgForOf, OrderRowComponent, AsyncPipe]
})
export class RelationDetailComponent implements OnInit {
  relationId$ = this.route.params.pipe(pluck('id'));
  relation$ = this.relationId$.pipe(
    switchMap(id => this.relation.getRelation(id)),
    shareReplay({ bufferSize: 1, refCount: true }));
  orders$ = this.relation$.pipe(
    pluck('orders'),
    switchMap(orders =>
      zip(...orders.map(order => this.getOrderWithDetail(order)))
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    private route: ActivatedRoute,
    private order: OrdersService,
    private relation: RelationsService,
    private product: ProductsService
  ) { }

  ngOnInit(): void {
  }

  getOrderWithDetail(id: string) {
    // console.log('det', id);
    return this.order.getOrder(id).pipe(
      switchMap(order => zip(
        of(order),
        this.relation.getRelation(order.processor),
        this.relation.getRelation(order.transporter),
        this.getOrderProducts(order.products)
      )),
      map(([order, processor, transporter, products]) => ({ ...order, processor, transporter, products })),
      take(1),
    );
  }


  getOrderProducts(p: { productId: string, handler: string }[]) {
    return combineLatest(p.map(({ handler, productId }) => {
      return combineLatest([
        this.product.getProduct(productId),
        this.relation.getRelation(handler),
      ]).pipe(map(([product, handler]) => ({ productName: product.name, handlerName: handler.name })));
    }));
  }

}


