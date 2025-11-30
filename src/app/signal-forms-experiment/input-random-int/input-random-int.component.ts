import { Component, computed, input, linkedSignal, model, signal, type WritableSignal } from '@angular/core';
import type { FormValueControl } from '@angular/forms/signals';

const MAX = 1000;
@Component({
  selector: 'se-input-random-int',
  imports: [],
  template: `
    <span (click)="showMinMax.set(!showMinMax())" title="click to set boundaries">current value: {{ value() }} </span>
    <label
      >Min value:
      <input
        type="range"
        [min]="min() ?? 0"
        [max]="max() ?? MAX"
        [value]="lowerBoundary()"
        (input)="lowerBoundary.set(+$event.target.value)"
        step="1"
    /></label>
    <label
      >Max value:
      <input
        type="range"
        [min]="upperLowest()"
        [max]="max() ?? MAX"
        [value]="upperBoundary()"
        (input)="upperBoundary.set(+$event.target.value)"
        step="1"
    /></label>
    <button type="button" (click)="getRandomInt()">Get random int between {{ lowerBoundary() }} and {{ upperBoundary() }}</button>
  `,
  styleUrl: './input-random-int.component.css',
  host: {
    '[class.min-max]': 'showMinMax()'
  }
})
export class InputRandomIntComponent implements FormValueControl<number> {
  readonly MAX = MAX;
  readonly value = model<number>(0);
  readonly min = input<number | undefined>(0);
  readonly max = input<number | undefined>(MAX);
  readonly showMinMax = signal(false);

  readonly lowerBoundary = linkedSignal(() => this.min() ?? 0);
  readonly upperBoundary: WritableSignal<number> = linkedSignal({
    source: this.lowerBoundary,
    computation: (min, prev) => {
      let newValue = prev?.value ?? MAX;
      return Math.min(MAX, newValue < min ? min + 1 : newValue);
    }
  });
  readonly upperLowest = computed(() => Math.max(this.lowerBoundary() + 1, this.min() ?? 0));

  getRandomInt() {
    //The maximum is inclusive and the minimum is inclusive
    this.value.set(Math.floor(Math.random() * (this.upperBoundary() - this.lowerBoundary() + 1)) + this.lowerBoundary());
  }
}
