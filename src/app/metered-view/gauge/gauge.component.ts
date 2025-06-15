import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'se-gauge',
  imports: [],
  template: `
    <svg height="200" width="200" viewBox="0 0 640 640">
      <g class="layer-above">
        <g class="imagelayer"></g>
        <g class="shapelayer">
          <path
            data-index="0"
            fill-rule="evenodd"
            d="
M 192.50671027842554 157.16738197216137
A 5 5 0 0 1 183.35328972157447 151.92352711874773
L 244.30143967419656 69.39735634218857
Z"
            style="opacity: 1; stroke: rgba(0,0,0, .5); stroke-opacity: 0.2; fill: rgb(0, 0, 0); fill-opacity: 0.3; stroke-width: 2px;"
          ></path>
        </g>
      </g>
    </svg>
  `,
  styleUrl: './gauge.component.css',
  host: {
    '[style.--percentage]': 'per()'
  }
})
export class GaugeComponent {
  value = input(50);
  maxVal = input(100);

  readonly per = computed(() => {
    return Math.floor((this.value() / this.maxVal()) * 1000) / 1000;
  });
}
