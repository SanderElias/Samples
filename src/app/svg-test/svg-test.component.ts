import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-test',
  templateUrl: './svg-test.component.html',
  styles: [],
})
export class SvgTestComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  reColor() {
    this.count += 1;
  }

  bit(n) {
    console.log(`rectangle number ${n} is clicked`)
  }
}
