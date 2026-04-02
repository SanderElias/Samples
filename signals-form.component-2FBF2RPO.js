import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/signals-form/signals-form.component.ts
var SignalsFormsComponent = class _SignalsFormsComponent {
  constructor() {
    this.fullName = inject(SignalsFormSampleService).fullName;
    this.vm = inject(SignalsFormSampleService).vm;
  }
  static {
    this.\u0275fac = function SignalsFormsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignalsFormsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalsFormsComponent, selectors: [["se-symbols-form"]], decls: 8, vars: 3, consts: [["type", "text", 3, "input", "value"]], template: function SignalsFormsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h3");
        \u0275\u0275text(1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "label");
        \u0275\u0275text(3, "First Name ");
        \u0275\u0275domElementStart(4, "input", 0);
        \u0275\u0275domListener("input", function SignalsFormsComponent_Template_input_input_4_listener($event) {
          return ctx.vm().firstName.set($event.target.value);
        });
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(5, "label");
        \u0275\u0275text(6, "Last Name ");
        \u0275\u0275domElementStart(7, "input", 0);
        \u0275\u0275domListener("input", function SignalsFormsComponent_Template_input_input_7_listener($event) {
          return ctx.vm().lastName.set($event.target.value);
        });
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1('Symbol Form for "', ctx.fullName(), '"');
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("value", ctx.vm().firstName());
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("value", ctx.vm().lastName());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalsFormsComponent, [{
    type: Component,
    args: [{ selector: "se-symbols-form", imports: [], template: `
    <h3>Symbol Form for "{{ fullName() }}"</h3>
    <label
      >First Name
      <input
        type="text"
        [value]="vm().firstName()"
        (input)="vm().firstName.set($any($event).target.value)"
      />
    </label>
    <label
      >Last Name
      <input
        type="text"
        [value]="vm().lastName()"
        (input)="vm().lastName.set($any($event).target.value)"
      />
    </label>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signals-form/signals-form.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalsFormsComponent, { className: "SignalsFormsComponent", filePath: "src/app/signals-form/signals-form.component.ts", lineNumber: 36 });
})();
var SignalsFormSampleService = class _SignalsFormSampleService {
  constructor() {
    this.vm = signal(
      {
        firstName: signal("Sander"),
        lastName: signal("Elias")
      },
      ...ngDevMode ? [{ debugName: "vm" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fullName = computed(
      () => `${this.vm().firstName()} ${this.vm().lastName()}`.trim(),
      ...ngDevMode ? [{ debugName: "fullName" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      console.log(`full name: "${this.fullName()}"`);
    });
  }
  static {
    this.\u0275fac = function SignalsFormSampleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignalsFormSampleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignalsFormSampleService, factory: _SignalsFormSampleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalsFormSampleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
export {
  SignalsFormSampleService,
  SignalsFormsComponent
};
