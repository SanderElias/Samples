import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayCellComponent } from '../day-cell/day-cell.component';
import { CalenderDay } from '../calenderDay';

@Component({
  selector: 'se-month',
  standalone: true,
  imports: [CommonModule, DayCellComponent],
  template: `
    <h2>{{ monthName }}</h2>
    <span>S</span>
    <span>M</span>
    <span>T</span>
    <span>W</span>
    <span>T</span>
    <span>F</span>
    <span>S</span>
    @for (day of days; track day) {
      <se-day-cell [day]="day" (click)="select(day)"></se-day-cell>
    }
  `,
  styleUrls: ['./month.component.css'],
})
export class MonthComponent {
  @Input() set date(x: Date) {
    // this._date = x;
    if (x?.constructor?.name !== 'Date') {
      return;
    }
    this.days = this.calcDateArray(x);
    if (x.getMonth() === 0) {
      this.days[12].isFirstSelected = true;
      this.days[17].isLastSelected = true;
    }
  }
  days!: CalenderDay[];

  get monthName() {
    return this.days[10].date.toLocaleString('default', { month: 'long' });
  }

  select(day: CalenderDay) {
    if (day.isCurrentMonth === false) {
      return;
    }
    const first = this.days.find(day => day.isFirstSelected);
    const last = this.days.find(day => day.isLastSelected);
    console.log({ day, first, last });
    if (!first) {
      day.isFirstSelected = true;
      return; //done, as it is the first selection.
    }
    if (day.date < first.date) {
      first.isFirstSelected = false;
      day.isFirstSelected = true;
      return; //done, as it is the first selection.
    }
    // as we now are > first, we can "move" the lastSelcted one
    if (last) {
      last.isLastSelected = false;
    }
    day.isLastSelected = true;
  }

  calcDateArray(date: Date) {
    const nextDay = (date: Date) => new Date(date.getTime() + 24 * 60 * 60 * 1000);
    const dateFromDay = (day: number) => new Date(date.getFullYear(), date.getMonth(), day);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dayArray:CalenderDay[] = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
      // get the dates from past month that are still in the first week
      const prevDate = date.getTime() - (firstDay.getDay() - i) * 24 * 60 * 60 * 1000;
      dayArray.push(createDay(new Date(prevDate), false));
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dayArray.push(createDay(dateFromDay(i)));
    }
    let next = nextDay(lastDay);
    while (next.getDay() !== 0) {
      // get the dates from next month that are still in the last week
      dayArray.push(createDay(next, false));
      next = nextDay(next);
    }

    return dayArray;
  }
}

function createDay(date: Date, isCurrentMonth = true): CalenderDay {
  return {
    date,
    day: date.getDate(),
    isCurrentMonth,
    isFirstSelected: false,
    isLastSelected: false,
    isSpecial: false,
  };
}
