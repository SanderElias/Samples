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

// src/app/dyn-route/foo/foo.component.ts
var FooComponent = class _FooComponent {
  static {
    this.\u0275fac = function FooComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooComponent, selectors: [["se-foo"]], decls: 2, vars: 0, template: function FooComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "foo works!");
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooComponent, [{
    type: Component,
    args: [{ selector: "se-foo", imports: [], template: ` <p>foo works!</p> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/dyn-route/foo/foo.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooComponent, { className: "FooComponent", filePath: "src/app/dyn-route/foo/foo.component.ts", lineNumber: 10 });
})();
export {
  FooComponent
};
