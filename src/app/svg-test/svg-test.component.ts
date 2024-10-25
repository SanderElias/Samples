import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

import { BlocksComponent } from './blocks/blocks.component';

@Component({
    selector: 'app-svg-test',
    templateUrl: './svg-test.component.html',
    styles: [],
    imports: [BlocksComponent, DecimalPipe]
})
export class SvgTestComponent {
  /** simple counter, for no good reason ;) */
  count = 0;
  cellCount = 0;


  /** up the counter */
  reColor() {
    this.count += 1;
  }

  /** log out to console when a block is clicked. */
  bit(n:number) {
    console.log(`rectangle number ${n} is clicked`);
  }
}
