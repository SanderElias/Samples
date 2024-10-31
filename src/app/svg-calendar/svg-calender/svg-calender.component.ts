import { Component, Input } from '@angular/core';
import { monthNames,weekDayNames } from 'src/app/util/daysandmonthsnames';

@Component({
    selector: 'app-svg-calender',
    templateUrl: './svg-calender.component.svg',
    styles: [
        `
      :host {
        display: block;
        height: auto;
        width: 100px;
      }
      svg {
        font-family: monospace;
        text-anchor: middle;
        fill: #667777;
      }
    `,
    ]
})
export class SvgCalenderComponent {
  @Input() set date(x: Date) {
    this.splitDate(x);
  }
  month = '';
  day = '';
  dim = 0;

  constructor() {
    this.splitDate();
  }

  splitDate(d = new Date()) {
    if (typeof document === "undefined") return;
    this.month = monthNames[d.getMonth()].toUpperCase();
    this.dim = d.getDate();
    this.day = weekDayNames[d.getDay()];
  }
}
