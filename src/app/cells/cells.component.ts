import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CellComponent } from './cell/cell.component';

export interface Cell {
  id: number;
  alive: boolean;
}

const clampedRandom = (min: number, max: number) =>
  Math.round(Math.random() * (max - min)) + min;

@Component({
  selector: 'se-cells',
  standalone: true,
  imports: [CommonModule, CellComponent],
  template: `<se-cell
    *ngFor="let cell of cells()"
    [cellData]="cell"
    (click)="onClick($event)"
  ></se-cell>`,
  styleUrls: ['./cells.component.css'],
})
export class CellsComponent {
  elm = inject(ElementRef).nativeElement as HTMLDivElement;
  zone = inject(NgZone);
  cdr = inject(ChangeDetectorRef);
  gridSize = signal(15);
  cells = computed(() =>
    Array.from({ length: this.gridSize() * this.gridSize() }, (_, i) =>
      signal<Cell>({
        id: i,
        alive: Math.random() < 0.06, // populate ~5%
      }),
    ),
  );

  calcGrid = () => {
    const gridStyle = window.getComputedStyle(this.elm);
    const cols = gridStyle
      .getPropertyValue('grid-template-columns')
      .split(' ').length;
    this.gridSize.set(cols);
  };

  _dummy = effect(() => {
    console.log(this.gridSize());
  });

  aliveColor = `oklch(${clampedRandom(55, 95)}% 75% 173`;
  deadColor = `oklch(${clampedRandom(10, 55)}% 50% 280`;
  cycle = () => {
    const cells = this.cells();
    const gs = this.gridSize();
    const elmList = this.elm.children;
    for (const cell of cells) {
      const { id, alive } = cell();
      const cellElm = elmList.item(id) as HTMLDivElement;
      // console.log(cellElm);
      const alives = neighbors(id, gs).reduce(
        (aliveCOunt, cellId) => (aliveCOunt += cells[cellId]?.().alive ? 1 : 0),
        0,
      );
      if (alive && !(alives === 2 || alives === 3)) {
        // cell dies
        cell.set({ id, alive: false });
        cellElm.style.setProperty('--cellBg', this.deadColor);
        continue;
      }
      if (!alive && alives === 3) {
        // reproduce!
        cell.set({ id, alive: true });
        cellElm.style.setProperty('--cellBg', this.aliveColor);
      }
    }
    // this.cdr.detectChanges();
    // console.log('cycled');
  };

  started: any;
  onClick = (ev: MouseEvent) => {
    this.zone.runOutsideAngular(() => {
      if (this.started) {
        clearInterval(this.started);
      } else {
        this.started = setInterval(this.cycle, 100);
      }
    });
    // this.cycle();
    // const target = ev.target as HTMLDivElement;
    // const cells = this.cells();
    // const id = parseInt(target.dataset.id);
    // const ajecent = neighbors(id, this.gridSize());
    // const blink = async (ids: number[], it = 0) => {
    //   if (it < 6) {
    //     ids.forEach(id => {
    //       const cell = cells[id];
    //       if (!cell) {
    //         console.log(`CellID:${id} doesn't exits`);
    //         return;
    //       }
    //       const { alive } = cell();
    //       cell.set({ id, alive: !alive });
    //     });
    //     await new Promise(r => setTimeout(r, 250));
    //     blink(ids, it + 1);
    //   }
    // };
    // // ajecent.forEach(n => blink(n));
    // blink(ajecent);
  };

  ngOnInit() {
    this.calcGrid();
  }
}

function neighbors(id: number, r: number) {
  const above = id => (id < r ? id - r + r * r : id - r);
  const below = id => (id + r > r * r - 1 ? id + r - r * r : id + r);
  const left = id => (id % r === 0 ? id + r - 1 : id - 1);
  const right = id => (id + (1 % r) === 0 ? id - r + 1 : id + 1);
  const aboveId = above(id);
  const belowId = below(id);
  return [
    left(aboveId),
    aboveId,
    right(aboveId),
    left(id),
    right(id),
    left(belowId),
    belowId,
    right(belowId),
  ];
}
