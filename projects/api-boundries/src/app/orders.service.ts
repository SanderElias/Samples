import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, shareReplay, take, tap } from 'rxjs/operators';
import { getId, randomInt, RelationsService } from './relations.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private rel = inject(RelationsService);

  private orderList = new BehaviorSubject<Order[]>([]);
  orderList$ = this.orderList.asObservable();

  getClientFromOrder(id: string) {
    return this.rel.relationList$.pipe(
      map(rels => {
        const rel = rels.find(r => r.orders.includes(id))!;
        return rel.id;
      })
    );
  }

  /** loads an order from the server, will make one up if it doesn't exist */
  getOrder(id: string) {
    const currentOrders = this.orderList.getValue();
    const order = currentOrders.find(o => o.id === id);
    if (!order) {
      const newOrder: Order = {
        id,
        products: Array.from({ length: randomInt(3) + 2 }, () => ({ productId: getId(), handler: this.rel.getExistingRandomId() })),
        transporter: this.rel.getExistingRandomId(),
        processor: this.rel.getExistingRandomId()
      };
      this.orderList.next([...currentOrders, newOrder]);
    }
    return this.orderList$.pipe(
      map(orders => orders.find(o => o.id === id)),
      filter(o => o !== undefined),
      take(1)
    );
  }
}

export type RelationId = string;
export interface Order {
  id: string;
  products: { productId: string; handler: RelationId }[];
  transporter: RelationId;
  processor: RelationId;
}
