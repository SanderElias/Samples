import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  NgZone,
  computed,
  inject,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';
import { CellComponent } from './cell/cell.component';

export interface Cell {
  id: number;
  alive: boolean;
}

const clampedRandom = (min: number, max: number) => Math.round(Math.random() * (max - min)) + min;

@Component({
  selector: 'se-cells',
  standalone: true,
  imports: [CommonModule, CellComponent],
  template: `@for (cell of cells(); track $index) {
    <se-cell [cellData]="cell" />
    } `,
  styleUrls: ['./cells.component.css'],
})
export class CellsComponent {
  elm = inject(ElementRef).nativeElement as HTMLDivElement;
  zone = inject(NgZone);
  cdr = inject(ChangeDetectorRef);
  gridSize = signal(15);
  cells = signal(
    Array.from({ length: 200 }, (_, i) =>
      signal<Cell>({
        id: i,
        alive: Math.random() < 0.06, // populate ~5%
      }),
    ),
  );

  growList = async () => {
    // grows the list slowly, so it doesn't block the UI without any updates
    const neededCells = this.gridSize() * this.gridSize();
    while (this.cells().length < neededCells) {
      const len = this.cells().length;
      const addNum = 50
      const add = len + addNum > neededCells ? neededCells - len : addNum;
      const newCells: WritableSignal<Cell>[] = [];
      for (let i = 0; i < add; i += 1) {
        newCells.push(
          signal({
            id: len + i,
            alive: Math.random() < 0.06, // populate ~5%
          }),
        );
      }
      this.cells.update(c => c.concat(newCells));
      await new Promise(r => setTimeout(r, 25));
    }
    console.log(`Done, created ${neededCells} in a ${this.gridSize()} x ${this.gridSize()} grid.`)
  };

  repopulate = () => this.cells().forEach(cell => cell.update(({ id }) => ({ id, alive: Math.random() < 0.06 })));

  calcGrid = () => {
    // get the number off cells that are fitting the browsers window.
    const gridStyle = window.getComputedStyle(this.elm);
    const cols = gridStyle.getPropertyValue('grid-template-columns').split(' ').length;
    this.gridSize.set(cols);
  };

  aliveColor = `oklch(${clampedRandom(55, 95)}% 75% 173`;
  deadColor = `oklch(${clampedRandom(10, 55)}% 50% 280`;
  cycle = () => {
    const cells = this.cells();
    const gs = this.gridSize();
    for (const cell of cells) {
      const { id, alive } = cell();
      const alives = neighbors(id, gs).reduce((aliveCOunt, cellId) => (aliveCOunt += cells[cellId]?.().alive ? 1 : 0), 0);
      if (alive && !(alives === 2 || alives === 3)) {
        // cell dies
        cell.set({ id, alive: false });
        continue;
      }
      if (!alive && alives === 3) {
        // reproduce!
        cell.set({ id, alive: true });
      }
    }
  };

  started: any;
  @HostListener('click')
  onClick = (ev: MouseEvent) => {
    this.zone.runOutsideAngular(() => {
      if (this.started) {
        clearInterval(this.started);
        this.repopulate();
        this.started = undefined;
      } else {
        this.started = setInterval(this.cycle, 100);
      }
    });
  };

  ngOnInit() {
    this.calcGrid();
    this.growList()
  }
}

function neighbors(id: number, rowLength: number) {
  const above = id => (id < rowLength ? id - rowLength + rowLength * rowLength : id - rowLength); // use last row when on first
  const below = id => (id + rowLength > rowLength * rowLength - 1 ? id + rowLength - rowLength * rowLength : id + rowLength); // use first row when on last
  const left = id => (id % rowLength === 0 ? id + rowLength - 1 : id - 1); // use last column when on start
  const right = id => (id + (1 % rowLength) === 0 ? id - rowLength + 1 : id + 1); // use first column when on end
  const aboveId = above(id);
  const belowId = below(id);
  return [left(aboveId), aboveId, right(aboveId), left(id), right(id), left(belowId), belowId, right(belowId)];
}
