import { afterRenderEffect, Directive, DOCUMENT, ElementRef, inject, input } from '@angular/core';
import { Control } from '@angular/forms/signals';

@Directive({
  selector: '[showError]'
})
export class UpdateNativeErrorsDirective {
  showError = input('');

  control = inject(Control);
  doc = inject(DOCUMENT);

  elm: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement = inject(ElementRef).nativeElement;
  parent = this.elm.parentElement;
  errElm = this.doc.createElement('div');

  _ = afterRenderEffect(() => {
    const errors = this.control.state().errors();
    if (errors && errors.length > 0) {
      const message = errors.reduce((acc, err) => {
        if (err?.message) {
          acc.push(err.message);
        } else {
          acc.push(JSON.stringify(err));
        }
        return acc;
      }, [] as string[]);
      console.log({ message });
      if (this.showError()) {
        this.errElm.innerHTML = `<span class="error">${this.showError()}</span>`;
      } else {
        this.errElm.innerHTML = '';
      }
      const ul = this.doc.createElement('ul');
      message.forEach(m => {
        const li = this.doc.createElement('li');
        li.innerText = m;
        ul.appendChild(li);
      });
      this.errElm.appendChild(ul);
      this.errElm.classList.add('error-messages');
      if (this.errElm.parentElement !== this.parent) {
        this.parent?.appendChild(this.errElm);
      }

      this.elm.setCustomValidity(message.join(', '));
      this.elm.title = message.join(', ');
    } else {
      this.elm.setCustomValidity('');
      this.elm.title = '';
      this.errElm.remove();
    }
  });
}
