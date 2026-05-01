import {
  NgComponentOutlet
} from "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/lazy-component/lazy-component.component.ts
var LazyComponentComponent = class _LazyComponentComponent {
  constructor() {
    this.steps = [
      { file: () => import("./sample-one.component-CJT7EL3U.js") },
      { file: () => import("./sample-two.component-HGJKQIOB.js") },
      { file: () => import("./sample-three.component-IUKXVOQQ.js") }
    ];
    this.currentStep = 2;
    this._ = afterNextRender(() => this.update(this.currentStep));
  }
  async update(toStep) {
    const step = this.steps[toStep];
    const { default: component } = await step.file();
    this.component = component;
  }
  static {
    this.\u0275fac = function LazyComponentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LazyComponentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LazyComponentComponent, selectors: [["app-lazy-component"]], decls: 4, vars: 2, consts: [["type", "range", 3, "change", "max"], [3, "ngComponentOutlet"]], template: function LazyComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "lazy-component works!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "input", 0);
        \u0275\u0275listener("change", function LazyComponentComponent_Template_input_change_2_listener($event) {
          return ctx.update($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainer(3, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("max", ctx.steps.length - 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngComponentOutlet", ctx.component);
      }
    }, dependencies: [NgComponentOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyComponentComponent, [{
    type: Component,
    args: [{ selector: "app-lazy-component", changeDetection: ChangeDetectionStrategy.OnPush, imports: [NgComponentOutlet], template: '<p>lazy-component works!</p>\n\n<input\n  type="range"\n  [max]="steps.length - 1"\n  (change)="update($any($event.target).value)"\n/>\n\n<ng-container [ngComponentOutlet]="component"></ng-container>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LazyComponentComponent, { className: "LazyComponentComponent", filePath: "src/app/lazy-component/lazy-component.component.ts", lineNumber: 15 });
})();
export {
  LazyComponentComponent
};
