import {Component, Input} from '@angular/core';
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
    this.month = monthNames[d.getMonth()].toUpperCase();
    this.dim = d.getDate();
    this.day = weekDayNames[d.getDay()];
  }
}


