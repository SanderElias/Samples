import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-order-row',
  template: `
  <ng-container *ngIf="order$|async as order">
    <section>
      <h5>Products:</h5>
      <app-product-detail *ngFor="let item of order.products" [productId]="item.productId" [relationId]="item.handler"></app-product-detail>
    </section>
    <app-relation [relationId]=order.processor></app-relation>
    <app-relation [relationId]=order.transporter></app-relation>
  </ng-container>
  `,
  styles: [`
    :host {
      display: grid;
      border: 1px solid #ccc;
      grid-template-columns: repeat(3, 1fr);
    }
    h5 {
      margin:0;
    }

  `]
})
export class OrderRowComponent implements OnInit {
  private orderId$ = new ReplaySubject<string>(1)
  @Input() set orderId(x: string) {
    if (typeof x === 'string' && x.length > 0) {
      this.orderId$.next(x);
    }
  };
  order$ = this.orderId$.pipe(
    switchMap(id => this.order.getOrder(id))
  );

  constructor(
    private order: OrdersService
  ) { }

  ngOnInit(): void {
  }

}
