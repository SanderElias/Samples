import {
  JsonPipe
} from "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Output,
  effect,
  inject,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LHOZ36SL.js";
import {
  __objRest
} from "./chunk-KCHQYSDT.js";

// src/app/input-host-experiment/input-host/input-host.component.ts
var InputHostComponent = class _InputHostComponent {
  constructor() {
    this.input = inject(ElementRef).nativeElement;
    this.value = model(
      "",
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = model(
      void 0,
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const input = this.input;
    effect(() => {
      const newVal = this.value();
      if (input.value !== newVal) {
        input.value = newVal;
      }
    });
    effect(() => {
      if (!input?.setCustomValidity) {
        return;
      }
      const error = Array.isArray(this.error()) ? this.error() : [this.error()].filter((e) => e !== void 0);
      if (error.length) {
        input.setCustomValidity(error.length === 1 ? error[0] : error.join(". "));
      } else {
        input.setCustomValidity("");
      }
      input.reportValidity();
      console.log(error);
    });
    input.addEventListener("input", () => {
      this.value.set(input.value);
      const _a = input.validity, { customError } = _a, HtmlErrors = __objRest(_a, ["customError"]);
      const htmlHasError = Object.values(HtmlErrors).some((v) => v);
      if (htmlHasError) {
        Object.entries(HtmlErrors).forEach(([key, value]) => {
          if (value) {
            this.error.update((errors) => (errors || []).concat(`${key} error`));
          }
        });
      } else {
        this.error.set("");
      }
    });
    input.addEventListener("invalid", (ev) => {
      ev.preventDefault();
      this.error.set(input.validationMessage);
    });
  }
  static {
    this.\u0275fac = function InputHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputHostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputHostComponent, selectors: [["input", "experiment", "", "type", "text"]], inputs: { value: [1, "value"], error: [1, "error"] }, outputs: { value: "valueChange", error: "errorChange" }, decls: 0, vars: 0, template: function InputHostComponent_Template(rf, ctx) {
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputHostComponent, [{
    type: Component,
    args: [{ selector: "input [experiment] [type=text]", imports: [], template: ``, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/input-host-experiment/input-host/input-host.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], () => [], { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }, { type: Output, args: ["errorChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputHostComponent, { className: "InputHostComponent", filePath: "src/app/input-host-experiment/input-host/input-host.component.ts", lineNumber: 17 });
})();

// src/app/input-host-experiment/input-host-experiment.component.ts
function InputHostExperimentComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const error1_r2 = \u0275\u0275readContextLet(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Error: ", error1_r2);
  }
}
var InputHostExperimentComponent = class _InputHostExperimentComponent {
  constructor() {
    this.value = signal(
      "Hello World",
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ = effect(
      () => {
        console.log("Input value changed:", this.value());
      },
      ...ngDevMode ? [{ debugName: "_" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  log(event) {
    event.preventDefault();
    console.log("Form submitted with value:", this.value());
  }
  static {
    this.\u0275fac = function InputHostExperimentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputHostExperimentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputHostExperimentComponent, selectors: [["se-input-host-experiment"]], decls: 16, vars: 8, consts: [["inp1", ""], [3, "submit"], [1, "error"], ["experiment", "", "type", "text", "required", "", 3, "valueChange", "value"], ["experiment", "", "type", "password", "required", "", 3, "valueChange", "value"], ["type", "submit", "value", "Submit"]], template: function InputHostExperimentComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Input Host Experiment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p");
        \u0275\u0275text(3, " This component is used to experiment with using input as a host. Don't try this in production! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "form", 1);
        \u0275\u0275listener("submit", function InputHostExperimentComponent_Template_form_submit_4_listener($event) {
          return ctx.log($event);
        });
        \u0275\u0275declareLet(5);
        \u0275\u0275conditionalCreate(6, InputHostExperimentComponent_Conditional_6_Template, 2, 1, "p", 2);
        \u0275\u0275elementStart(7, "input", 3, 0);
        \u0275\u0275twoWayListener("valueChange", function InputHostExperimentComponent_Template_input_valueChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 3);
        \u0275\u0275twoWayListener("valueChange", function InputHostExperimentComponent_Template_input_valueChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 4);
        \u0275\u0275twoWayListener("valueChange", function InputHostExperimentComponent_Template_input_valueChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "code")(13, "pre");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "json");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const inp1_r3 = \u0275\u0275reference(8);
        \u0275\u0275advance(5);
        const error1_r4 = \u0275\u0275storeLet(inp1_r3.error());
        \u0275\u0275advance();
        \u0275\u0275conditional(error1_r4 && error1_r4.length ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("value", ctx.value);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("value", ctx.value);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("value", ctx.value);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 6, inp1_r3));
      }
    }, dependencies: [InputHostComponent, JsonPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputHostExperimentComponent, [{
    type: Component,
    args: [{ selector: "se-input-host-experiment", imports: [InputHostComponent, JsonPipe], template: `<h1>Input Host Experiment</h1>
    <p>
      This component is used to experiment with using input as a host. Don't try
      this in production!
    </p>
    <form (submit)="log($event)">
      @let error1 = inp1.error();
      @if (error1 && error1.length) {
        <p class="error">Error: {{ error1 }}</p>
      }
      <input experiment type="text" [(value)]="value" required #inp1 />
      <input experiment type="text" [(value)]="value" required />
      <input experiment type="password" [(value)]="value" required />

      <input type="submit" value="Submit" />
    </form>
    <code>
      <pre>{{ inp1 | json }}</pre>
    </code>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/input-host-experiment/input-host-experiment.component.css */\n:host {\n  display: block;\n}\n.error {\n  color: red;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputHostExperimentComponent, { className: "InputHostExperimentComponent", filePath: "src/app/input-host-experiment/input-host-experiment.component.ts", lineNumber: 36 });
})();
export {
  InputHostExperimentComponent
};
