import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of, zip } from 'rxjs';
import { filter, map, shareReplay, switchMap, take } from 'rxjs/operators';
import { pluck } from '../../../pluck';
import { Order, OrdersService } from '../../orders.service';
import { ProductsService } from '../../products.service';
import { RelationsService } from '../../relations.service';
import { RelationComponent } from '../relation/relation.component';
import { OrderRowComponent } from './order-row/order-row.component';

@Component({
  selector: 'app-relation-detail',
  template: `
    <ng-container *ngIf="relation$ | async as relation">
      <app-relation [relation]="relation" detail></app-relation>
    </ng-container>
    <h4>Orders:</h4>
    <app-order-row *ngFor="let order of orders$ | async" [order]="order"></app-order-row>
  `,
  standalone: true,
  imports: [NgIf, RelationComponent, NgForOf, OrderRowComponent, AsyncPipe],
})
export class RelationDetailComponent {
  private route = inject(ActivatedRoute);
  private order = inject(OrdersService);
  private relation = inject(RelationsService);
  private product = inject(ProductsService);

  relationId$ = this.route.params.pipe(pluck('id'));
  relation$ = this.relationId$.pipe(
    switchMap(id => this.relation.getRelation(id)),
    shareReplay({ bufferSize: 1, refCount: true })
  );
  orders$ = this.relation$.pipe(
    pluck('orders'),
    switchMap(orders => zip(...orders.map(order => this.getOrderWithDetail(order)))),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  getOrderWithDetail(id: string) {
    // console.log('det', id);
    return this.order.getOrder(id).pipe(
      filter((order): order is Order => !!order),
      switchMap(order =>
        zip(
          of(order),
          this.relation.getRelation(order.processor),
          this.relation.getRelation(order.transporter),
          this.getOrderProducts(order.products)
        )
      ),
      map(([order, processor, transporter, products]) => ({ ...order, processor, transporter, products })),
      take(1)
    );
  }

  getOrderProducts(p: { productId: string; handler: string }[]) {
    return combineLatest(
      p.map(({ handler, productId }) => {
        return combineLatest([this.product.getProduct(productId), this.relation.getRelation(handler)]).pipe(
          map(([product, handler]) => ({ productName: product.name, handlerName: handler.name }))
        );
      })
    );
  }
}
