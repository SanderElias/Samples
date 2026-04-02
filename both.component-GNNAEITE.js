import {
  TemplateComponent
} from "./chunk-AHEPYAJL.js";
import {
  ReactiveComponent
} from "./chunk-IGUD2DU6.js";
import "./chunk-AS2UC4YV.js";
import "./chunk-UGNSKCWD.js";
import "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/rvt/both/both.component.ts
var BothComponent = class _BothComponent {
  static {
    this.\u0275fac = function BothComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BothComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BothComponent, selectors: [["se-both"]], decls: 6, vars: 0, template: function BothComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "H1");
        \u0275\u0275text(2, "Reactive vs Template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "main");
        \u0275\u0275element(4, "se-template")(5, "se-reactive");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [TemplateComponent, ReactiveComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BothComponent, [{
    type: Component,
    args: [{ selector: "se-both", imports: [TemplateComponent, ReactiveComponent], template: `
    <header><H1>Reactive vs Template</H1></header>
    <main>
      <se-template></se-template>
      <se-reactive></se-reactive>
    </main>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/rvt/both/both.component.css */\n:host {\n  display: block;\n}\nmain {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BothComponent, { className: "BothComponent", filePath: "src/app/rvt/both/both.component.ts", lineNumber: 19 });
})();
export {
  BothComponent as default
};
