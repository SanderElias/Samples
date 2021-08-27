import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-row',
  template: `
    <ul>
      <li><h5>Products:</h5></li>
      <li *ngFor="let item of order.products">{{item.productName}} by {{item.handlerName}}</li>
    </ul>
    <app-relation [relation]=order.processor></app-relation>
    <app-relation [relation]=order.transporter></app-relation>
  `,
  styles: [`
    :host {
      display: grid;
      border: 1px solid #ccc;
      grid-template-columns: repeat(3, 1fr);
    }
    ul {
      list-style-type: none;
    }
    h5 {
      margin:0;
      margin-left: -20px;
    }

  `]
})
export class OrderRowComponent implements OnInit {
  @Input() order: any

  constructor() { }

  ngOnInit(): void {
  }

}
