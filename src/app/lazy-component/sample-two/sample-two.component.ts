import type { OnInit } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sample-two',
  templateUrl: './sample-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export default class SampleTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
