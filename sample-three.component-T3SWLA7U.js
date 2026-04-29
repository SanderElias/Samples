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

// src/app/lazy-component/sample-three/sample-three.component.ts
var SampleThreeComponent = class _SampleThreeComponent {
  static {
    this.\u0275fac = function SampleThreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SampleThreeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SampleThreeComponent, selectors: [["app-sample-three"]], decls: 2, vars: 0, template: function SampleThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "sample-three works!");
        \u0275\u0275domElementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SampleThreeComponent, [{
    type: Component,
    args: [{ selector: "app-sample-three", changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>sample-three works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SampleThreeComponent, { className: "SampleThreeComponent", filePath: "src/app/lazy-component/sample-three/sample-three.component.ts", lineNumber: 9 });
})();
export {
  SampleThreeComponent as default
};
