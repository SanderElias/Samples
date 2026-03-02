import { Component, signal } from '@angular/core';

import { GaugeComponent } from './gauge/gauge.component';
import { StackedPerComponent } from './stacked-per/stacked-per.component';

@Component({
  selector: 'se-metered-view',
  imports: [GaugeComponent, StackedPerComponent],
  template: `
    <!-- <h1>Metered View</h1>

    <se-gauge [value]="currentValue()" [maxVal]="maxValue()" />
    <se-stacked-per />
    <label for="currentValue">Current Value</label>
    <input
      id="currentValue"
      type="range"
      min="0"
      [max]="maxValue()"
      [value]="currentValue()"
      (input)="currentValue.set($any($event.target).value)"
    />
    <hr /> -->
    <svg
      class="myGauge"
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- center (100,100), radius 80, gap ~70° centered at bottom -->
      <path
        d="M54.114 165.532 A80 80 0 1 1 145.886 165.532"
        fill="none"
        stroke="gray"
        stroke-width="35"
        stroke-linecap="round"
      />
    </svg>
  `,
  styleUrl: './metered-view.component.css'
})
export class MeteredViewComponent {
  maxValue = signal(100);
  currentValue = signal(100);
}
