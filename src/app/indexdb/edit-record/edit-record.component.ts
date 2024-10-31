import { Component, computed, inject, input, output, signal } from '@angular/core';
import { EvSourceDbService } from '../ev-source-db.service';
import type { DbRecord } from '../event-source.types';
import { type UniqueId } from '../unique-id-helpers';
import { FieldEditComponent } from './field-edit/field-edit.component';

export type FieldType = 'string' | 'number' | 'boolean' | 'symbol' | 'date' | 'nonEditable';

@Component({
    selector: 'se-edit-record',
    imports: [FieldEditComponent],
    template: `
    <h4>Edit record</h4>
    @if (id()) {
      <label>
        <span>id</span>
        <input [value]="id()" disabled />
      </label>
      <label>
        <span>table</span>
        <input [value]="$state().$data().table" disabled />
      </label>
      @for (prop of $availableProps(); track prop) {
        <label>
          <span>{{ prop.name }}</span>
          <se-field-edit [(data)]="$state().$data()[prop.name]" [type]="prop.type" />
        </label>
      }
      <label class="addProp">
        <input [value]="$state().$newProp()" (input)="$state().$newProp.set($any($event.target).value)" />
        <select #sel>
          <option value="string">string</option>
          <option value="number">number</option>
          <option value="boolean">boolean</option>
          <option value="date">date</option>
        </select>
        <button (click)="addProp(sel.value)">Add Prop</button>
      </label>
      <div>
        <button (click)="save()">Save</button>
        <button (click)="done.emit()">Cancel</button>
        <div></div>
      </div>
    }
  `,
    styleUrl: './edit-record.component.css'
})
export class EditRecordComponent {
  #evDb = inject(EvSourceDbService);
  id = input.required<UniqueId>();
  fields = input.required<ReadonlyArray<string>>();
  done = output();
  excludedFields = new Set(['id', 'tags', 'table']);

  $state = computed(() => {
    const id = this.id();
    if (!id) {
      throw new Error('id is required');
    }
    const data = this.#evDb.getData(id);
    if (!data) {
      throw new Error(`Record with id ${id} not found`);
    }
    const $types = this.#evDb.getTypesForTable(data.table);
    const $data = signal({ ...data } as DbRecord);
    return {
      $data,
      $newProp: signal(''),
      $types,
    };
  });

  $availableProps = computed(() => {
    const available = new Set([...this.fields(), ...Object.keys(this.$state().$data())]);
    for (const prop of this.excludedFields) {
      available.delete(prop);
    }
    return Array.from(available).map(name => {
      const val = this.$state().$data()[name];
      const origType = this.$state().$types().get(name) ?? typeof val;
      let type: FieldType = 'nonEditable';
      switch (origType) {
        case 'string':
        case 'number':
        case 'boolean':
          type = origType as FieldType;
          break;
        case 'object':
          if (val instanceof Date) {
            type = 'date';
          }
          break;
      }
      return { name, type };
    });
  });

  save() {
    const data = this.$state().$data();
    const tags = (data.tags ?? '')
      .toString()
      .split(',')
      .map(tag => tag.trim());
    this.#evDb.update({ ...data, tags });
    this.done.emit();
  }

  updateProp = (prop: string, value: string) => {
    this.$state().$data.update(data => ({ ...data, [prop]: value }));
  };

  addProp(type: string) {
    const prop = this.$state().$newProp();
    console.log('addProp', prop, type);
    if (!prop) {
      return;
    }
    let value: any = '';
    switch (type) {
      case 'boolean':
        value = false;
        break;
      case 'number':
        value = 0;
        break;
      case 'date':
        value = new Date();
        break;
    }

    console.log('addProp', prop);
    this.$state().$data.update(data => ({ ...data, [prop]: value }));
    this.$state().$newProp.set('');
  }
}

const tryCatch = (fn: Function, catchReturn: any) => {
  try {
    return fn();
  } catch (error) {
    return typeof catchReturn === 'function' ? catchReturn() : catchReturn;
  }
};
