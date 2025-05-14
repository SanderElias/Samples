import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { RelationId } from './orders.service';
import { RelationsService } from './relations.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  rel = inject(RelationsService);
  productList$ = new BehaviorSubject<Product[]>([]);
  fakerModule = import('@faker-js/faker');

  getProduct(id: string) {
    return from(this.fakerModule).pipe(
      map(({ faker }) => {
        const product = this.productList$.value.find(o => o.id === id);
        if (!product) {
          const newProduct: Product = {
            id,
            name: faker.commerce.productName(),
            department: faker.commerce.department(),
            description: faker.commerce.productDescription(),
            image: faker.image.imageUrl(),
            creator: this.rel.getExistingRandomId()
          };
          this.productList$.next([...this.productList$.value, newProduct]);
        }
      }),
      switchMap(() => this.productList$),
      map(orders => orders.find(o => o.id === id)),
      filter((o): o is Product => o !== undefined),
      take(1)
    );
  }
}

export interface Product {
  id: string;
  name: string;
  department: string;
  description: string;
  creator: RelationId;
  image: string;
}
