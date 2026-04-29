import {
  seAfterContentChecked,
  seOnDestroy,
  seOnInit
} from "./chunk-PHXWCJ5H.js";
import {
  AsyncPipe,
  JsonPipe
} from "./chunk-4UOFC3SS.js";
import "./chunk-TWVYKLAR.js";
import {
  ChangeDetectionStrategy,
  Component,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/mixins/mixins/mixins.component.ts
function MixinsComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
var MixinsComponent = class _MixinsComponent extends seOnDestroy(seAfterContentChecked(seOnInit(class {
}))) {
  constructor() {
    super();
    this.demo$ = this.seOnInit$.pipe(
      switchMap(() => of([1, 2, 3, 4]))
      // tap(r => console.log('init Fired', r))
    );
    this.updateSomethingSub = this.seAfterContentChecked$.pipe(tap(() => console.log("content is checked"))).subscribe({
      complete() {
      }
    });
    this.onDestroySub = this.seOnDestroy$.subscribe(() => console.log("onDestroy fired."), () => console.log("err"), () => console.log("onDestroy completed"));
  }
  static {
    this.\u0275fac = function MixinsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MixinsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MixinsComponent, selectors: [["app-mixins"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 7, template: function MixinsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Mixins rule");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "ul");
        \u0275\u0275repeaterCreate(3, MixinsComponent_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275pipe(8, "json");
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 1, ctx.demo$));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, \u0275\u0275pipeBind1(7, 3, ctx.demo$)), "\n");
      }
    }, dependencies: [AsyncPipe, JsonPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MixinsComponent, [{
    type: Component,
    args: [{ selector: "app-mixins", changeDetection: ChangeDetectionStrategy.OnPush, imports: [AsyncPipe, JsonPipe], template: "<h1>Mixins rule</h1>\n\n<ul>\n  @for (item of demo$ | async; track item) {\n    <li>{{ item }}</li>\n  }\n</ul>\n\n{{ demo$ | async | json }}\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MixinsComponent, { className: "MixinsComponent", filePath: "src/app/mixins/mixins/mixins.component.ts", lineNumber: 18 });
})();
export {
  MixinsComponent
};
