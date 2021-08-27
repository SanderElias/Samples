import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { RelationId } from './orders.service';
import { RelationsService } from './relations.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList$ = new BehaviorSubject<Product[]>([]);

  constructor(private rel:RelationsService) { }

  getProduct(id: string) {
    return from(import('faker')).pipe(
      map(faker => {
        const product = this.productList$.value.find(o => o.id === id);
        if (!product) {
          const newProduct:Product = {
            id,
            name: faker.commerce.productName(),
            department: faker.commerce.department(),
            description: faker.lorem.paragraph(),
            creator: this.rel.getExistingRandomId()
          }
          this.productList$.next([...this.productList$.value, newProduct]);
        }
      }),
      switchMap(() => this.productList$),
      map(orders => orders.find(o => o.id === id)),
      filter(o => o !== undefined),
      take(1)
    )
  }
}

export interface Product {
  id: string;
  name: string;
  department: string;
  description: string;
  creator: RelationId;
}
