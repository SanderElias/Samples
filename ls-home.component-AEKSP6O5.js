import {
  ActivatedRoute
} from "./chunk-KJ62TFR2.js";
import "./chunk-MOADGNT5.js";
import "./chunk-KVEFCSSA.js";
import {
  AsyncPipe
} from "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
  __decorate,
  combineLatest,
  filter,
  fromEvent,
  inject,
  input,
  linkedSignal,
  map,
  pluck,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-T5ZKQ47R.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/local-state/ls-home/ls-home.component.ts
var _c0 = ["b"];
function oldLsHomeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 1, 0);
    \u0275\u0275domListener("click", function oldLsHomeComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateCounterWith(-1));
    });
    \u0275\u0275text(2, "-1");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 1, 0);
    \u0275\u0275domListener("click", function oldLsHomeComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateCounterWith(1));
    });
    \u0275\u0275text(7, "+1");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.count);
  }
}
var LsHomeComponent = class _LsHomeComponent {
  constructor() {
    this.id = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "id" } : (
      /* istanbul ignore next */
      {}
    )), { transform: (v) => +v }));
    this.localState = linkedSignal(
      () => ({
        count: this.id() || 0,
        message: "Hello"
      }),
      ...ngDevMode ? [{ debugName: "localState" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.updateCounterWith = (value) => {
      this.localState.update((state) => {
        const count = state.count + value;
        return __spreadProps(__spreadValues({}, state), { count });
      });
    };
  }
  static {
    this.\u0275fac = function LsHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LsHomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LsHomeComponent, selectors: [["app-ls-home"]], inputs: { id: [1, "id"] }, decls: 9, vars: 1, consts: [[3, "click"]], template: function LsHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h2");
        \u0275\u0275text(1, "test some state");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "section")(3, "button", 0);
        \u0275\u0275domListener("click", function LsHomeComponent_Template_button_click_3_listener() {
          return ctx.updateCounterWith(-1);
        });
        \u0275\u0275text(4, "-1");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "button", 0);
        \u0275\u0275domListener("click", function LsHomeComponent_Template_button_click_7_listener() {
          return ctx.updateCounterWith(1);
        });
        \u0275\u0275text(8, "+1");
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.localState().count);
      }
    }, styles: ["\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LsHomeComponent, [{
    type: Component,
    args: [{ selector: "app-ls-home", template: `
    <h2>test some state</h2>
    <section>
      <button (click)="updateCounterWith(-1)">-1</button>
      <span>{{ localState().count }}</span>
      <button (click)="updateCounterWith(1)">+1</button>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;359342e3696c9a46ee57354d0e1d18f03a8fff1ca5d8dd766dffa775eb1ec205;/home/runner/work/Samples/Samples/src/app/local-state/ls-home/ls-home.component.ts */\nsection {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n"] }]
  }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LsHomeComponent, { className: "LsHomeComponent", filePath: "src/app/local-state/ls-home/ls-home.component.ts", lineNumber: 42 });
})();
var oldLsHomeComponent = class _oldLsHomeComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.localState$ = new BehaviorSubject({
      count: 0
    });
    this.id$ = this.route.params.pipe(map(({ id }) => +id));
    this.clicks$ = this.localState$.pipe(
      pluck("buttons"),
      filter((ql) => ql instanceof QueryList),
      map((ql) => ql.toArray().map((b) => b.nativeElement)),
      // tap(btns => btns.forEach(b => console.log(b))),
      switchMap((buttons) => fromEvent(buttons, "click"))
      // tap(cl => console.log({ cl }))
    ).subscribe(console.log);
    this.vm$ = combineLatest({ id: this.id$, state: this.localState$ }).pipe(
      map((preVm) => ({
        id: preVm.id,
        count: preVm.state.count || 0
      }))
      // tap(console.log)
    );
  }
  ngOnInit() {
  }
  updateCounterWith(value) {
    this.localState$.next(__spreadProps(__spreadValues({}, this.localState$.value), {
      count: this.localState$.value.count ?? 0 + value
    }));
  }
  static {
    this.\u0275fac = function oldLsHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _oldLsHomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _oldLsHomeComponent, selectors: [["app-ls-home"]], viewQuery: function oldLsHomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttons = _t);
      }
    }, decls: 4, vars: 3, consts: [["b", ""], [3, "click"]], template: function oldLsHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h2");
        \u0275\u0275text(1, "test some state");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(2, oldLsHomeComponent_Conditional_2_Template, 8, 1);
        \u0275\u0275pipe(3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(3, 1, ctx.vm$)) ? 2 : -1, tmp_0_0);
      }
    }, dependencies: [AsyncPipe], encapsulation: 2 });
  }
};
__decorate([
  ObservableInput("localState$")
], oldLsHomeComponent.prototype, "buttons", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(oldLsHomeComponent, [{
    type: Component,
    args: [{ selector: "app-ls-home", template: `
    <h2>test some state</h2>
    @if (vm$ | async; as vm) {
      <button #b (click)="updateCounterWith(-1)">-1</button>
      <span>{{ vm.count }}</span>
      <button #b (click)="updateCounterWith(1)">+1</button>
      <!-- <button #b *ngIf="vm.count%2" (click)="updateCounterWith(2)">+2</button> -->
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, imports: [AsyncPipe] }]
  }], null, { buttons: [{
    type: ViewChildren,
    args: ["b", { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(oldLsHomeComponent, { className: "oldLsHomeComponent", filePath: "src/app/local-state/ls-home/ls-home.component.ts", lineNumber: 71 });
})();
function ObservableInput(input2) {
  return (target, propertyName) => {
    Object.defineProperty(target, propertyName, {
      set: function(x) {
        const rs = this[input2];
        if (x) {
          rs.next(__spreadProps(__spreadValues({}, rs.value), { [propertyName]: x }));
        }
      },
      get: function() {
        throw new Error(`Don't read the "${propertyName}" directly, instead take it from the "${input2}" behaviourSubject`);
      },
      configurable: false,
      enumerable: true
    });
  };
}
export {
  LsHomeComponent,
  ObservableInput
};
