import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'se-arr-input',
  imports: [FormsModule],
  template: ` <button class="action" type="button" (click)="delete.emit(index)">🗑️</button>
    <input type="text" [name]="name + '.' + index" [(ngModel)]="value" />`,
  styles: [
    `
      :host {
        display: flex;
        gap: var(--size-1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArrInputComponent {
  @Output() delete = new EventEmitter<number>();
  @Input() name = '';
  @Input() value?: string;
  @Input() index?: number;
}
