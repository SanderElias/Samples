import { Component, Input } from '@angular/core';
import { weekDayNames, monthNames } from 'src/app/util/daysandmonthsnames';

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
    ],
    standalone: true
})
export class SvgCalenderComponent {
  @Input() set date(x: Date) {
    this.splitDate(x);
  }
  public month: string;
  public day: string;
  public dim: number;

  constructor() {
    this.splitDate();
  }

  splitDate(d = new Date()) {
    console.log('set', d);
    this.month = monthNames[d.getMonth()].toUpperCase();
    this.dim = d.getDate();
    this.day = weekDayNames[d.getDay()];
  }
}
