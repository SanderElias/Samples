import { Component, effect, ElementRef, inject, model } from '@angular/core';

@Component({
  selector: 'input [experiment] [type=text]',
  imports: [],
  template: ``,
  styleUrl: './input-host.component.css'
})
export class InputHostComponent {
  input = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;
  value = model<string>('');
  error = model<string | string[] | undefined>(undefined);


  constructor() {
    const input = this.input;
    // sync the input value with the model
    effect(() => {
      const newVal = this.value();
      if (input.value !== newVal) {
        input.value = newVal;
      }
    });
    // sync the error(s) with the input
    effect(() => {
      if (!input?.setCustomValidity) {
        return; // ssr opt out
      }
      const error = Array.isArray(this.error())
        ? (this.error() as string[])
        : [this.error() as string | undefined].filter(e => e !== undefined);
      if (error.length) {
        input.setCustomValidity(error.length === 1 ? error[0] : error.join('. '));
      } else {
        input.setCustomValidity('');
      }
      input.reportValidity(); // this will trigger the browser to show the error if there is one
      console.log(error);
    });
    input.addEventListener('input', () => {
      this.value.set(input.value);
      const {customError, ...HtmlErrors} = input.validity;
      const htmlHasError = Object.values(HtmlErrors).some(v => v);
      if (htmlHasError) {
        // if the input is invalid, we can set the error here
        Object.entries(HtmlErrors).forEach(([key, value]) => {
          if (value) {
            this.error.update(errors => (errors || []).concat(`${key} error`));
          }
        });
      } else {
        // if the input is valid, we can clear the error
        this.error.set('');
      }
    });
    input.addEventListener('invalid', ev => {
      ev.preventDefault();
      // we can set the error here, but we don't have to
      this.error.set(input.validationMessage);
      // console.log('invalid event', input.validationMessage);
    });
  }
}
