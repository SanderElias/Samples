import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'se-dummy-content',
  imports: [],
  template: ` <p>dummy-content works!</p> `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dummy-content.component.css'
})
export class DummyContentComponent {}
