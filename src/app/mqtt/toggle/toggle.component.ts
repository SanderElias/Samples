import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'se-toggle',
  imports: [],
  template: `
  <label>
    <input type="checkbox" [checked]="value()" (change)="valueChange.emit(!value())" />
    <span class='slider-btn'></span>
    <span>{{ value() ? toggleOnText() : toggleOffText() }}</span>
  </label>

  `,
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  toggleOnText = input('Aan')
  toggleOffText = input('Uit');
  value = input.required<boolean>();
  valueChange = output<boolean>();
}
