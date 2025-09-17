import { afterRenderEffect, Directive, ElementRef, inject } from '@angular/core';
import { Control } from '@angular/forms/signals';

@Directive({
  selector: '[showError]',
})
export class UpdateNativeErrorsDirective {
  // control = input.required<Field<unknown>>()
  control = inject(Control);
  elm: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement = inject(ElementRef).nativeElement;

  _ = afterRenderEffect(() => {
    const errors = this.control.state().errors();
    if (errors && errors.length > 0) {
      const firstKey = Object.keys(errors)[0];
      const firstError = errors[firstKey];
      const message = firstError?.message || (typeof firstError === 'string' ? firstError : 'Invalid value');
      console.log({ firstKey, firstError, message });
      this.elm.setCustomValidity(message);
      this.elm.title = message;
    } else {
      this.elm.setCustomValidity('');
      this.elm.title = '';
    }

  });

}
