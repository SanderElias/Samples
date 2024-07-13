import { Component, OnInit } from '@angular/core';
import { ObsClickDirective } from '../obs-click.directive';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [],
  standalone: true,
  imports: [ObsClickDirective],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
