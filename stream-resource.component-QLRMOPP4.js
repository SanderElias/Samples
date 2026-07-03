import {
  Component,
  effect,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-WRH363D4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MJUTT27M.js";

// src/app/stream-resource/stream-resource.component.ts
var StreamResourceComponent = class _StreamResourceComponent {
  constructor() {
    this.res = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "res" } : (
      /* istanbul ignore next */
      {}
    )), {
      defaultValue: 0,
      stream: async (param) => {
        const sum = signal({ value: 0 });
        (async () => {
          for await (const n of giveNumbers()) {
            sum.update((o) => ({ value: o.value + n }));
          }
        })();
        return sum;
      }
    }));
    this._ = effect(
      () => {
        console.log("res", this.res.value());
      },
      ...ngDevMode ? [{ debugName: "_" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function StreamResourceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StreamResourceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StreamResourceComponent, selectors: [["se-stream-resource"]], decls: 2, vars: 0, template: function StreamResourceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "stream-resource works!");
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StreamResourceComponent, [{
    type: Component,
    args: [{ selector: "se-stream-resource", imports: [], template: ` <p>stream-resource works!</p> `, styles: ["/* src/app/stream-resource/stream-resource.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StreamResourceComponent, { className: "StreamResourceComponent", filePath: "src/app/stream-resource/stream-resource.component.ts", lineNumber: 9 });
})();
async function* giveNumbers() {
  let check = 0;
  for (let i = 0; i < 15e5; i++) {
    yield await Promise.resolve(i);
    check += i;
  }
  console.log("check", check);
}
export {
  StreamResourceComponent
};
