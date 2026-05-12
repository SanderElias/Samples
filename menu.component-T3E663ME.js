import {
  LoggedIn
} from "./chunk-3GOW2HFT.js";
import {
  RouterLink
} from "./chunk-XBJ54SZG.js";
import "./chunk-MKWLWAJZ.js";
import "./chunk-NMBS7RAC.js";
import "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/mqtt/menu/menu.component.ts
var _c0 = () => ["./power"];
var _c1 = () => ["./list"];
function MenuComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275text(1, "stroom meter beheer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 1);
    \u0275\u0275text(3, "apparaten lijst");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
  }
}
function MenuComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", "https://auth.eliasweb.nl/ui/login?rd=" + ctx_r0.url(), \u0275\u0275sanitizeUrl);
  }
}
function MenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MenuComponent_Conditional_0_Conditional_0_Template, 4, 4)(1, MenuComponent_Conditional_0_Conditional_1_Template, 2, 1, "a", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loggenId() ? 0 : 1);
  }
}
function MenuComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
var MenuComponent = class _MenuComponent {
  constructor() {
    this.#loggedin = inject(LoggedIn);
    this.#doc = inject(DOCUMENT);
    this.url = computed(
      () => this.#doc.location.href,
      ...ngDevMode ? [{ debugName: "url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ready = this.#loggedin.ready;
    this.loggenId = computed(
      () => this.#loggedin.user() !== void 0,
      ...ngDevMode ? [{ debugName: "loggenId" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #loggedin;
  #doc;
  static {
    this.\u0275fac = function MenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["se-menu"]], decls: 2, vars: 1, consts: [[3, "href"], [3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MenuComponent_Conditional_0_Template, 2, 1)(1, MenuComponent_Conditional_1_Template, 2, 0, "p");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.ready() ? 0 : 1);
      }
    }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: var(--size-4);\n  gap: var(--size-4);\n}\na[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  inline-size: 100%;\n  max-inline-size: 100%;\n  min-block-size: var(--size-11);\n  max-block-size: 50dvb;\n  padding-block: var(--size-4);\n  padding-inline: var(--size-5);\n  border: var(--border-size-1) solid var(--surface-3);\n  border-radius: var(--radius-3);\n  background: var(--surface-2);\n  color: var(--text-1);\n  text-align: center;\n  text-decoration: none;\n  font-weight: var(--font-weight-6);\n  transition:\n    transform 120ms var(--ease-3),\n    box-shadow 160ms var(--ease-3),\n    background-color 160ms var(--ease-3),\n    border-color 160ms var(--ease-3);\n}\na[_ngcontent-%COMP%]:hover {\n  background: var(--surface-3);\n  border-color: var(--surface-4);\n  box-shadow: var(--shadow-2);\n}\na[_ngcontent-%COMP%]:focus-visible {\n  outline: var(--border-size-2) solid var(--link);\n  outline-offset: var(--size-1);\n  box-shadow: var(--shadow-3);\n}\na[_ngcontent-%COMP%]:active {\n  transform: translateY(var(--size-px-2));\n  box-shadow: var(--shadow-1);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{ selector: "se-menu", imports: [RouterLink], template: `
    @if (ready()) {
      @if (loggenId()) {
        <a [routerLink]="['./power']">stroom meter beheer</a>
        <a [routerLink]="['./list']">apparaten lijst</a>
      } @else {
        <a [href]="'https://auth.eliasweb.nl/ui/login?rd=' + url()">Login</a>
      }
    } @else {
      <p>Loading...</p>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/mqtt/menu/menu.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  padding: var(--size-4);\n  gap: var(--size-4);\n}\na {\n  display: grid;\n  place-items: center;\n  inline-size: 100%;\n  max-inline-size: 100%;\n  min-block-size: var(--size-11);\n  max-block-size: 50dvb;\n  padding-block: var(--size-4);\n  padding-inline: var(--size-5);\n  border: var(--border-size-1) solid var(--surface-3);\n  border-radius: var(--radius-3);\n  background: var(--surface-2);\n  color: var(--text-1);\n  text-align: center;\n  text-decoration: none;\n  font-weight: var(--font-weight-6);\n  transition:\n    transform 120ms var(--ease-3),\n    box-shadow 160ms var(--ease-3),\n    background-color 160ms var(--ease-3),\n    border-color 160ms var(--ease-3);\n}\na:hover {\n  background: var(--surface-3);\n  border-color: var(--surface-4);\n  box-shadow: var(--shadow-2);\n}\na:focus-visible {\n  outline: var(--border-size-2) solid var(--link);\n  outline-offset: var(--size-1);\n  box-shadow: var(--shadow-3);\n}\na:active {\n  transform: translateY(var(--size-px-2));\n  box-shadow: var(--shadow-1);\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src/app/mqtt/menu/menu.component.ts", lineNumber: 29 });
})();
export {
  MenuComponent
};
