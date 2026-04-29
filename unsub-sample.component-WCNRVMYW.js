import {
  ActivatedRoute,
  Router
} from "./chunk-WZF6MLWQ.js";
import "./chunk-2NL724MV.js";
import "./chunk-UNRJB5KN.js";
import {
  AsyncPipe
} from "./chunk-4UOFC3SS.js";
import "./chunk-TWVYKLAR.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  combineLatest,
  debounceTime,
  inject,
  map,
  setClassMetadata,
  take,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/unsub-sample/unsub-sample.component.ts
function UnsubSampleComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div")(1, "button", 0);
    \u0275\u0275domListener("click", function UnsubSampleComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change$.next(1));
    });
    \u0275\u0275text(2, "up");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 0);
    \u0275\u0275domListener("click", function UnsubSampleComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change$.next(-1));
    });
    \u0275\u0275text(6, "down");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("id: ", ctx.id);
  }
}
var UnsubSampleComponent = class _UnsubSampleComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.id$ = new BehaviorSubject(120);
    this.change$ = new BehaviorSubject(0);
    this.sub = this.route.params.pipe(
      /** read the initial value */
      map((params) => parseInt(params.id, 10)),
      take(1)
      // Only take the first value in, as we don't want to cause an infinite loop.
    ).subscribe({
      next: (id) => {
        !Number.isNaN(id) && this.id$.next(id);
      }
    });
    this.vm$ = combineLatest({
      id: this.id$,
      change: this.change$
    }).pipe(
      debounceTime(10),
      // debounce the change, so that we don't get multiple navigations.
      map(({ id, change }) => {
        const goTo = id + change;
        console.log({ id, change, goTo });
        if (goTo > 0 && goTo !== id) {
          this.router.navigate(["unsubSample", goTo]);
          this.change$.next(0);
          this.id$.next(goTo);
        }
        return { id, goTo, change };
      })
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  static {
    this.\u0275fac = function UnsubSampleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnsubSampleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnsubSampleComponent, selectors: [["se-unsub-sample"]], decls: 6, vars: 3, consts: [[3, "click"]], template: function UnsubSampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Unsubscribe sample");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "p");
        \u0275\u0275text(3, "Click the buttons to navigate to the next or previous id.");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, UnsubSampleComponent_Conditional_4_Template, 7, 1, "div");
        \u0275\u0275pipe(5, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(5, 1, ctx.vm$)) ? 4 : -1, tmp_0_0);
      }
    }, dependencies: [AsyncPipe], styles: ["\ndiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 3rem;\n  gap: 0.5rem;\n  justify-items: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnsubSampleComponent, [{
    type: Component,
    args: [{
      selector: "se-unsub-sample",
      imports: [AsyncPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <h1>Unsubscribe sample</h1>
    <p>Click the buttons to navigate to the next or previous id.</p>
    @if (vm$ | async; as vm) {
      <div>
        <button (click)="change$.next(1)">up</button>
        <p>id: {{ vm.id }}</p>
        <button (click)="change$.next(-1)">down</button>
      </div>
    }
    <style>
      div {
        display: flex;
        flex-direction: row;
        height: 3rem;
        gap: 0.5rem;
        justify-items: center;
      }
    </style>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnsubSampleComponent, { className: "UnsubSampleComponent", filePath: "src/app/unsub-sample/unsub-sample.component.ts", lineNumber: 32 });
})();
export {
  UnsubSampleComponent
};
