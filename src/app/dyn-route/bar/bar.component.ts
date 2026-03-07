import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'se-bar',
  imports: [],
  template: ` <p>bar works!</p> `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bar.component.css'
})
export class BarComponent {}
