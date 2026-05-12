import {
  RouterOutlet
} from "./chunk-XBJ54SZG.js";
import "./chunk-MKWLWAJZ.js";
import "./chunk-NMBS7RAC.js";
import "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/local-state/local-state.component.ts
var LocalStateComponent = class _LocalStateComponent {
  static {
    this.\u0275fac = function LocalStateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocalStateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocalStateComponent, selectors: [["app-local-state"]], decls: 1, vars: 0, template: function LocalStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStateComponent, [{
    type: Component,
    args: [{ selector: "app-local-state", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterOutlet], template: "<router-outlet></router-outlet>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocalStateComponent, { className: "LocalStateComponent", filePath: "src/app/local-state/local-state.component.ts", lineNumber: 11 });
})();
export {
  LocalStateComponent
};
