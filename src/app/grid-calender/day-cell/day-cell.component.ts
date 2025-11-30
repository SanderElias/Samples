import { Component, input } from '@angular/core';

import type { CalenderDay } from '../calenderDay';
@Component({
  selector: 'se-day-cell',
  imports: [],
  template: ` {{ day().day }} `,
  styleUrls: ['./day-cell.component.css'],
  host: {
    '[class.mute]': '!day().isCurrentMonth',
    '[class.special]': 'day().isSpecial',
    '[class.first]': 'day().isFirstSelected',
    '[class.last]': 'day().isLastSelected'
  }
})
export class DayCellComponent {
  readonly day = input.required<CalenderDay>();
}
