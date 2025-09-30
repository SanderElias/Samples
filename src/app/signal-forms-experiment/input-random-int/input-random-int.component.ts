import { Component, computed, input, linkedSignal, model, numberAttribute, signal, type InputSignal } from '@angular/core';
import type { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'se-input-random-int',
  imports: [],
  template: `
    <span (click)="showMinMax.set(!showMinMax())" title="click to set boundaries">current value: {{ value() }} </span>
    @if (showMinMax()) {
      <label
        >Min value:
        <input
          type="range"
          [min]="min()"
          [max]="max()"
          [value]="underBoundary()"
          (input)="underBoundary.set(+$event.target.value)"
          step="1"
      /></label>
      <label
        >Max value:
        <input
          type="range"
          [min]="upperLowest()"
          [max]="max()"
          [value]="upperBoundary()"
          (input)="upperBoundary.set(+$event.target.value)"
          step="1"
      /></label>
    }
    <button type="button" (click)="getRandomInt()">Get random int between {{ underBoundary() }} and {{ upperBoundary() }}</button>
  `,
  styleUrl: './input-random-int.component.css',
  host: {
    '[class.min-max]': 'showMinMax()'
  }
})
export class InputRandomIntComponent implements FormValueControl<number> {
  readonly value = model<number>(0);
  readonly min = input<number | undefined>(0);
  readonly max = input<number | undefined>(100);
  showMinMax = signal(false);

  readonly underBoundary = linkedSignal(() => this.min() ?? 0);
  readonly upperBoundary = linkedSignal(() => this.max() ?? 100);
  readonly upperLowest = computed(() => Math.min(this.underBoundary(), this.min() ?? 0));

  getRandomInt() {
    //The maximum is inclusive and the minimum is inclusive
    this.value.set(Math.floor(Math.random() * (this.upperBoundary() - this.underBoundary() + 1)) + this.underBoundary());
  }
}
