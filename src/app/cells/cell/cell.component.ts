import { afterRenderEffect, Component, computed, effect, ElementRef, inject, model, NgZone } from '@angular/core';

import { Cell } from '../cells.component';

const clampedRandom = (min: number, max: number) => Math.round(Math.random() * (max - min)) + min;

@Component({
  selector: 'se-cell',
  imports: [],
  template: ``,
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  // @Input() cellData: Signal<Cell>;
  cellData = model.required<Cell>();
  elm = inject(ElementRef).nativeElement as HTMLDivElement;
  zone = inject(NgZone);

  aliveColor = `oklch(${clampedRandom(55, 95)}% 75% 173`;
  deadColor = `oklch(${clampedRandom(10, 55)}% 50% 280`;

  id = computed(() => this.cellData().id);
  alive = computed(() => this.cellData().alive);
  setBg = () =>
    this.zone.runOutsideAngular(() => this.elm.style.setProperty('--cellBg', this.alive() ? this.aliveColor : this.deadColor));

  // update the DOM when the cell dies or resurrects.
  // dummy = effect(() => this.setBg());
  _ = afterRenderEffect(() => this.setBg());

  ngOnInit() {
    this.setBg();
  }
}
