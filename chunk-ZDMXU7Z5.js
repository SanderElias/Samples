import {
  LoggedIn
} from "./chunk-N67WQN73.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext
} from "./chunk-5EIP4NRL.js";

// src/app/authenticaded-user-only/authenticaded-user-only.component.ts
var _c0 = ["*"];
function AuthenticadedUserOnlyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function AuthenticadedUserOnlyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "This only works when you are authenticated");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, " Please log in at ");
    \u0275\u0275domElementStart(4, "a", 0);
    \u0275\u0275text(5, "https://auth.eliasweb.nl");
    \u0275\u0275domElementEnd()();
  }
}
var AuthenticadedUserOnlyComponent = class _AuthenticadedUserOnlyComponent {
  constructor() {
    this.#loggedIn = inject(LoggedIn);
    this.#_des = inject(DestroyRef).onDestroy(() => {
      this.#lastVerify && clearTimeout(this.#lastVerify);
    });
    this.user = this.#loggedIn.user;
    this.#verify = async () => {
      const res = await this.#loggedIn.refreshSession();
      this.#lastVerify = setTimeout(this.#verify, 4 * 60 * 1e3);
    };
    this.#lastVerify = void 0;
    this._ = effect(
      () => {
        this.#lastVerify && clearTimeout(this.#lastVerify);
        this.#lastVerify = void 0;
        if (this.user()) {
          this.#verify();
        }
      },
      ...ngDevMode ? [{ debugName: "_" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #loggedIn;
  #_des;
  #verify;
  #lastVerify;
  static {
    this.\u0275fac = function AuthenticadedUserOnlyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticadedUserOnlyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthenticadedUserOnlyComponent, selectors: [["authenticated-user-only"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["href", "https://auth.eliasweb.nl"]], template: function AuthenticadedUserOnlyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, AuthenticadedUserOnlyComponent_Conditional_0_Template, 1, 0)(1, AuthenticadedUserOnlyComponent_Conditional_1_Template, 6, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.user() ? 0 : 1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticadedUserOnlyComponent, [{
    type: Component,
    args: [{ selector: "authenticated-user-only", imports: [], template: `
    @if (user()) {
      <ng-content />
    } @else {
      <p>This only works when you are authenticated</p>
      <p>
        Please log in at
        <a href="https://auth.eliasweb.nl">https://auth.eliasweb.nl</a>
      </p>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/authenticaded-user-only/authenticaded-user-only.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthenticadedUserOnlyComponent, { className: "AuthenticadedUserOnlyComponent", filePath: "src/app/authenticaded-user-only/authenticaded-user-only.component.ts", lineNumber: 28 });
})();

export {
  AuthenticadedUserOnlyComponent
};
