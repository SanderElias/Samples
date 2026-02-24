import { afterRenderEffect, computed, Directive, DOCUMENT, ElementRef, inject, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';

/**
 * Directive to show validation errors in the DOM.
 * It listens for changes in the control's errors and updates the DOM accordingly.
 * it will put an list with errors into the parent element of the input element.
 * It will also set the custom validity of the input element to the error messages joined by a comma.
 */
@Directive({
  selector: '[showError]'
})
export class ShowErrorsInDom {
  showError = input('');
  #control = inject(FormField);
  #doc = inject(DOCUMENT);

  #inputElement: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement = inject(ElementRef).nativeElement;
  #parentElement = this.#inputElement.parentElement;
  #errorContainer = this.#doc.createElement('div');

  #ErrorMessages = computed(() => {
    const errors = this.#control.state().errors();
    if (!errors || errors.length === 0) return [];
    // TODO: do we want default messages for build-in validations that don't provide messages?
    return errors.map(err => err?.message ?? JSON.stringify(err));
  });

  #touched = computed(() => this.#control.state().touched());

  constructor() {
    // we only need to do this once, so do it in the constructor
    this.#errorContainer.classList.add('error-messages');

    // start listening for changes in the errors, and keep the DOM in sync
    afterRenderEffect(() => {
      const messages = this.#ErrorMessages();
      const a = this.findNgContentAttributes();
      if (a) {
        // re-apply the attribute to the error container, so the styles are applied correctly
        this.#errorContainer.setAttribute(a, '');
      }

      if (messages.length > 0) {
        this.renderErrors(messages);
        this.attachErrorContainer();
        // this.#inputElement.setCustomValidity(messages.join(', '));
      } else {
        // this.#inputElement.setCustomValidity('');
        this.#errorContainer.remove();
      }
    });

    afterRenderEffect(() => {
      if (this.#touched()) {
        this.#inputElement.classList.add('se-touched');
      } else {
        this.#inputElement.classList.remove('se-touched');
      }
    })
  }

  findNgContentAttributes() {
    let maxIterations = 5;
    let parent = this.#parentElement;
    const attrs = this.#inputElement.attributes;
    const ngA = Array.from(attrs).find(attr => attr.name.startsWith('_ngcontent-'));
    return ngA?.name || '';
  }

  /**
   * Renders the error messages into the error container.
   */
  private renderErrors(messages: string[]) {
    this.#errorContainer.innerHTML = '';

    if (this.showError()) {
      this.#errorContainer.innerHTML = `<span class="error">${this.showError()}</span>`;
    }

    if (messages.length > 0) {
      const ul = this.#doc.createElement('ul');
      messages.forEach(msg => {
        const li = this.#doc.createElement('li');
        li.innerText = msg;
        ul.appendChild(li);
      });
      this.#errorContainer.appendChild(ul);
    }
  }

  /**
   * Attaches the error container to the parent element if it's not already attached.
   */
  private attachErrorContainer() {
    if (this.#errorContainer.parentElement !== this.#parentElement) {
      this.#parentElement?.appendChild(this.#errorContainer);
    }
  }
}
