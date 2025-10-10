// Shape interfaces using 'type' as discriminator
export interface PersonShape {
  type: 'person';
  name: string;
  age: number;
}

export interface CompanyShape {
  type: 'company';
  name: string;
  industry: string;
}

export interface AnimalShape {
  type: 'animal';
  name: string;
  species: string;
}

export interface CarShape {
  type: 'car';
  brand: string;
  model: string;
}

export type Shape = PersonShape | CompanyShape | AnimalShape | CarShape;
import { JsonPipe } from '@angular/common';
import { Component, signal, type WritableSignal } from '@angular/core';
import { Control,  form, type FieldContext, type FieldState, type FieldTree } from '@angular/forms/signals';
import { isObject } from '@se-ng/signal-utils';
@Component({
  selector: 'se-dynamic',
  imports: [JsonPipe, Control],
  template: `
    <h1>Dynamic Form Trail</h1>
    <p>This form is generated based on a random shape object.</p>
    <button (click)="inspect()">inspect</button>
    <form>
      <label>Type</label>
      <input type="text" [control]="fd.type" />

      @for (_field of fields(); track _field) {
        <label for="{{ _field }}">
          <span>{{ _field }}</span>
          <!-- <input type="text"  placeholder="{{ _field }}" [value]="fd().value()[_field]" /> -->
          <input type="text" placeholder="{{ _field }}" [control]="fd[_field]" />
        </label>
      }
    </form>
    <pre><code>{{ fd().value() | json }}</code></pre>
  `,
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  randomtype = Math.floor(Math.random() * shapes.length);
  model: WritableSignal<Shape> = signal(shapes[this.randomtype]);
  fd = form(this.model);
  fields = getPropNames.bind(this.fd);

  getFieldValue(field: keyof Shape) {
    // return this.fd().properties[field];
  }

  inspect() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    this.model.set(randomShape);
  }
}

function getPropNames<T>(this: FieldTree<T>): (keyof T)[] {
  // console.log('this', this);
  const v: any = this().value();
  // @ts-expect-error
  console.log(this().properties);

  return (isObject(v) ? (Object.keys(v) as (keyof T)[]) : []) as (keyof T)[];
}

const shapes: Shape[] = [
  { type: 'person', name: 'Alice', age: 30 },
  { type: 'company', name: 'Acme Corp', industry: 'Manufacturing' },
  { type: 'animal', name: 'Fido', species: 'Dog' },
  { type: 'car', brand: 'Toyota', model: 'Corolla' }
];
