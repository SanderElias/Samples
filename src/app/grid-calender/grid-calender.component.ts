import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayCellComponent } from './day-cell/day-cell.component';
import { CalenderDay } from './calenderDay';
import { MonthComponent } from './month/month.component';

@Component({
  selector: 'se-grid-calender',
  standalone: true,
  imports: [CommonModule, MonthComponent],
  template: `<h1>Grid Calender</h1>
    <div>
      @for (m of months; track m) {
        <se-month [date]="m"></se-month>
      }
    </div> `,
  styleUrls: ['./grid-calender.component.css'],
})
export class GridCalenderComponent {
  date = new Date('2023-05-01');
  months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(month => new Date(this.date.getFullYear(), month, 1));
}
