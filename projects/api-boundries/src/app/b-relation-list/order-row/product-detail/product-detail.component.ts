import { AsyncPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../../products.service';
import { RelationComponent } from '../../relation/relation.component';

@Component({
  selector: 'app-product-detail',
  template: `
    @if (product$ | async; as product) {
      {{ product.name }}
      <section>
        Created by <app-relation class="inline" [relationId]="product.creator"></app-relation><br />
        product handled by <app-relation class="inline" [relationId]="relationId"></app-relation>
      </section>
    }
  `,
  styles: [
    `
      :host {
        display: block;
        margin: 0 20px;
      }
      section {
        margin-left: 20px;
      }
      :host:not(:last-child) {
        border-bottom: 1px dashed black;
      }
    `
  ],
  imports: [RelationComponent, AsyncPipe]
})
export class ProductDetailComponent {
  #prod = inject(ProductsService);
  #productId = new ReplaySubject<string>(1);
  @Input() set productId(x: string) {
    if (typeof x === 'string' && x.length > 0) {
      this.#productId.next(x);
    }
  }

  @Input() relationId = '';

  product$ = this.#productId.pipe(switchMap(id => this.#prod.getProduct(id)));
}
