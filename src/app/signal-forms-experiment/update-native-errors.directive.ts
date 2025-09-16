import { afterRenderEffect, Directive, ElementRef, input, inject } from '@angular/core';
import type { Field } from '@angular/forms/signals';
import { after } from 'node:test';

@Directive({
  selector: 'input [control], select[control], textarea[control]',
})
export class UpdateNativeErrorsDirective {
  control = input.required<Field<unknown>>()
  elm: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement = inject(ElementRef).nativeElement;

  _ = afterRenderEffect(() => {
    const ctrl = this.control()
    console.dir(ctrl().errors());

    const errors = ctrl().errors();
    console.log('errors', errors);
    if (errors && errors.length > 0) {
      const firstKey = Object.keys(errors)[0];
      const firstError = errors[firstKey];
      const message = firstError?.message || (typeof firstError === 'string' ? firstError : 'Invalid value');
      console.log('setting error', message, firstKey, firstError);
      this.elm.setCustomValidity(message);
      this.elm.title = message;
    } else {
      this.elm.setCustomValidity('');
      this.elm.title = '';
    }

  });

}
