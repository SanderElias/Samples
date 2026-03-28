import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'se-foo',
  imports: [],
  template: ` <p>foo works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './foo.component.css'
})
export class FooComponent {}
