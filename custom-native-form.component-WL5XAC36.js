import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  afterRenderEffect,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/custom-native-form/digit-input/digit-input.component.ts
var _c0 = ["*"];
var DigitInputComponent = class _DigitInputComponent {
  // _ = afterRenderEffect(() => {
  //   const elm = this.elm;
  //   const digits = this.digits();
  //   if (elm.digits !== digits) {
  //     elm.digits = digits;
  //   }
  // });
  constructor() {
    this.elm = inject(ElementRef).nativeElement;
    this.digits = input(
      4,
      ...ngDevMode ? [{ debugName: "digits" }] : (
        /* istanbul ignore next */
        []
      )
    );
    if (typeof customElements !== "undefined") {
      if (!customElements.get("digit-input")) {
        customElements.define("digit-input", DigitInput);
      }
    }
  }
  static {
    this.\u0275fac = function DigitInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DigitInputComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DigitInputComponent, selectors: [["digit-input", "name", "", "value", ""]], inputs: { digits: [1, "digits"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DigitInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 2.7rem;\n  aspect-ratio: 3/4;\n  text-align: center;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitInputComponent, [{
    type: Component,
    args: [{ selector: "digit-input[name][value]", imports: [], template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/custom-native-form/digit-input/digit-input.component.css */\n:host {\n  display: block;\n}\n:host form {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n}\n:host form input {\n  width: 2.7rem;\n  aspect-ratio: 3/4;\n  text-align: center;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n:host form input:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n"] }]
  }], () => [], { digits: [{ type: Input, args: [{ isSignal: true, alias: "digits", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DigitInputComponent, { className: "DigitInputComponent", filePath: "src/app/custom-native-form/digit-input/digit-input.component.ts", lineNumber: 16 });
})();
var DigitInput = class extends HTMLElement {
  static {
    this.observedAttributes = ["value"];
  }
  static {
    this.formAssociated = true;
  }
  #localName = "digit-input";
  #form = document.createElement("form");
  #digits = 4;
  set digits(value) {
    if (+value !== this.#digits) {
      this.#digits = +value;
      this.render();
    }
  }
  get digits() {
    return this.#digits;
  }
  #internals;
  #value = "";
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
    const values = Array.from(this.#form.querySelectorAll("input")).map((i) => i.value);
    if (values.some((i) => i < "0" || i > "9")) {
      this.#internals.setValidity({ badInput: true }, "Please enter only numbers");
      return false;
    } else {
      this.#internals.setValidity({});
      return true;
    }
  }
  connectedCallback() {
    const form = this.#form;
    this.onfocus = (e) => {
      const inputs = Array.from(form.querySelectorAll("input"));
      for (const i of inputs) {
        const val = i.value;
        if (val < "0" || val > "9") {
          i.focus();
          break;
        }
      }
    };
    this.tabIndex = 0;
    this.appendChild(form);
    form.addEventListener("change", (e) => {
      e.preventDefault();
      const values = Array.from(form.querySelectorAll("input")).map((i) => i.value);
      this.#value = values.join("");
      this.#internals.setFormValue(this.#value);
      if (this.checkValidity()) {
        this.#internals.states.add("user-valid");
      }
      this.#internals.states.add("interacted");
      console.log("change", this.#value);
    });
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value") {
      const input2 = this.#form.querySelectorAll("input");
      const inputs = Array.from(input2);
      if (inputs.length === 0) {
        setTimeout(() => this.attributeChangedCallback(name, oldValue, newValue), 5);
      }
      const values = newValue.split("");
      inputs.forEach((input3, i) => {
        if (input3) {
          input3.value = values[i] ?? "";
        }
      });
      this.checkValidity();
    }
    if (name === "digits") {
      this.digits = newValue;
    }
  }
  render() {
    this.#form.innerHTML = "";
    const digits = this.#digits;
    for (let i = 0; i < digits; i++) {
      const input2 = document.createElement("input");
      input2.type = "text";
      input2.name = `${this.#name}-${i}`;
      input2.maxLength = 1;
      input2.autocomplete = "off";
      input2.inputMode = "numeric";
      this.#form.appendChild(input2);
    }
  }
};

// src/app/custom-native-form/digits/digits.component.ts
function DigitsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 1);
    \u0275\u0275domListener("change", function DigitsComponent_For_1_Template_input_change_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update());
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const val_r3 = ctx.$implicit;
    \u0275\u0275domProperty("value", \u0275\u0275interpolate(val_r3));
  }
}
var SignalFormController = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.internals = this?.attachInternals?.();
  }
  static {
    this.observedAttributes = ["value"];
  }
  static {
    this.formAssociated = true;
  }
};
var DigitsComponent = class _DigitsComponent extends SignalFormController {
  constructor() {
    super(...arguments);
    this.#digits = signal(
      4,
      ...ngDevMode ? [{ debugName: "#digits" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.digits = 4;
    this.#value = signal(
      "",
      ...ngDevMode ? [{ debugName: "#value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = "";
    this.elm = inject(ElementRef, { optional: true })?.nativeElement;
    this.values = computed(
      () => {
        const digits = this.#digits();
        let value = this.#value();
        if (value.length > digits) {
          console.warn(`value is longer than digits, truncated to first ${digits} digits`);
          value = value.slice(0, digits);
        }
        if (value.length < digits) {
          console.warn(`value is shorter than digits, padded to ${digits} digits`);
          value = value.padStart(digits, "0");
        }
        return value.split("");
      },
      ...ngDevMode ? [{ debugName: "values" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tabIndex = 0;
    this.onfocus = (ev) => {
    };
    this._ = afterRenderEffect(() => {
      console.log(this.name);
    });
  }
  #digits;
  #value;
  get value() {
    return this.#value();
  }
  set value(value) {
    console.log("set value", value);
    this.#value.set(value);
  }
  update() {
    const inputs = this.elm?.querySelectorAll("input") || [];
    let value = "";
    for (const input2 of Array.from(inputs)) {
      value += input2.value;
    }
    this.internals.setFormValue(value);
    this.#value.set(value);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value") {
      this.#value.set(newValue);
    }
    if (name === "name") {
      this.name = newValue;
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DigitsComponent_BaseFactory;
      return function DigitsComponent_Factory(__ngFactoryType__) {
        return (\u0275DigitsComponent_BaseFactory || (\u0275DigitsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DigitsComponent)))(__ngFactoryType__ || _DigitsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DigitsComponent, selectors: [["se-digits"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, consts: [["type", "text", "maxlength", "1", "inputmode", "numeric", 3, "value"], ["type", "text", "maxlength", "1", "inputmode", "numeric", 3, "change", "value"]], template: function DigitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, DigitsComponent_For_1_Template, 1, 2, "input", 0, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.values());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n}\ninput[_ngcontent-%COMP%] {\n  width: 2.7rem;\n  aspect-ratio: 3/4;\n  text-align: center;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitsComponent, [{
    type: Component,
    args: [{ selector: "se-digits", imports: [], template: `@for (val of values(); track $index) {
    <input
      type="text"
      value="{{ val }}"
      maxlength="1"
      inputmode="numeric"
      (change)="update()"
    />
  }`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/custom-native-form/digits/digits.component.css */\n:host {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n}\ninput {\n  width: 2.7rem;\n  aspect-ratio: 3/4;\n  text-align: center;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\ninput:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DigitsComponent, { className: "DigitsComponent", filePath: "src/app/custom-native-form/digits/digits.component.ts", lineNumber: 41 });
})();
if (typeof customElements !== "undefined") {
  if (!customElements.get("se-digits")) {
    customElements.define("se-digits", DigitsComponent);
  }
}

// src/app/custom-native-form/custom-native-form.component.ts
var CustomNativeFormComponent = class _CustomNativeFormComponent {
  submit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.log("Form submitted:", formData);
  }
  invalidate(event) {
    const elm = event?.target;
    const div = elm?.closest("div");
    div?.state.add("user-invalid", "true");
    console.log("div", div);
  }
  static {
    this.\u0275fac = function CustomNativeFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomNativeFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomNativeFormComponent, selectors: [["se-custom-native-form"]], decls: 27, vars: 0, consts: [["div", ""], [3, "submit"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", "value", "sander"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "value", "sander@email.com"], ["for", "code"], ["name", "code", "value", "0123", "digits", "7"], ["for", "code1"], ["name", "code1", "value", "012", "digits", "3"], ["type", "submit", "value", "Submit"], [3, "click"]], template: function CustomNativeFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "custom-native-form sample!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 1);
        \u0275\u0275listener("submit", function CustomNativeFormComponent_Template_form_submit_2_listener($event) {
          return ctx.submit($event);
        });
        \u0275\u0275elementStart(3, "label", 2)(4, "span");
        \u0275\u0275text(5, "Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "input", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "label", 4)(8, "span");
        \u0275\u0275text(9, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "label", 6)(12, "span");
        \u0275\u0275text(13, "Code:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "digit-input", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 8)(16, "span");
        \u0275\u0275text(17, "Code-1:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "se-digits", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "label");
        \u0275\u0275element(20, "span")(21, "input", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", null, 0);
        \u0275\u0275text(24, " data-thingie ");
        \u0275\u0275elementStart(25, "button", 11);
        \u0275\u0275listener("click", function CustomNativeFormComponent_Template_button_click_25_listener($event) {
          return ctx.invalidate($event);
        });
        \u0275\u0275text(26, "invalidate");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [DigitInputComponent, DigitsComponent], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  padding: var(--size-2);\n}\nh1[_ngcontent-%COMP%] {\n  max-inline-size: unset;\n}\ninput[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  margin: 0;\n}\nform[_ngcontent-%COMP%] {\n  max-inline-size: 25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel[_ngcontent-%COMP%]:has(:user-invalid), \nlabel[_ngcontent-%COMP%]:has(:invalid):has(:state(interacted)) {\n  border: 2px solid red;\n}\n:is(label[_ngcontent-%COMP%]:has(:user-invalid), label[_ngcontent-%COMP%]:has(:invalid):has(:state(interacted)))    > span[_ngcontent-%COMP%]:after {\n  display: inline-block;\n  content: "*";\n  color: red;\n}', "\ndiv[_ngcontent-%COMP%] {\n  padding: var(--size2);\n  color: green;\n  width: 10rem;\n  margin: 1rem;\n  padding: 0.5rem;\n  border: 1px solid green;\n}\ndiv[_ngcontent-%COMP%]:user-invalid {\n  color: red;\n  border: 1px solid red;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomNativeFormComponent, [{
    type: Component,
    args: [{ selector: "se-custom-native-form", imports: [DigitInputComponent, DigitsComponent], template: `
    <h1>custom-native-form sample!</h1>
    <form (submit)="submit($event)">
      <label for="name">
        <span>Name:</span>
        <input type="text" id="name" name="name" required value="sander" />
      </label>
      <label for="email">
        <span>Email:</span>
        <input
          type="email"
          id="email"
          name="email"
          required
          value="sander@email.com"
        />
      </label>
      <label for="code">
        <span>Code:</span>
        <digit-input name="code" value="0123" digits="7" />
      </label>
      <label for="code1">
        <span>Code-1:</span>
        <se-digits name="code1" value="012" digits="3" />
      </label>
      <label>
        <span></span>
        <input type="submit" value="Submit" />
      </label>
    </form>
    <div #div>
      data-thingie

      <button (click)="invalidate($event)">invalidate</button>
    </div>
    <style>
      div {
        padding: var(--size2);
        color: green;
        width: 10rem;
        margin: 1rem;
        padding: 0.5rem;
        border: 1px solid green;
      }
      div:user-invalid {
        color: red;
        border: 1px solid red;
      }
    </style>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/custom-native-form/custom-native-form.component.css */\n:host {\n  display: block;\n  padding: var(--size-2);\n}\nh1 {\n  max-inline-size: unset;\n}\ninput,\nlabel {\n  margin: 0;\n}\nform {\n  max-inline-size: 25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel:has(:user-invalid),\nlabel:has(:invalid):has(:state(interacted)) {\n  border: 2px solid red;\n}\n:is(label:has(:user-invalid), label:has(:invalid):has(:state(interacted))) > span:after {\n  display: inline-block;\n  content: "*";\n  color: red;\n}\n', "/* angular:styles/component:css;e5fe56030460ca0ca19d1ae4f4b0a62bef0582d9d30a1707d0b33771b2dae609;/home/runner/work/Samples/Samples/src/app/custom-native-form/custom-native-form.component.ts */\ndiv {\n  padding: var(--size2);\n  color: green;\n  width: 10rem;\n  margin: 1rem;\n  padding: 0.5rem;\n  border: 1px solid green;\n}\ndiv:user-invalid {\n  color: red;\n  border: 1px solid red;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomNativeFormComponent, { className: "CustomNativeFormComponent", filePath: "src/app/custom-native-form/custom-native-form.component.ts", lineNumber: 62 });
})();
export {
  CustomNativeFormComponent
};
