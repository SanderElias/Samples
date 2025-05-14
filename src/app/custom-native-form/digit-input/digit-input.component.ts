import { afterRenderEffect, Component, ElementRef, inject, input } from '@angular/core';
import { set } from 'idb-keyval';

@Component({
  selector: 'digit-input[name][value]',
  imports: [],
  template: `<ng-content />`,
  styleUrl: './digit-input.component.css'
})
export class DigitInputComponent {
  elm = inject(ElementRef).nativeElement as DigitInput;
  digits = input<string | number>(4);

  // _ = afterRenderEffect(() => {
  //   const elm = this.elm;
  //   const digits = this.digits();
  //   if (elm.digits !== digits) {
  //     elm.digits = digits;
  //   }
  // });
  constructor() {
    if (typeof customElements !== 'undefined') {
      if (!customElements.get('digit-input')) {
        customElements.define('digit-input', DigitInput);
      }
    }
  }
}

/**
 * Note: this is a POC, and a load of corners are cut.
 * It only shows that you can integrate custom validation
 * in custom form components.
 */

class DigitInput extends HTMLElement {
  static observedAttributes = ['value'] as const; // we probably need a couple more here.
  static formAssociated = true;
  #localName = 'digit-input' as const;
  #form = document.createElement('form');

  #digits: number = 4;
  set digits(value: number | string) {
    if (+value !== this.#digits) {
      this.#digits = +value;
      this.render();
    }
  }
  get digits() {
    return this.#digits;
  }

  #internals: ElementInternals;
  #value = '';
  #name = ``;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  // Form controls usually expose a "value" property
  get value() {
    return this.#value;
  }
  set value(v) {
    this.#value = v;
  }

  // The following properties and methods aren't strictly required,
  // but browser-level form controls provide them. Providing them helps
  // ensure consistency with browser-provided controls.
  get form() {
    return this.#internals.form;
  }
  get type() {
    return this.#localName;
  }
  get validity() {
    return this.checkValidity();
  }
  get validationMessage() {
    return this.#internals.validationMessage;
  }
  get willValidate() {
    return this.#internals.willValidate;
  }

  checkValidity() {
    const values = Array.from(this.#form.querySelectorAll('input')).map(i => i.value);
    if (values.some(i => i < '0' || i > '9')) {
      this.#internals.setValidity({ badInput: true }, 'Please enter only numbers');
      return false;
    } else {
      this.#internals.setValidity({});
      return true;
    }
  }

  connectedCallback() {
    // const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });
    const form = this.#form;
    this.onfocus = e => {
      const inputs = Array.from(form.querySelectorAll('input'));
      for (const i of inputs) {
        const val = i.value;
        if (val < '0' || val > '9') {
          i.focus();
          break;
        }
      }
    };
    this.tabIndex = 0;
    this.appendChild(form);
    // This is a terrible shortcut. for non-sample behavior this should match more what normal form elements do.
    form.addEventListener('change', e => {
      e.preventDefault();
      const values = Array.from(form.querySelectorAll('input')).map(i => i.value);
      this.#value = values.join('');
      this.#internals.setFormValue(this.#value);
      if (this.checkValidity()) {
        // @ts-expect-error
        this.#internals.states.add('user-valid');
      }
      // this is a workaround for this issue: https://github.com/whatwg/html/issues/9639
      // @ts-expect-error
      this.#internals.states.add('interacted');
      console.log('change', this.#value);
    });
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'value') {
      const input = this.#form.querySelectorAll('input');
      const inputs = Array.from(input);
      if (inputs.length === 0) {
        setTimeout(() => this.attributeChangedCallback(name, oldValue, newValue), 5);
      }
      const values = newValue.split('');
      inputs.forEach((input, i) => {
        if (input) {
          input.value = values[i] ?? '';
        }
      });
      this.checkValidity();
    }
    if (name === 'digits') {
      this.digits = newValue;
    }
  }

  render() {
    this.#form.innerHTML = '';
    const digits = this.#digits;
    for (let i = 0; i < digits; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = `${this.#name}-${i}`;
      input.maxLength = 1;
      input.autocomplete = 'off';
      input.inputMode = 'numeric';
      this.#form.appendChild(input);
    }
  }
}
