import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.svg',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BlocksComponent {
  colCount = Math.floor(1000 / 6);
  /** generate the blocks.. create the ammount that will fit */
  blocks = Array.from({ length: this.colCount * this.colCount }, (_, i) => ({
    fillColor: this.randomColor(),
    x: this.calcX(i),
    y: this.calcY(i),
    id: i,
  }));
  /** input so e can do something */
  @Input() set recolor(x) {
    if (x) {
      this._recolor();
    }
  }
  /** fire an event when an rectangle is clicked. */
  @Output() rectClicked = new EventEmitter<number>();

  /** lick handler */
  sendRectNumber(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    const rect = ev.target as SVGRectElement;
    /** only handle clicks on rectangles, those will have an ID */
    if (!isNaN(+rect.dataset.id)) {
      this.rectClicked.emit(+rect.dataset.id);
    }
  }

  /** calculate column number */
  calcX(i) {
    const rowsDone = Math.floor(i / this.colCount) * this.colCount;
    return (i - rowsDone) * 6;
  }

  /** calculate row number */
  calcY(i) {
    return Math.floor(i / this.colCount) * 6;
  }

  /** give all the blocks a new color */
  _recolor() {
    this.blocks.forEach(block => (block.fillColor = this.randomColor()));
    console.log(`Changed the color of ${this.blocks.length} blocks`);
  }

  /** helper to generate a random color */
  randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
