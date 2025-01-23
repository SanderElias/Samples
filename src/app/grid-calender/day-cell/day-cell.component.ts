import { CommonModule } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';
import { CalenderDay } from '../calenderDay';
@Component({
  selector: 'se-day-cell',
  imports: [CommonModule],
  template: ` {{ day().day }} `,
  styleUrls: ['./day-cell.component.css'],
  host: {
    '[class.mute]': '!day().isCurrentMonth',
    '[class.special]': 'day().isSpecial',
    '[class.first]': 'day().isFirstSelected',
    '[class.last]': 'day().isLastSelected',
  },
})
export class DayCellComponent {
  readonly day = input.required<CalenderDay>();

}
