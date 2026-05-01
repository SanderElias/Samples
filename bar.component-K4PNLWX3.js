import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/dyn-route/bar/bar.component.ts
var BarComponent = class _BarComponent {
  static {
    this.\u0275fac = function BarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarComponent, selectors: [["se-bar"]], decls: 2, vars: 0, template: function BarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "bar works!");
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarComponent, [{
    type: Component,
    args: [{ selector: "se-bar", imports: [], template: ` <p>bar works!</p> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/dyn-route/bar/bar.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarComponent, { className: "BarComponent", filePath: "src/app/dyn-route/bar/bar.component.ts", lineNumber: 10 });
})();
export {
  BarComponent
};
