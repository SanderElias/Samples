import {
  AsyncPipe
} from "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Observable,
  combineLatest,
  finalize,
  inject,
  map,
  setClassMetadata,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcomponentInstance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/rxjstest/combinator.ts
function combinator(fn, debounceTime = 50) {
  const clients = /* @__PURE__ */ new Map();
  const result = [];
  let debounceTimer;
  let lastEmitTime = 0;
  let subscriber;
  const op = new Observable((s) => {
    subscriber = s;
    return cleanUp;
  });
  return (source) => {
    debounceTime = typeof fn === "number" ? fn : debounceTime;
    source.subscribe((x) => {
      const sources = typeof fn === "function" ? fn(x) : x;
      cleanStaleSubscriptions(sources);
      sources.forEach(checkAndSubscribeWhenNew);
    });
    return op;
  };
  function cleanStaleSubscriptions(sources) {
    clients.forEach((sub, key) => {
      if (!sources.includes(key)) {
        sub.sub.unsubscribe();
        clients.delete(key);
      }
    });
  }
  function checkAndSubscribeWhenNew(source, index) {
    const client = clients.get(source);
    if (client === void 0) {
      const subObserver = {
        next: (value) => {
          if (res.last !== value) {
            res.last = value;
            emitResults();
          }
        },
        error: (err) => subscriber.error(err),
        complete: () => {
        }
      };
      const res = {
        sub: source.subscribe(subObserver),
        last: void 0,
        index
      };
      clients.set(source, res);
      return;
    }
    client.index = index;
  }
  function cleanUp() {
    clearTimeout(debounceTimer);
    clients.forEach((client) => client.sub.unsubscribe());
    clients.clear();
  }
  function doEmit() {
    result.length = clients.size;
    clients.forEach(({ last, index }) => result[index] = last);
    lastEmitTime = Date.now();
    debounceTimer = void 0;
    subscriber.next(result);
  }
  function emitResults() {
    debounceTimer && clearTimeout(debounceTimer);
    debounceTimer = setTimeout(doEmit, debounceTime);
    if (Date.now() - lastEmitTime > debounceTime) {
      debounceTimer && clearTimeout(debounceTimer);
      doEmit();
    }
  }
}

// src/app/rxjstest/rxjstest.component.ts
function RxjstestComponent_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li")(1, "button", 0);
    \u0275\u0275domListener("click", function RxjstestComponent_Conditional_2_For_6_Template_button_click_1_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(item_r4.value));
    });
    \u0275\u0275text(2, "\u{1F5D1}\uFE0F");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", item_r4 == null ? null : item_r4.value, " - ", item_r4 == null ? null : item_r4.iteration, " ");
  }
}
function RxjstestComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 0);
    \u0275\u0275domListener("click", function RxjstestComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275text(1, "Add");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "ul");
    \u0275\u0275repeaterCreate(5, RxjstestComponent_Conditional_2_For_6_Template, 4, 2, "li", null, \u0275\u0275componentInstance().identify, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const vm_r5 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Number of items :", vm_r5.comp.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r5.comp);
  }
}
var RxjstestComponent = class _RxjstestComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.result = /* @__PURE__ */ new Map();
    this.data$ = new BehaviorSubject(Array.from({ length: 300 }, () => Math.floor(Math.random() * 1e5) + 1));
    this.enrich = (value) => {
      if (!this.result.has(value)) {
        this.result.set(value, timer(Math.floor(Math.random() * 1e4), Math.floor(Math.random() * 500) + 500).pipe(map((iteration) => ({ value, iteration })), finalize(() => {
          this.result.delete(value);
        })));
      }
      return this.result.get(value);
    };
    this.completed$ = this.data$.pipe(
      // map((data) => data.map(this.enrich)),
      combinator((data) => data.map(this.enrich), 250),
      tap((data) => this.cdr.detectChanges())
    );
    this.vm$ = combineLatest({
      data: this.data$,
      comp: this.completed$
    }).pipe();
    this.remove = (val) => {
      const newData = this.data$.value.filter((item) => item !== val);
      this.data$.next(newData);
    };
  }
  add(count = Math.floor(Math.random() * 150) + 50) {
    const newNum = Math.floor(Math.random() * 1e5);
    if (this.result.has(newNum)) {
      return this.add(count);
    }
    this.data$.next([...this.data$.value, newNum]);
    if (count > 1) {
      this.add(count - 1);
    }
  }
  identify(index, item) {
    return item?.value ?? index;
  }
  static {
    this.\u0275fac = function RxjstestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RxjstestComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RxjstestComponent, selectors: [["se-rxjstest"]], decls: 4, vars: 3, consts: [[3, "click"]], template: function RxjstestComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Rxjs cleanup test");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(2, RxjstestComponent_Conditional_2_Template, 7, 1);
        \u0275\u0275pipe(3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(3, 1, ctx.vm$)) ? 2 : -1, tmp_0_0);
      }
    }, dependencies: [AsyncPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  max-height: 90vh;\n  overflow: auto;\n}\nbutton[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2rem;\n  background-color: inherit;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\nul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RxjstestComponent, [{
    type: Component,
    args: [{ selector: "se-rxjstest", imports: [AsyncPipe], template: `<h1>Rxjs cleanup test</h1>
    @if (vm$ | async; as vm) {
      <button (click)="add()">Add</button>
      <span>Number of items :{{ vm.comp.length }}</span>
      <ul>
        @for (item of vm.comp; track identify($index, item)) {
          <li>
            <button (click)="remove(item.value)">\u{1F5D1}\uFE0F</button>
            {{ item?.value }} - {{ item?.iteration }}
          </li>
        }
      </ul>
    } `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/rxjstest/rxjstest.component.css */\n:host {\n  display: block;\n  max-height: 90vh;\n  overflow: auto;\n}\nbutton {\n  display: inline-block;\n  width: 2rem;\n  background-color: inherit;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\nul {\n  display: grid;\n  gap: 0.2rem;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RxjstestComponent, { className: "RxjstestComponent", filePath: "src/app/rxjstest/rxjstest.component.ts", lineNumber: 39 });
})();
export {
  RxjstestComponent
};
