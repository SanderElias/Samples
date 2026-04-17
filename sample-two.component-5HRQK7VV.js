import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// src/app/lazy-component/sample-two/sample-two.component.ts
var SampleTwoComponent = class _SampleTwoComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function SampleTwoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SampleTwoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SampleTwoComponent, selectors: [["app-sample-two"]], decls: 2, vars: 0, template: function SampleTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "sample-two works!");
        \u0275\u0275domElementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SampleTwoComponent, [{
    type: Component,
    args: [{ selector: "app-sample-two", changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>sample-two works!</p>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SampleTwoComponent, { className: "SampleTwoComponent", filePath: "src/app/lazy-component/sample-two/sample-two.component.ts", lineNumber: 10 });
})();
export {
  SampleTwoComponent as default
};
