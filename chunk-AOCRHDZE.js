import {
  FormField
} from "./chunk-LIXZKSRG.js";
import {
  DOCUMENT,
  Directive,
  ElementRef,
  Input,
  afterRenderEffect,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-4YMCON7N.js";

// src/app/signal-forms-experiment/util/show-errors-in-dom.directive.ts
var ShowErrorsInDom = class _ShowErrorsInDom {
  #control;
  #doc;
  #inputElement;
  #parentElement;
  #errorContainer;
  #ErrorMessages;
  #touched;
  constructor() {
    this.showError = input(
      "",
      ...ngDevMode ? [{ debugName: "showError" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#control = inject(FormField);
    this.#doc = inject(DOCUMENT);
    this.#inputElement = inject(ElementRef).nativeElement;
    this.#parentElement = this.#inputElement.parentElement;
    this.#errorContainer = this.#doc.createElement("div");
    this.#ErrorMessages = computed(
      () => {
        const errors = this.#control.state().errors();
        if (!errors || errors.length === 0)
          return [];
        return errors.map((err) => err?.message ?? JSON.stringify(err));
      },
      ...ngDevMode ? [{ debugName: "#ErrorMessages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#touched = computed(
      () => this.#control.state().touched(),
      ...ngDevMode ? [{ debugName: "#touched" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#errorContainer.classList.add("error-messages");
    afterRenderEffect(() => {
      const messages = this.#ErrorMessages();
      const a = this.findNgContentAttributes();
      if (a) {
        this.#errorContainer.setAttribute(a, "");
      }
      const hasCustomValidity = this.#inputElement?.setCustomValidity !== void 0;
      if (messages.length > 0) {
        this.renderErrors(messages);
        this.attachErrorContainer();
        hasCustomValidity && this.#inputElement.setCustomValidity(messages.join(", "));
      } else {
        hasCustomValidity && this.#inputElement.setCustomValidity("");
        this.#errorContainer.remove();
      }
    });
    afterRenderEffect(() => {
      if (this.#touched()) {
        this.#inputElement.classList.add("se-touched");
      } else {
        this.#inputElement.classList.remove("se-touched");
      }
    });
  }
  findNgContentAttributes() {
    let maxIterations = 5;
    let parent = this.#parentElement;
    const attrs = this.#inputElement.attributes;
    const ngA = Array.from(attrs).find((attr) => attr.name.startsWith("_ngcontent-"));
    return ngA?.name || "";
  }
  /**
   * Renders the error messages into the error container.
   */
  renderErrors(messages) {
    this.#errorContainer.innerHTML = "";
    if (this.showError()) {
      this.#errorContainer.innerHTML = `<span class="error">${this.showError()}</span>`;
    }
    if (messages.length > 0) {
      const ul = this.#doc.createElement("ul");
      messages.forEach((msg) => {
        const li = this.#doc.createElement("li");
        li.innerText = msg;
        ul.appendChild(li);
      });
      this.#errorContainer.appendChild(ul);
    }
  }
  /**
   * Attaches the error container to the parent element if it's not already attached.
   */
  attachErrorContainer() {
    if (this.#errorContainer.parentElement !== this.#parentElement) {
      this.#parentElement?.appendChild(this.#errorContainer);
    }
  }
  static {
    this.\u0275fac = function ShowErrorsInDom_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowErrorsInDom)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ShowErrorsInDom, selectors: [["", "showError", ""]], inputs: { showError: [1, "showError"] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowErrorsInDom, [{
    type: Directive,
    args: [{
      selector: "[showError]"
    }]
  }], () => [], { showError: [{ type: Input, args: [{ isSignal: true, alias: "showError", required: false }] }] });
})();

export {
  ShowErrorsInDom
};
