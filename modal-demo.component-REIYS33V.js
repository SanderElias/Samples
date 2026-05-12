import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewChild,
  afterNextRender,
  model,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/modal-samp/modal-demo/modal-demo.component.ts
var _c0 = ["modal"];
function ModalDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "div")(2, "h1");
    \u0275\u0275text(3, "Whatevever");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 1);
    \u0275\u0275domListener("click", function ModalDemoComponent_Conditional_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shown.set(false));
    });
    \u0275\u0275text(7, "Hide modal");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Hi ", "string from view", ", your order is being processed");
  }
}
var ModalDemoComponent = class _ModalDemoComponent {
  constructor() {
    this.modal = viewChild(
      "modal",
      ...ngDevMode ? [{ debugName: "modal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown = model(
      false,
      ...ngDevMode ? [{ debugName: "shown" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#_ = afterNextRender(() => setTimeout(() => this.shown.set(true), 1500));
  }
  #_;
  static {
    this.\u0275fac = function ModalDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalDemoComponent, selectors: [["app-modal-demo"]], viewQuery: function ModalDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.modal, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { shown: [1, "shown"] }, outputs: { shown: "shownChange" }, decls: 5, vars: 1, consts: [["modal", ""], [3, "click"], [1, "backDrop"]], template: function ModalDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "button", 1);
        \u0275\u0275domListener("click", function ModalDemoComponent_Template_button_click_0_listener() {
          return ctx.shown.set(true);
        });
        \u0275\u0275text(1, "show");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "div", null, 0);
        \u0275\u0275conditionalCreate(4, ModalDemoComponent_Conditional_4_Template, 8, 1, "div", 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.shown() ? 4 : -1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalDemoComponent, [{
    type: Component,
    args: [{ selector: "app-modal-demo", changeDetection: ChangeDetectionStrategy.OnPush, imports: [], template: `<button (click)="shown.set(true)">show</button>

<div #modal>
  @if (shown()) {
    <div class="backDrop">
      <div>
        <h1>Whatevever</h1>
        <p>Hi {{ 'string from view' }}, your order is being processed</p>
        <button (click)="shown.set(false)">Hide modal</button>
      </div>
    </div>
  }
</div>

<style></style>
` }]
  }], null, { modal: [{ type: ViewChild, args: ["modal", { isSignal: true }] }], shown: [{ type: Input, args: [{ isSignal: true, alias: "shown", required: false }] }, { type: Output, args: ["shownChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalDemoComponent, { className: "ModalDemoComponent", filePath: "src/app/modal-samp/modal-demo/modal-demo.component.ts", lineNumber: 10 });
})();
export {
  ModalDemoComponent
};
