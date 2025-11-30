import { afterRenderEffect, Component, computed, ElementRef, inject,signal } from '@angular/core';

class SignalFormController extends HTMLElement {
  static observedAttributes = ['value'] as const; // we probably need a couple more here.
  internals: ElementInternals = this?.attachInternals?.();
  static formAssociated = true;

  // constructor() {
  //   super();
  //   // guard for ssr
  //   if (typeof customElements === 'undefined') {
  //     return;
  //   }
  //   this.internals = this.attachInternals();
  // }
}

@Component({
  selector: 'se-digits',
  imports: [],
  template: `@for (val of values(); track $index) {
    <input type="text" value="{{ val }}" maxlength="1" inputmode="numeric" (change)="update()" />
  }`,
  styleUrl: './digits.component.css'
})
export class DigitsComponent extends SignalFormController {
  #digits = signal(4);
  digits = 4;
  #value = signal('');
  name = '';
  get value() {
    return this.#value();
  }
  set value(value: string) {
    console.log('set value', value);
    this.#value.set(value);
  }
  elm = inject(ElementRef, { optional: true })?.nativeElement as DigitsComponent;
  values = computed(() => {
    const digits = this.#digits();
    let value = this.#value();
    if (value.length > digits) {
      console.warn(`value is longer than digits, truncated to first ${digits} digits`);
      value = value.slice(0, digits);
    }
    if (value.length < digits) {
      console.warn(`value is shorter than digits, padded to ${digits} digits`);
      value = value.padStart(digits, '0');
    }
    return value.split('');
  });
  tabIndex = 0; // this is needed to make the element focusable
  onfocus = (ev: FocusEvent) => {};

  update() {
    const inputs = this.elm?.querySelectorAll('input') || [];
    let value = '';
    for (const input of Array.from(inputs)) {
      value += input.value;
    }
    this.internals.setFormValue(value);
    this.#value.set(value);
  }

  _ = afterRenderEffect(() => {
    // @ts-ignore
    console.log(this.name);
  });

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'value') {
      this.#value.set(newValue);
    }
    if (name === 'name') {
      this.name = newValue;
    }
  }
}
// this can be compiled away:
if (typeof customElements !== 'undefined') {
  if (!customElements.get('se-digits')) {
    customElements.define('se-digits', DigitsComponent);
  }
}
