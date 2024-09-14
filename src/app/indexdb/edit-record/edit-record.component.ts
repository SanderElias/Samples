import { Component, computed, inject, input, signal, effect, untracked, output } from '@angular/core';
import type { DbRecord } from '../event-source.types';
import { EvSourceDbService } from '../ev-source-db.service';
import type { UniqueId } from '../unique-id-helpers';

@Component({
  selector: 'se-edit-record',
  standalone: true,
  imports: [],
  template: `
    <h4>Edit record</h4>
    @for (prop of keys(); track $index) {
      <label>
        <span>{{ prop }}</span>
        <input [value]="data()[prop] ?? ''" (input)="data()[prop] = $any($event.target).value" />
      </label>
    }
    <label>
      <input [value]="newProp()" (input)="newProp.set($any($event.target).value)" />
      <button (click)="addProp()">Add Prop</button>
    </label>
    <div>
    <button (click)="save()">Save</button>
    <button (click)="done.emit()">Cancel</button>
    <div>
  `,
  styleUrl: './edit-record.component.css',
})
export class EditRecordComponent {
  #evDb = inject(EvSourceDbService);
  id = input<UniqueId>();
  fields = input<string[]>([]);
  keys = computed(() => Array.from(new Set([...this.fields(), ...Object.keys(this.data())])));
  data = signal({ id: this.id() } as DbRecord);
  newProp = signal('name');
  done = output()

  save() {
    this.#evDb.update(this.data());
    this.done.emit();
  }

  addProp() {
    const prop = this.newProp();
    if (!prop) {
      return;
    }
    console.log('addProp', prop);
    this.data.set({ ...this.data(), [prop]: '' });
    this.newProp.set('');
  }

  constructor() {
    effect(() => {
      const id = this.id();
      if (!id) {
        return;
      }
      const record = this.#evDb.getData(id);
      if (record) {
        untracked(() => this.data.set(record));
      }
    });

    effect(() => console.log(this.newProp()));
  }
}
