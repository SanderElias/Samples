import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgZone, ViewEncapsulation, inject } from '@angular/core';

const clampedRandom = (min: number, max: number) => Math.round(Math.random() * (max - min)) + min;

@Component({
  selector: 'se-cell-raw',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styleUrls: ['./cell-raw.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CellRawComponent {
  zone = inject(NgZone);
  elm = inject(ElementRef).nativeElement as HTMLDivElement;
  gridSize = 100;
  cells = [];
  aliveColor = `oklch(${clampedRandom(55, 95)}% 75% 173`;
  deadColor = `oklch(${clampedRandom(10, 55)}% 50% 280`;

  setup = async () => {
    const elm = this.elm;
    const cells = this.cells;
    const addCell = (id: number) => {
      const cell = document.createElement('cell');
      const alive = Math.random() < 0.06;
      cell.style.setProperty('--cellBg', alive ? this.aliveColor : this.deadColor);
      cells.push({ id, cell, alive });

      elm.appendChild(cell);
    };

    console.log(`adding ${this.gridSize * this.gridSize} cells`);
    for (let id = 0; id < this.gridSize * this.gridSize; id += 1) {
      addCell(id);
      id % 1000 === 0 && (await new Promise(r => setTimeout(r, 15)));
    }
    await new Promise(r => setTimeout(r, 10));
    const rowLength = window.getComputedStyle(elm).getPropertyValue('grid-template-columns').split(' ').length;
    let i = cells.length - 1;
    console.log(elm, cells.length, rowLength);
    while (cells.length < rowLength * rowLength) {
      addCell(++i);
      i % 1000 === 0 && (await new Promise(r => setTimeout(r, 4)));
    }
    console.log('done creating', this.cells.length);
    i = 0;
    // for (const cell of cells) {
    //   elm.appendChild(cell.cell);
    //   i++ % 5000 === 0 && (await new Promise(r => setTimeout(r, 4)));
    // }
    console.log('done adding', this.cells.length);
  };

  constructor() {
    this.zone.runOutsideAngular(this.setup);
  }
}
