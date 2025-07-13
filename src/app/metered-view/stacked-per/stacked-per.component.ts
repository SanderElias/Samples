import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'se-stacked-per',
  imports: [],
  template: `
    @for (per of percentages(); track $index) {
      <div class="bar" [style.width.%]="per.value" [style.backgroundColor]="'var(--metered-color-' + $index + ')'">
        {{ per.value.toFixed(1) }}%<br />
        {{ per.name }}
      </div>
    }
  `,
  styleUrl: './stacked-per.component.css'
})
export class StackedPerComponent {
  data = input<{ value: number; name: string }[]>([
    { value: 4, name: 'A' },
    { value: 8, name: 'B' },
    { value: 12, name: 'C' },
    { value: 5, name: 'D' },
    { value: 10, name: 'E' },
    { value: 9, name: 'F' },
    { value: 20, name: 'blah' },
    { value: 0.2, name: 'G' }
  ]);
  total = computed(() => this.data().reduce((acc, val) => acc + val.value, 0));
  percentages = computed(() => this.data().map(num => ({ value: (num.value / this.total()) * 100, name: num.name })));
}
