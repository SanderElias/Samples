import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Output,
  afterRenderEffect,
  inject,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// src/app/dialog/dialog/dialog.component.ts
var _c0 = ["*"];
var SeDialogComponent = class _SeDialogComponent {
  constructor() {
    this.shown = model.required(
      ...ngDevMode ? [{ debugName: "shown" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.elm = inject(ElementRef).nativeElement;
    this._ = afterRenderEffect(() => {
      const dlg = this.elm.firstElementChild;
      if (this.shown()) {
        dlg.showModal();
      } else {
        dlg.close();
      }
    });
  }
  static {
    this.\u0275fac = function SeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SeDialogComponent, selectors: [["se-dialog"]], inputs: { shown: [1, "shown"] }, outputs: { shown: "shownChange" }, ngContentSelectors: _c0, decls: 2, vars: 0, template: function SeDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "dialog");
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\n[_ngcontent-%COMP%]::backdrop {\n  background-image:\n    linear-gradient(\n      45deg,\n      magenta,\n      rebeccapurple,\n      dodgerblue,\n      green);\n  opacity: 0.75;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeDialogComponent, [{
    type: Component,
    args: [{ selector: "se-dialog", imports: [], template: ` <dialog><ng-content></ng-content></dialog> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/dialog/dialog/dialog.component.css */\n::backdrop {\n  background-image:\n    linear-gradient(\n      45deg,\n      magenta,\n      rebeccapurple,\n      dodgerblue,\n      green);\n  opacity: 0.75;\n}\n"] }]
  }], null, { shown: [{ type: Input, args: [{ isSignal: true, alias: "shown", required: true }] }, { type: Output, args: ["shownChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeDialogComponent, { className: "SeDialogComponent", filePath: "src/app/dialog/dialog/dialog.component.ts", lineNumber: 17 });
})();

// src/app/dialog/dialog.component.ts
var DialogComponent = class _DialogComponent {
  constructor() {
    this.shown = signal(
      false,
      ...ngDevMode ? [{ debugName: "shown" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function DialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogComponent, selectors: [["ng-component"]], decls: 9, vars: 2, consts: [[3, "click"], [3, "shown"], ["autofocus", "", 3, "click"]], template: function DialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "H1");
        \u0275\u0275text(1, "Dialog doesn't need a service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 0);
        \u0275\u0275listener("click", function DialogComponent_Template_button_click_2_listener() {
          return ctx.shown.set(!ctx.shown());
        });
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "se-dialog", 1)(5, "p");
        \u0275\u0275text(6, "This modal dialog has a groovy backdrop!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275listener("click", function DialogComponent_Template_button_click_7_listener() {
          return ctx.shown.set(false);
        });
        \u0275\u0275text(8, "Close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.shown() ? "hide" : "show", " ");
        \u0275\u0275advance();
        \u0275\u0275property("shown", ctx.shown());
      }
    }, dependencies: [SeDialogComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{ imports: [SeDialogComponent], template: `<H1>Dialog doesn't need a service</H1>
    <button (click)="shown.set(!shown())">
      {{ shown() ? 'hide' : 'show' }}
    </button>
    <se-dialog [shown]="shown()">
      <p>This modal dialog has a groovy backdrop!</p>
      <button autofocus (click)="shown.set(false)">Close</button>
    </se-dialog> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/dialog/dialog.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogComponent, { className: "DialogComponent", filePath: "src/app/dialog/dialog.component.ts", lineNumber: 18 });
})();
export {
  DialogComponent as default
};
