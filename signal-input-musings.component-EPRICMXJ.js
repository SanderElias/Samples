import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp,
  ɵɵtext
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/signal-input-musings/signal-input-musings.component.ts
var _c0 = ["*"];
var PrettyTextComponent = class _PrettyTextComponent {
  constructor() {
    this.color = "white";
    this.bg = "red";
  }
  static {
    this.\u0275fac = function PrettyTextComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrettyTextComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrettyTextComponent, selectors: [["pretty-text"]], hostVars: 4, hostBindings: function PrettyTextComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.bg)("color", ctx.color);
      }
    }, inputs: { color: "color", bg: "bg" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PrettyTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrettyTextComponent, [{
    type: Component,
    args: [{
      selector: "pretty-text",
      template: `<ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.backgroundColor]": "bg",
        "[style.color]": "color"
      }
    }]
  }], null, { color: [{
    type: Input
  }], bg: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrettyTextComponent, { className: "PrettyTextComponent", filePath: "src/app/signal-input-musings/signal-input-musings.component.ts", lineNumber: 18 });
})();
var PrettyReversedComponent = class _PrettyReversedComponent {
  constructor() {
    this.pt = inject(PrettyTextComponent);
  }
  ngOnInit() {
    const tmp = this.pt.bg;
    this.pt.bg = this.pt.color;
    this.pt.color = tmp;
  }
  static {
    this.\u0275fac = function PrettyReversedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrettyReversedComponent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PrettyReversedComponent, selectors: [["pretty-text", "reversed", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrettyReversedComponent, [{
    type: Directive,
    args: [{
      selector: "pretty-text[reversed]"
    }]
  }], null, null);
})();
var SignalInputMusingsComponent = class _SignalInputMusingsComponent {
  static {
    this.\u0275fac = function SignalInputMusingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignalInputMusingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalInputMusingsComponent, selectors: [["se-signal-input-musings"]], decls: 6, vars: 0, consts: [["reversed", ""]], template: function SignalInputMusingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3");
        \u0275\u0275text(1, "Signal stuff");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "pretty-text");
        \u0275\u0275text(3, "test");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "pretty-text", 0);
        \u0275\u0275text(5, "test");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [PrettyTextComponent, PrettyReversedComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\npretty-text[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 5px;\n  margin: 5px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalInputMusingsComponent, [{
    type: Component,
    args: [{ selector: "se-signal-input-musings", imports: [PrettyTextComponent, PrettyReversedComponent], template: `<h3>Signal stuff</h3>
    <pretty-text>test</pretty-text>
    <pretty-text reversed>test</pretty-text> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-input-musings/signal-input-musings.component.css */\n:host {\n  display: block;\n}\npretty-text {\n  padding: 5px;\n  border-radius: 5px;\n  margin: 5px;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalInputMusingsComponent, { className: "SignalInputMusingsComponent", filePath: "src/app/signal-input-musings/signal-input-musings.component.ts", lineNumber: 44 });
})();
export {
  SignalInputMusingsComponent
};
