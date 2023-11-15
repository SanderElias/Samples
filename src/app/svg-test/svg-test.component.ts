import { Component, OnInit } from '@angular/core';
import { BlocksComponent } from './blocks/blocks.component';

@Component({
  selector: 'app-svg-test',
  templateUrl: './svg-test.component.html',
  styles: [],
  standalone: true,
  imports: [BlocksComponent],
})
export class SvgTestComponent implements OnInit {
  /** simple counter, for no good reason ;) */
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  /** up the counter */
  reColor() {
    this.count += 1;
  }

  /** log out to console when a block is clicked. */
  bit(n) {
    console.log(`rectangle number ${n} is clicked`);
  }
}
