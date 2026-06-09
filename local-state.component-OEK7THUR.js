import {
  RouterOutlet
} from "./chunk-2RAZ6O6I.js";
import "./chunk-5FLPQWEU.js";
import "./chunk-ZJWOAI6A.js";
import "./chunk-WFNGJKE2.js";
import "./chunk-LIYAPZ72.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-ZOLZPPMV.js";
import "./chunk-I7IR7MPC.js";

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
