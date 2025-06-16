import { Component, input, model } from '@angular/core';

@Component({
  selector: 'se-toggle',
  imports: [],
  template: `
  <label>
    <input type="checkbox" [checked]="value()" (change)="value.set(!value())" />
    <span class='slider-btn'></span>
    <span>{{ value() ? toggleOnText() : toggleOffText() }}</span>
  </label>

  `,
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  toggleOnText = input('Aan')
  toggleOffText = input('Uit');
  value = model.required<boolean>();


}
