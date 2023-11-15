import { Component, Input, OnInit } from '@angular/core';
import { RelationComponent } from '../../relation/relation.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-order-row',
  template: `
    <ul>
      <li><h5>Products:</h5></li>
      @for (item of order.products; track item) {
        <li>{{ item.productName }} by {{ item.handlerName }}</li>
      }
    </ul>
    <app-relation [relation]="order.processor"></app-relation>
    <app-relation [relation]="order.transporter"></app-relation>
  `,
  styles: [
    `
      :host {
        display: grid;
        border: 1px solid #ccc;
        grid-template-columns: repeat(3, 1fr);
      }
      ul {
        list-style-type: none;
      }
      h5 {
        margin: 0;
        margin-left: -20px;
      }
    `,
  ],
  standalone: true,
  imports: [NgForOf, RelationComponent],
})
export class OrderRowComponent implements OnInit {
  @Input() order: any;

  constructor() {}

  ngOnInit(): void {}
}
