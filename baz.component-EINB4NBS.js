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

// src/app/dyn-route/baz/baz.component.ts
var BazComponent = class _BazComponent {
  static {
    this.\u0275fac = function BazComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BazComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BazComponent, selectors: [["se-baz"]], decls: 2, vars: 0, template: function BazComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "baz works!");
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BazComponent, [{
    type: Component,
    args: [{ selector: "se-baz", imports: [], template: ` <p>baz works!</p> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/dyn-route/baz/baz.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BazComponent, { className: "BazComponent", filePath: "src/app/dyn-route/baz/baz.component.ts", lineNumber: 10 });
})();
export {
  BazComponent
};
