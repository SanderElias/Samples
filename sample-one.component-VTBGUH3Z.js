import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/lazy-component/sample-one/sample-one.component.ts
var SampleOneComponent = class _SampleOneComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function SampleOneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SampleOneComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SampleOneComponent, selectors: [["app-sample-one"]], decls: 2, vars: 0, template: function SampleOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "sample-one works!");
        \u0275\u0275domElementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SampleOneComponent, [{
    type: Component,
    args: [{ selector: "app-sample-one", changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>sample-one works!</p>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SampleOneComponent, { className: "SampleOneComponent", filePath: "src/app/lazy-component/sample-one/sample-one.component.ts", lineNumber: 10 });
})();
export {
  SampleOneComponent as default
};
