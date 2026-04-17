import {
  asyncComputed,
  computedResource
} from "./chunk-IHBT2AMQ.js";
import "./chunk-LJ2EIP3L.js";
import "./chunk-2KCW2NJN.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EIP4NRL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/out-of-order/out-of-order.component.ts
var OutOfOrderComponent = class _OutOfOrderComponent {
  constructor() {
    this.myId = signal(
      1,
      ...ngDevMode ? [{ debugName: "myId" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.naiveData = signal(
      0,
      ...ngDevMode ? [{ debugName: "naiveData" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._naiveEffect = effect(
      async () => {
        const id = this.myId();
        const data = await simulateFetch({ params: id }).catch((e) => e.message);
        if (this.myId() !== data) {
          this.naiveData.set(`out-of-order: ${this.myId()} !== ${data}`);
          console.log("out-of-order detected");
          return;
        }
        this.naiveData.set(data);
      },
      ...ngDevMode ? [{ debugName: "_naiveEffect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ab = new AbortController();
    this.naiveDataWithAbort = signal(
      0,
      ...ngDevMode ? [{ debugName: "naiveDataWithAbort" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._naiveEffectWithAbort = effect(
      async () => {
        this.ab.abort();
        this.ab = new AbortController();
        const abortSignal = this.ab.signal;
        const id = this.myId();
        try {
          const data = await simulateFetch({ params: id, abortSignal }).catch((e) => e.message);
          this.naiveDataWithAbort.set(data);
        } catch {
        }
      },
      ...ngDevMode ? [{ debugName: "_naiveEffectWithAbort" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.datUsingResource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "datUsingResource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: this.myId,
      loader: simulateFetch
    }));
    this.status = computed(
      () => {
        const statusus = [
          "Idle",
          "Error",
          "Loading",
          "Reloading",
          "Resolved",
          "Local"
        ];
        return statusus[this.datUsingResource.status()];
      },
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.usingAsyncComputed = asyncComputed(() => simulateFetch({ params: this.myId() }));
    this.usingComputedResource = computedResource(() => simulateFetch({ params: this.myId() }));
    setInterval(() => this.myId.update((i) => i + 1), 1e3);
  }
  static {
    this.\u0275fac = function OutOfOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OutOfOrderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutOfOrderComponent, selectors: [["se-out-of-order"]], decls: 20, vars: 9, template: function OutOfOrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Out of Order problem");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "p");
        \u0275\u0275text(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "p");
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "p");
        \u0275\u0275text(7);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(10, "p");
        \u0275\u0275text(11);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(12, "p");
        \u0275\u0275text(13);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(16, "p");
        \u0275\u0275text(17);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(18, "p");
        \u0275\u0275text(19);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("My ID: ", ctx.myId());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Naive data: ", ctx.naiveData());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Naive data with abort: ", ctx.naiveDataWithAbort());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Data using resource: ", ctx.datUsingResource.value());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Data using resource has status: ", ctx.status());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Data using async computed: ", ctx.usingAsyncComputed());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Data using async resource: ", ctx.usingComputedResource().value());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("async resource status ", ctx.usingComputedResource().status);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("async resource status ", ctx.usingComputedResource().stream);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OutOfOrderComponent, [{
    type: Component,
    args: [{ selector: "se-out-of-order", imports: [], template: `
    <h1>Out of Order problem</h1>
    <p>My ID: {{ myId() }}</p>
    <p>Naive data: {{ naiveData() }}</p>
    <p>Naive data with abort: {{ naiveDataWithAbort() }}</p>
    <p>Data using resource: {{ datUsingResource.value() }}</p>
    <p>Data using resource has status: {{ status() }}</p>
    <p>Data using async computed: {{ usingAsyncComputed() }}</p>
    <p>Data using async resource: {{ usingComputedResource().value() }}</p>
    <p>async resource status {{ usingComputedResource().status }}</p>
    <p>async resource status {{ usingComputedResource().stream }}</p>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/out-of-order/out-of-order.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutOfOrderComponent, { className: "OutOfOrderComponent", filePath: "src/app/out-of-order/out-of-order.component.ts", lineNumber: 29 });
})();
var simulateFetch = async ({ params, abortSignal }) => {
  const delay = 500 + Math.random() * 600;
  if (params % 25 === 0) {
    throw new Error("Failed to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, delay));
  if (abortSignal?.aborted) {
    return "";
  }
  return params;
};
export {
  OutOfOrderComponent
};
