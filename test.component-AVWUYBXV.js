import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/test/obs-click.directive.ts
var ObsClickDirective = class _ObsClickDirective {
  set click(x) {
    console.log("click testup", x);
  }
  constructor() {
    console.log("{click} constructed");
  }
  static {
    this.\u0275fac = function ObsClickDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ObsClickDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ObsClickDirective, selectors: [["", "my-click", ""]], inputs: { click: [0, "my-click", "click"] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObsClickDirective, [{
    type: Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: "[my-click]"
    }]
  }], () => [], { click: [{
    type: Input,
    args: ["my-click"]
  }] });
})();

// src/app/test/test/test.component.ts
var TestComponent = class _TestComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function TestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestComponent, selectors: [["app-test"]], decls: 4, vars: 0, consts: [["my-click", "'hello'"]], template: function TestComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "test works!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 0);
        \u0275\u0275text(3, "does it?");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [ObsClickDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestComponent, [{
    type: Component,
    args: [{ selector: "app-test", changeDetection: ChangeDetectionStrategy.OnPush, imports: [ObsClickDirective], template: `<p>test works!</p>

<button my-click="'hello'">does it?</button>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestComponent, { className: "TestComponent", filePath: "src/app/test/test/test.component.ts", lineNumber: 13 });
})();
export {
  TestComponent
};
