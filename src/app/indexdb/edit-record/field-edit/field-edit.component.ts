import { Component, inject, input, model } from '@angular/core';
import { DTosPipe } from '../../dtos.pipe';
import { EvSourceDbService } from '../../ev-source-db.service';
import type { FieldType } from '../edit-record.component';

@Component({
  selector: 'se-field-edit',
  imports: [DTosPipe],
  template: `
    @switch (type()) {
      @case ('string') {
        <input type="text" [value]="data() ?? ''" (input)="update($event)" />
      }
      @case ('number') {
        <input type="number" [value]="data()" (input)="update($event)" />
      }
      @case ('boolean') {
        <input type="checkbox" [checked]="data()" (input)="update($event)" />
      }
      @case ('date') {
        <input type="datetime-local" [value]="data() | dTos" (input)="update($event)" />
      }
      @case ('nonEditable') {
        <span>No editable data! {{ data() }}</span>
      }
    }
  `,
  styleUrl: './field-edit.component.css'
})
export class FieldEditComponent {
  evdb = inject(EvSourceDbService);
  data = model<any>();
  type = input.required<FieldType>();

  update(event: Event) {
    const target = event.target as HTMLInputElement;
    let value: any = target.value;
    if (this.type() === 'number') {
      value = target.valueAsNumber;
    } else if (this.type() === 'boolean') {
      value = target.checked;
    } else if (this.type() === 'date') {
      value = new Date(target.value);
      console.log('date', value, target.value);
    }
    this.data.set(value);
  }
}
