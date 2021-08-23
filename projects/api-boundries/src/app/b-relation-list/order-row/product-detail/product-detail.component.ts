import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../../products.service';
import { ObservableInput } from '../../../../observable-input-decorator.ts';

@Component({
  selector: 'app-product-detail',
  template: `
    <ng-container *ngIf="product$|async as product">
      {{product.name}}
      <section>
        Created by <app-relation class="inline" [relationId]="product.creator"></app-relation><br>
        product handled by <app-relation class="inline" [relationId]="relationId"></app-relation>
      </section>
    </ng-container>
  `,
  styles: [`:host { display: block;   margin: 0 20px; }
  section { margin-left:20px; }
  :host:not(:last-child) { border-bottom: 1px dashed black;  }`]
})
export class ProductDetailComponent {
  @Input()
  @ObservableInput()
  productId = new ReplaySubject<string>();

  @Input() relationId: string

  product$ = this.productId.pipe(
    switchMap(id => this.prod.getProduct(id))
  );

  constructor(
    private prod: ProductsService
  ) {
  }
}

