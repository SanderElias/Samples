import { Component, computed, input } from '@angular/core';

import type { CalenderDay } from '../calenderDay';
import { DayCellComponent } from '../day-cell/day-cell.component';

@Component({
  selector: 'se-month',
  imports: [DayCellComponent],
  template: `
    <h2>{{ monthName() }}</h2>
    <span>S</span>
    <span>M</span>
    <span>T</span>
    <span>W</span>
    <span>T</span>
    <span>F</span>
    <span>S</span>
    @for (day of days(); track day.date) {
      <se-day-cell [day]="day" (click)="select(day)"></se-day-cell>
    }
  `,
  styleUrls: ['./month.component.css']
})
export class MonthComponent {
  date = input.required<Date>();
  days = computed(() => createMonthArray(this.date()));
  monthName = computed(() => {
    return this.days()[10].date.toLocaleString('default', { month: 'long' });
  });

  select(day: CalenderDay) {
    const days = this.days();
    if (day.isCurrentMonth === false) {
      return;
    }
    const first = days.find(day => day.isFirstSelected);
    const last = days.find(day => day.isLastSelected);
    console.log({ day, first, last });
    if (!first) {
      day.isFirstSelected = true;
      return; //done, as it is the first selection.
    }
    if (!last) {
      day.isLastSelected = true;
      return; //done, as it is the first selection.
    }
    if (first.date === day.date && last.date === day.date) {
      // boolean toggle for first selection
      day.isFirstSelected = false;
      day.isLastSelected = false;
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
}

function createMonthArray(date: Date): CalenderDay[] {
  const day = 24 * 60 * 60 * 1000;
  const nextDay = (date: Date) => new Date(date.getTime() + day);
  const dateFromDay = (day: number) => new Date(date.getFullYear(), date.getMonth(), day);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const dayArray: CalenderDay[] = [];
  for (let i = 0; i < firstDay.getDay(); i++) {
    // get the dates from past month that are still in the first week
    const prevDate = date.getTime() - (firstDay.getDay() - i) * day;
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

function createDay(date: Date, isCurrentMonth = true): CalenderDay {
  return {
    date,
    day: date.getDate(),
    isCurrentMonth,
    isFirstSelected: false,
    isLastSelected: false,
    isSpecial: false
  };
}
