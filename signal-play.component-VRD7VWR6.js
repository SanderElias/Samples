import {
  JsonPipe
} from "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-4YMCON7N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/signal-play/json-place-holder.service.ts
var JsonPlaceHolderService = class _JsonPlaceHolderService {
  constructor() {
    this.usersResource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "usersResource" } : (
      /* istanbul ignore next */
      {}
    )), { loader: loadUsers }));
    this.getUser = (id) => resource({
      params: id,
      loader: loadUser
    });
    this.getUserById = (id) => resource({
      params: id,
      loader: loadUser
    });
  }
  static {
    this.\u0275fac = function JsonPlaceHolderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JsonPlaceHolderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JsonPlaceHolderService, factory: _JsonPlaceHolderService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonPlaceHolderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var jphUrl = (path) => `https://jsonplaceholder.typicode.com/${path}`;
var loadUser = async ({ params, abortSignal }) => {
  const res = await fetch(jphUrl(`users/${params}`), { signal: abortSignal });
  if (!res.ok) {
    throw new Error(`Failed to load user's data, ${res.status} ${res.statusText}`);
  }
  const user = await res.json();
  return user;
};
var loadUsers = () => fetch(jphUrl("users")).then((r) => r.json());

// src/app/signal-play/signal-play.component.ts
var SignalPlayComponent = class _SignalPlayComponent {
  constructor() {
    this.jph = inject(JsonPlaceHolderService);
    this.id = signal(
      1,
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.userResource = this.jph.getUser(this.id);
    this.$user = computed(
      () => this.userResource.value() ?? {},
      ...ngDevMode ? [{ debugName: "$user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.$state = computed(
      () => this.userResource.status(),
      ...ngDevMode ? [{ debugName: "$state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.$availableUserCount = computed(
      () => this.jph.usersResource.value()?.length ?? 0,
      ...ngDevMode ? [{ debugName: "$availableUserCount" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.relId = (n = 1) => {
      const currentId = +this.id() || 0;
      return Math.max(1, Math.min(this.$availableUserCount(), currentId + n));
    };
  }
  next() {
    this.id.set(this.relId(1));
  }
  prev() {
    this.id.set(this.relId(-1));
  }
  static {
    this.\u0275fac = function SignalPlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignalPlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalPlayComponent, selectors: [["se-signal-play"]], decls: 12, vars: 5, consts: [[3, "click"]], template: function SignalPlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h3");
        \u0275\u0275text(1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(2, "hr");
        \u0275\u0275domElementStart(3, "pre")(4, "code");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "json");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElement(7, "hr");
        \u0275\u0275domElementStart(8, "button", 0);
        \u0275\u0275domListener("click", function SignalPlayComponent_Template_button_click_8_listener() {
          return ctx.next();
        });
        \u0275\u0275text(9, "next");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(10, "button", 0);
        \u0275\u0275domListener("click", function SignalPlayComponent_Template_button_click_10_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(11, "prev");
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("Available:", ctx.$availableUserCount(), " current:", ctx.id());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx.$user()));
      }
    }, dependencies: [JsonPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalPlayComponent, [{
    type: Component,
    args: [{ selector: "se-signal-play", imports: [JsonPipe], template: `
    <h3>Available:{{ $availableUserCount() }} current:{{ id() }}</h3>
    <hr />
    <pre><code>{{$user()|json}}</code></pre>
    <hr />

    <button (click)="next()">next</button>
    <button (click)="prev()">prev</button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-play/signal-play.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalPlayComponent, { className: "SignalPlayComponent", filePath: "src/app/signal-play/signal-play.component.ts", lineNumber: 27 });
})();
export {
  SignalPlayComponent as default
};
