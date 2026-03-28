import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'se-baz',
  imports: [],
  template: ` <p>baz works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './baz.component.css'
})
export class BazComponent {}
