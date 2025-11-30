import { Component, signal } from '@angular/core';

import { GaugeComponent } from './gauge/gauge.component';
import { StackedPerComponent } from "./stacked-per/stacked-per.component";

@Component({
  selector: 'se-metered-view',
  imports: [GaugeComponent, StackedPerComponent],
  template: `
    <h1>Metered View</h1>

    <se-gauge [value]="currentValue()" [maxVal]="maxValue()" />
    <se-stacked-per />
    <label for="currentValue">Current Value</label>
    <input id="currentValue" type="range" min="0" [max]="maxValue()" [value]="currentValue()" (input)="currentValue.set($any($event.target).value)" />
  `,
  styleUrl: './metered-view.component.css'
})
export class MeteredViewComponent {
  maxValue = signal(100);
  currentValue = signal(50);
}
