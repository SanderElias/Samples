import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  signal,
  viewChild,
  type Signal
} from '@angular/core';
import { assertDefined } from '@se-ng/signal-utils';

@Component({
  selector: 'se-grid-play',
  imports: [],
  template: `
    <h1>Grid Play</h1>
    <div
      #gridContainer
      class="grid-container"
      (mousemove)="onMouseMove($event)"
    >
      <div class="grid-item" [style.--x]="1" [style.--y]="1">1</div>
      <div class="grid-item" [style.--x]="2" [style.--y]="2">2</div>
      <div
        class="mouse-indicator"
        [style.--x]="mouseOver().x"
        [style.--y]="mouseOver().y"
      ></div>
    </div>
    <div id="cell-coords">{{ mouseOver().x }}, {{ mouseOver().y }}</div>
  `,
  styleUrl: './grid-play.component.css'
})
export class GridPlayComponent {
  mouseOver = signal(
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

  _ = afterRenderEffect(() => {
    const gridContainer = this.gridContainer();
    const style = getComputedStyle(gridContainer);
    this.gridProps.set({
      cellSize: parseFloat(style.getPropertyValue('--cellSize') || '10'),
      gap: parseFloat(style.getPropertyValue('--gap') || '1'),
      xCells: Number(style.getPropertyValue('--xCells') || '40'),
      yCells: Number(style.getPropertyValue('--yCells') || '40')
    });
  });

  onMouseMove(event: MouseEvent) {
    const gridContainer = this.gridContainer();
    const { cellSize, gap, xCells, yCells } = this.gridProps();
    const rect = gridContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const cellSpan = cellSize + gap;
    const x = Math.min(xCells, Math.floor(mouseX / cellSpan) + 1);
    const y = Math.min(yCells, Math.floor(mouseY / cellSpan) + 1);

    this.mouseOver.set({ x, y });
  }
}
