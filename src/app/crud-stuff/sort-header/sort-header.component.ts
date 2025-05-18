import { Component, input, inject } from '@angular/core';
import { RelationsService, type SortField } from '../relations.service';

@Component({
  selector: 'th [sortOn]',
  imports: [],
  template: `
    <ng-content />
    @if (sort() === sortOn()) {
      {{ order() === 'asc' ? '↓' : '↑' }}
    }
  `,
  styleUrl: './sort-header.component.css',
  host: {
    '(click)': 'doSort()'
  }
})
export class SortHeaderComponent {
  relationsService = inject(RelationsService);
  sort = this.relationsService.sort;
  order = this.relationsService.order;

  sortOn = input.required<SortField>();

  doSort = () => {
    const key = this.sortOn();
    const currentSort = this.relationsService.sort();
    if (currentSort === key) {
      this.relationsService.order.update(currentOrder => (currentOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      this.relationsService.sort.set(key);
      this.relationsService.order.set('asc');
    }
  };
}
