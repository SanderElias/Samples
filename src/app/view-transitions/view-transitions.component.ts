import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'se-view-transitions',
  imports: [],
  template: `
    <h1>View Transition playground</h1>
    <div class="button-bar">
      <button (click)="toggleSortOrder()">click to sort</button>
      <button (click)="addBox()">click to add</button>
    </div>
    <div class="grid">
      @for (box of sortedBoxes(); track box.id) {
        <div
          class="box"
          [style.backgroundColor]="'hsl(' + box.value * 3.6 + ', 70%, 50%)'"
          [style.view-transition-name]="'box-' + box.id"
        >
          {{ box.value }}
        </div>
      }
    </div>
  `,
  styleUrl: './view-transitions.component.css'
})
export class ViewTransitionsComponent {
  boxes = signal(Array.from({ length: 10 }, (_, i) => ({ id: i, value: Math.floor(Math.random() * 100) })));
  sortOrder = signal<'asc' | 'desc' | 'none'>('none');

  sortedBoxes = computed(() => {
    const order = this.sortOrder();
    const boxes = this.boxes();
    if (order === 'none') {
      return boxes;
    }
    return [...boxes].sort((a, b) => (order === 'asc' ? a.value - b.value : b.value - a.value));
  });

  addBox() {
    const currentBoxes = this.boxes();
    const newBox = { id: currentBoxes.length, value: Math.floor(Math.random() * 100) };
    this.boxes.set([...currentBoxes, newBox]);
  }

  toggleSortOrder() {
    // Use View Transitions API if available
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        this.sortOrder.set(this.sortOrder() === 'none' ? 'asc' : this.sortOrder() === 'asc' ? 'desc' : 'none');
      });
    } else {
      this.sortOrder.set(this.sortOrder() === 'none' ? 'asc' : this.sortOrder() === 'asc' ? 'desc' : 'none');
    }
  }
}
