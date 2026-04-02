import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  afterRenderEffect,
  inject,
  input,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefer,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/reusable-dialog/dialog/dialog.component.ts
var _c0 = ["*"];
var DialogComponent = class _DialogComponent {
  constructor() {
    this.elm = inject(ElementRef).nativeElement;
    this.show = input(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#dummy = afterRenderEffect(() => {
      if (this.show()) {
        this.elm.showModal();
      } else {
        this.elm.close();
      }
    });
  }
  #dummy;
  static {
    this.\u0275fac = function DialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogComponent, selectors: [["dialog"]], inputs: { show: [1, "show"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: dialog;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{ selector: "dialog", imports: [], template: `<ng-content />`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/reusable-dialog/dialog/dialog.component.css */\n:host {\n  display: dialog;\n}\n"] }]
  }], null, { show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogComponent, { className: "DialogComponent", filePath: "src/app/reusable-dialog/dialog/dialog.component.ts", lineNumber: 17 });
})();

// src/app/reusable-dialog/reusable-dialog.component.ts
var ReusableDialogComponent_Defer_11_DepsFn = () => [
  /* @ts-ignore */
  import("./dummy-content.component-AKZYQ2Z6.js").then((m) => m.DummyContentComponent)
];
function ReusableDialogComponent_Defer_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Dialog");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "se-dummy-content");
    \u0275\u0275elementStart(3, "button", 1);
    \u0275\u0275listener("click", function ReusableDialogComponent_Defer_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275text(4, "Close");
    \u0275\u0275elementEnd();
  }
}
function ReusableDialogComponent_DeferPlaceholder_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Some content");
    \u0275\u0275elementEnd();
  }
}
var ReusableDialogComponent = class _ReusableDialogComponent {
  constructor() {
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ReusableDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReusableDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReusableDialogComponent, selectors: [["se-reusable-dialog"]], decls: 13, vars: 2, consts: [["b", ""], [3, "click"], ["type", "text", "name", "dummy", "id", "dummy"], [3, "show"]], template: function ReusableDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Reusable Dialog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 1, 0);
        \u0275\u0275listener("click", function ReusableDialogComponent_Template_button_click_2_listener() {
          return ctx.show.set(true);
        });
        \u0275\u0275text(4, "Open Dialog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "label");
        \u0275\u0275text(6, "input to show inert state ");
        \u0275\u0275element(7, "input", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "dialog", 3);
        \u0275\u0275domTemplate(9, ReusableDialogComponent_Defer_9_Template, 5, 0)(10, ReusableDialogComponent_DeferPlaceholder_10_Template, 2, 0);
        \u0275\u0275defer(11, 9, ReusableDialogComponent_Defer_11_DepsFn, null, 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("show", ctx.show());
        \u0275\u0275advance(3);
        \u0275\u0275deferWhen(ctx.show());
      }
    }, dependencies: [DialogComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(ReusableDialogComponent, () => [
    /* @ts-ignore */
    import("./dummy-content.component-AKZYQ2Z6.js").then((m) => m.DummyContentComponent)
  ], (DummyContentComponent) => {
    setClassMetadata(ReusableDialogComponent, [{
      type: Component,
      args: [{ selector: "se-reusable-dialog", imports: [DialogComponent, DummyContentComponent], template: `<h1>Reusable Dialog</h1>
    <button #b (click)="show.set(true)">Open Dialog</button>
    <label
      >input to show inert state
      <input type="text" name="dummy" id="dummy" />
    </label>
    <dialog [show]="show()">
      @defer (when show()) {
        <h2>Dialog</h2>
        <se-dummy-content />
        <button (click)="show.set(false)">Close</button>
      } @placeholder {
        <p>Some content</p>
      }
    </dialog> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/reusable-dialog/reusable-dialog.component.css */\n:host {\n  display: block;\n}\n"] }]
    }], null, null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReusableDialogComponent, { className: "ReusableDialogComponent", filePath: "src/app/reusable-dialog/reusable-dialog.component.ts", lineNumber: 27 });
})();
var y = "twee";
function test(x) {
}
test(y);
export {
  ReusableDialogComponent
};
