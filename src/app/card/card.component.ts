import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'se-card',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ng-container *ngFor="let i of arr">
  <section > <h2>{{i}}</h2> </section>
  <section class="green"> <h2>{{i}}</h2> </section>
  <section class="red"> <h2>{{i}}</h2> </section>
  </ng-container>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  arr = [1, 2, 3, 4]
}
