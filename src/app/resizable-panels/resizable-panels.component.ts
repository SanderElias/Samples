import { NgFor } from '@angular/common';
import { Component, ElementRef, effect, inject, signal } from '@angular/core';
import { ResizablePanelComponent } from './resizable-panel/resizable-panel.component';

@Component({
  selector: 'se-resizable-panels',
  standalone: true,
  imports: [ResizablePanelComponent, NgFor],
  template: `
    <input type="range" [value]="$range()" (change)="$range.set($any($event.target).value)" />
    @for (n of panels; track n) {
      <se-resizable-panel>
        <h3>Panel {{ n }}</h3>
      </se-resizable-panel>
    }
  `,
  styleUrls: ['./resizable-panels.component.css'],
})
export class ResizablePanelsComponent {
  $range = signal(1.5);
  elm = inject(ElementRef).nativeElement as HTMLElement;

  panels = ['One', 'Three', 'Two', 'Four'];
  constructor() {
    effect(() => {
      const r = this.$range();
      this.elm.style.setProperty('--panel-gap', `${r}px`);
    });
  }
}
