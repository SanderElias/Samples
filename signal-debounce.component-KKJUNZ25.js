import {
  debouncedComputed
} from "./chunk-6PJN4QOU.js";
import "./chunk-UNRJB5KN.js";
import "./chunk-TWVYKLAR.js";
import {
  ChangeDetectionStrategy,
  Component,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CYK2LKQE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/signal-debounce/signal-debounce.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SignalDebounce_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p")(1, "a", 1);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const result_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", result_r1.html_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", result_r1.name, " by ", result_r1.owner.login);
  }
}
var SignalDebounce = class _SignalDebounce {
  constructor() {
    this.counter = signal(
      0,
      ...ngDevMode ? [{ debugName: "counter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debouncedCounter = debouncedComputed(() => this.counter(), { delay: 2e3 });
    this.search = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dSearch = debouncedComputed(() => this.search(), { delay: 1500 });
    this.results = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "results" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: this.dSearch,
      loader: async ({ params: request, abortSignal }) => {
        console.log("fetching", request);
        const response = await fetch(`https://api.github.com/search/repositories?q=${request}`, { signal: abortSignal });
        const json = await response.json();
        console.log("fetched", console.log(json));
        return json.items;
      }
    }));
    const nextTime = () => Math.random() * 500 + 200;
    const update = () => {
      this.counter.set(this.counter() + 1);
      setTimeout(update, nextTime());
    };
    update();
  }
  static {
    this.\u0275fac = function SignalDebounce_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignalDebounce)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalDebounce, selectors: [["se-signal-debounce"]], decls: 11, vars: 4, consts: [["type", "text", 3, "input", "value"], ["target", "_blank", 3, "href"]], template: function SignalDebounce_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "signal-debounce");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "p");
        \u0275\u0275text(3, "This is a option to debounce a signal update.");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "p");
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "p");
        \u0275\u0275text(7);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(8, "input", 0);
        \u0275\u0275domListener("input", function SignalDebounce_Template_input_input_8_listener($event) {
          return ctx.search.set($event.target.value);
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275repeaterCreate(9, SignalDebounce_For_10_Template, 3, 3, "p", null, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Counter: ", ctx.counter());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("Debounced Counter: ", ctx.debouncedCounter(), " ", ctx.dSearch());
        \u0275\u0275advance();
        \u0275\u0275domProperty("value", ctx.search() ?? "");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.results.value());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalDebounce, [{
    type: Component,
    args: [{ selector: "se-signal-debounce", imports: [], template: `
    <h1>signal-debounce</h1>
    <p>This is a option to debounce a signal update.</p>
    <p>Counter: {{ counter() }}</p>
    <p>Debounced Counter: {{ debouncedCounter() }} {{ dSearch() }}</p>
    <input
      type="text"
      [value]="search() ?? ''"
      (input)="search.set($any($event.target).value)"
    />
    @for (result of results.value(); track result.id) {
      <p>
        <a target="_blank" [href]="result.html_url"
          >{{ result.name }} by {{ result.owner.login }}</a
        >
      </p>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-debounce/signal-debounce.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalDebounce, { className: "SignalDebounce", filePath: "src/app/signal-debounce/signal-debounce.component.ts", lineNumber: 33 });
})();
var Type;
(function(Type2) {
  Type2["Organization"] = "Organization";
  Type2["User"] = "User";
})(Type || (Type = {}));
var Visibility;
(function(Visibility2) {
  Visibility2["Public"] = "public";
})(Visibility || (Visibility = {}));
export {
  SignalDebounce,
  Type,
  Visibility
};
