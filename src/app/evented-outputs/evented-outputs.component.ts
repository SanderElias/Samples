import { Component, computed, signal, viewChildren } from '@angular/core';

import { EvChildComponent } from './ev-child/ev-child.component';

declare global {
  interface HTMLElementEventMap {
    onSelected: CustomEvent<string>;
  }
}

@Component({
  selector: 'se-evented-outputs',
  imports: [EvChildComponent],
  template: `
    <h3>Evented Outputs</h3>
    <div>Selected items: {{ $selected() }}</div>
    <p>
      Click on the items to toggle their selection
      <button (click)="add()">add</button>
      <label>
        <input type="checkbox" (change)="many.set(!many())" checked="many()" />
        <span>mutliselect?</span>
      </label>
    </p>
    @for (item of arr; track $index) {
      <ev-child [value]="item"> {{ item }}</ev-child>
    }
  `,
  styleUrl: './evented-outputs.component.css',
  host: {
    // use a custom DOM event to signal selection
    '(onSelected)': 'handleSelected($event.detail)'
  }
})
export class EventedOutputsComponent {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  tiles = viewChildren(EvChildComponent<number>);

  /** can I select 1 or many tiles */
  many = signal(true);

  /** get a list of selected tiles */
  $selected = computed(() => {
    const tiles = this.tiles();
    return tiles.filter(t => t.selected()).map(t => t.value());
  });

  // when many is false, only one tile can be selected at a time
  handleSelected = (id: string) => {
    if (!this.many()) {
      this.tiles().forEach(t => {
        if (t.id !== id) {
          t.selected.set(false);
        }
      });
    }
  };

  add = () => {
    this.arr.push(this.arr.length + 1);
  };
}
