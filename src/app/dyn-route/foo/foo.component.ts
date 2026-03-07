import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'se-foo',
  imports: [],
  template: ` <p>foo works!</p> `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './foo.component.css'
})
export class FooComponent {}
