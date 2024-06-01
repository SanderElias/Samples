import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'se-day-cell',
  standalone: true,
  imports: [CommonModule],
  template: ` {{ day.day }} `,
  styleUrls: ['./day-cell.component.css'],
})
export class DayCellComponent {
  @Input() day!: {
    date: Date;
    day: number;
    isCurrentMonth: boolean;
    isSpecial: boolean;
    isFirstSelected: boolean;
    isLastSelected: boolean;
  };
  @HostBinding('class.mute') get active() {
    return !this.day.isCurrentMonth;
  }
  @HostBinding('class.special') get special() {
    return this.day.isSpecial;
  }
  @HostBinding('class.first') get first() {
    return this.day.isFirstSelected;
  }
  @HostBinding('class.last') get last() {
    return this.day.isLastSelected;
  }
}
