import type { OnInit } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sample-one',
  templateUrl: './sample-one.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export default class SampleOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
