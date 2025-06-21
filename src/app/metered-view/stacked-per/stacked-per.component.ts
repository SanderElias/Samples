import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'se-stacked-per',
  imports: [],
  template: `
    @for (per of percentages(); track $index) {
      <div class="bar" [style.width.%]="per" [style.backgroundColor]="'var(--metered-color-'+$index+')'">
        {{ per.toFixed(1) }}%
      </div>
    }
  `,
  styleUrl: './stacked-per.component.css'
})
export class StackedPerComponent {
  numbers = input<number[]>([4,8,12,5,10,9,.2]);
  total = computed(() => this.numbers().reduce((acc, val) => acc + val, 0));
  percentages = computed(() => this.numbers().map(num => (num / this.total()) * 100));
}
