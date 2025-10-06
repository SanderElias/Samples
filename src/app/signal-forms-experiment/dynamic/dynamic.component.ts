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
import { Component, type WritableSignal, afterNextRender, afterRenderEffect, computed, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Control, form, type FieldState } from '@angular/forms/signals';
@Component({
  selector: 'se-dynamic',
  imports: [JsonPipe, Control],
  template: `
    <h1>Dynamic Form Trail</h1>
    <p>This form is generated based on a random shape object.</p>
    <button (click)="inspect()">inspect</button>
    <form>
      @for (row of fd ; let i = $index ;track $index) {
        <h3>Item {{ $index + 1 }} ({{ row.type }})</h3>
        @for (_field of fields(row().value())(); track _field) {
          <label for="{{ _field}}">
            <span>{{ _field }}</span>
            <!-- <input type="text"  placeholder="{{ _field }}" [value]="row[_field]" /> -->

            <!-- <input type="text"  placeholder="{{ _field }}" [control]="" /> -->
          </label>
        }
      }
    </form>
    <pre><code>{{ fd().value() | json }}</code></pre>
  `,
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  randomtype = Math.floor(Math.random() * shapes.length);
  model: WritableSignal<Shape[]> = signal([]);
  fd = form(this.model);
  fields = (fs: Shape) => computed(() => Object.keys(fs));


  _ = afterRenderEffect(() => {
    console.log('model', this.model());
    console.log('form', this.fd().value());
    console.log(this.fd());
  });

  _1 = afterNextRender(() => {
    setTimeout(() => {
      let maxLength = Math.floor(Math.random() * 4 + 1);
      while (--maxLength) {
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        this.model.update(s => [...s, randomShape]);
      }
    }, 2000);

  });

  inspect () {
    const f = this.fd();
    console.log('fd', f);

  }
}

const shapes: Shape[] = [
  { type: 'person', name: 'Alice', age: 30 },
  { type: 'company', name: 'Acme Corp', industry: 'Manufacturing' },
  { type: 'animal', name: 'Fido', species: 'Dog' },
  { type: 'car', brand: 'Toyota', model: 'Corolla' }
];
