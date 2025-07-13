import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'se-gauge',
  imports: [],
  template: `
    <div class="gauge"></div>
    <div class="gauge-thing"></div>
    <div class="text">{{ (per()*100).toFixed(1) }}% <br />{{ value() }}</div>
  `,
  styleUrl: './gauge.component.css',
  host: {
    '[style.--percentage]': 'per()'
  }
})
export class GaugeComponent {
  readonly value = input(15);
  readonly maxVal = input(100);

  readonly per = computed(() => {
    return Math.floor((this.value() / (this.maxVal() || 1)) * 1000) / 1000;
  });
}
