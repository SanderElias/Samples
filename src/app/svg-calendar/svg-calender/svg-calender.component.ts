import {Component, Input} from '@angular/core';

const shortMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const weekDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

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
})
export class SvgCalenderComponent {
  @Input() set date(x: Date) {
    this.splitDate(x);
  }
  private month: string;
  private day: string;
  private dim: number;

  constructor() {
    this.splitDate();
  }

  splitDate(d = new Date()) {
    console.log('set', d);
    this.month = shortMonths[d.getMonth()].toUpperCase();
    this.dim = d.getDate();
    this.day = weekDay[d.getDay()];
  }
}
