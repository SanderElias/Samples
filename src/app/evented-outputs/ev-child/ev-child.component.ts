import { Component, ElementRef, inject, model } from '@angular/core';

@Component({
  selector: 'ev-child',
  standalone: true,
  imports: [],
  template: ` <ng-content /> `,
  styleUrl: './ev-child.component.css',
  host: {
    '[class.selected]': 'selected()',
    '(click)': 'handleClick()',
  },
})
export class EvChildComponent<T = unknown> {
  selected = model(false);
  value = model.required<T>();
  id = `evChild-${childId++}`;

  onSelected = eventOutput('onSelected');

  handleClick() {
    this.selected.set(!this.selected());
    if (this.selected()) {
      this.onSelected.emit(this.id);
    }
  }
}

let childId = 0;

const eventOutput = <T = string>(name: string, options: { bubbles?: boolean; cancelable?: boolean } = { bubbles: true }) => {
  const elm = inject(ElementRef).nativeElement as HTMLElement;
  return {
    emit: (payload: T) => {
      const ev = new CustomEvent(name, { ...options, detail: payload });
      elm.dispatchEvent(ev);
    },
  };
};
