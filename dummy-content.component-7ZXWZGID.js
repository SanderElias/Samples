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

// src/app/reusable-dialog/dummy-content/dummy-content.component.ts
var DummyContentComponent = class _DummyContentComponent {
  static {
    this.\u0275fac = function DummyContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DummyContentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DummyContentComponent, selectors: [["se-dummy-content"]], decls: 2, vars: 0, template: function DummyContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "dummy-content works!");
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DummyContentComponent, [{
    type: Component,
    args: [{ selector: "se-dummy-content", imports: [], template: ` <p>dummy-content works!</p> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/reusable-dialog/dummy-content/dummy-content.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DummyContentComponent, { className: "DummyContentComponent", filePath: "src/app/reusable-dialog/dummy-content/dummy-content.component.ts", lineNumber: 10 });
})();
export {
  DummyContentComponent
};
