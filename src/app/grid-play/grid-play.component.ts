import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { assertDefined } from '@se-ng/signal-utils';
import { LoggedIn } from './logged-in-user.service';

@Component({
  selector: 'se-grid-play',
  imports: [],
  template: `
    <h1>Grid Play {{ user() }}</h1>
    <div #gridContainer class="grid-container" (mousemove)="mouseToXY($event)">
      <div class="grid-item" [style.--x]="1" [style.--y]="1">1</div>
      <div class="grid-item" [style.--x]="2" [style.--y]="2">3</div>
      <div
        class="mouse-indicator"
        [style.--x]="mouseOnCell().x"
        [style.--y]="mouseOnCell().y"
      ></div>
    </div>
    <div id="cell-coords">{{ mouseOnCell().x }}, {{ mouseOnCell().y }}</div>
  `,
  styleUrl: './grid-play.component.css'
})
export class GridPlayComponent {
  user = inject(LoggedIn).user;
  mouseOnCell = signal(
    { x: 0, y: 0 },
    //  Custom equality function to prevent unnecessary updates when the mouse is in the same cell
    { equal: (a, b) => a.x === b.x && a.y === b.y }
  );
  gridContainerRef = viewChild('gridContainer', { read: ElementRef });
  gridContainer = computed(
    () =>
      assertDefined(this.gridContainerRef()?.nativeElement) as HTMLDivElement
  );
  gridProps = signal({
    cellSize: 0,
    gap: 0,
    xCells: 0,
    yCells: 0
  });

  _ = afterRenderEffect({
    read: () => {
      const gridContainer = this.gridContainer();
      const style = getComputedStyle(gridContainer);
      this.gridProps.set({
        cellSize: parseFloat(style.getPropertyValue('--cellSize') || '10'),
        gap: parseFloat(style.getPropertyValue('--gap') || '1'),
        xCells: Number(style.getPropertyValue('--xCells') || '40'),
        yCells: Number(style.getPropertyValue('--yCells') || '40')
      });
    }
  });

  mouseToXY(event: MouseEvent) {
    const gridContainer = this.gridContainer();
    const { cellSize, gap, xCells, yCells } = this.gridProps();
    const rect = gridContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const sizeIncludingGap = cellSize + gap;
    const x = Math.min(xCells, Math.floor(mouseX / sizeIncludingGap) + 1);
    const y = Math.min(yCells, Math.floor(mouseY / sizeIncludingGap) + 1);

    /** update the mouseOver signal with the new cell coordinates */
    this.mouseOnCell.set({ x, y });
  }
}
