import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { ObsClickDirective } from '../obs-click.directive';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [],
  imports: [ObsClickDirective]
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
