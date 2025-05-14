import { Component } from '@angular/core';

@Component({
  selector: 'se-card',
  imports: [],
  template: `
    @for (i of arr; track i) {
      <section>
        <h2>{{ i }}</h2>
      </section>
      <section class="green">
        <h2>{{ i }}</h2>
      </section>
      <section class="red">
        <h2>{{ i }}</h2>
      </section>
    }
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  arr = [1, 2, 3, 4];
}
