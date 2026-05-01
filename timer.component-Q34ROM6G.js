import {
  HttpClient,
  httpResource
} from "./chunk-KVEFCSSA.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injectable,
  computed,
  firstValueFrom,
  inject,
  linkedSignal,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/timer/endpoint-action-handler.ts
var endpointHandler = ({ serverCall, actionType, actionSignal }) => {
  if (actionSignal().running) {
    throw new Error("Another action is already running");
  }
  actionSignal.set({ running: true, actionType });
  return firstValueFrom(serverCall).then((data) => {
    const lastResult = { success: true, data };
    actionSignal.set({ running: false, actionType, lastResult });
    return lastResult;
  }).catch((e) => {
    const lastResult = { success: false, error: e };
    actionSignal.set({ running: false, actionType, lastResult });
    return lastResult;
  });
};
var successHandler = (action) => (result) => {
  if (result.success) {
    action(result.data);
  }
  return result;
};

// src/app/timer/timer.component.ts
var second = 1e3;
var minute = 60 * second;
var hour = 60 * minute;
var day = 24 * hour;
var TimerComponent = class _TimerComponent {
  constructor() {
    this.des = inject(DestroyRef);
    this.downFrom = 1 * hour;
    this.startTime = Date.now();
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.trueDuration = computed(
      () => +this.now() - +this.startTime - (this.downFrom || 0),
      ...ngDevMode ? [{ debugName: "trueDuration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration = computed(
      () => Math.abs(this.trueDuration()),
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.days = computed(
      () => Math.floor(this.duration() / day),
      ...ngDevMode ? [{ debugName: "days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hours = computed(
      () => Math.floor(this.duration() % day / hour),
      ...ngDevMode ? [{ debugName: "hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.minutes = computed(
      () => Math.floor(this.duration() % hour / minute),
      ...ngDevMode ? [{ debugName: "minutes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.seconds = computed(
      () => Math.floor(this.duration() % minute / second),
      ...ngDevMode ? [{ debugName: "seconds" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.milliseconds = computed(
      () => this.duration() % second,
      ...ngDevMode ? [{ debugName: "milliseconds" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.int = setInterval(() => {
      const now = Date.now();
      this.now.set(now);
      const durarion = this.duration();
      const down = this.downFrom;
      console.log({
        durarion,
        now,
        down
      });
    }, 500);
    this._ = this.des.onDestroy(() => {
      clearInterval(this.int);
    });
  }
  static {
    this.\u0275fac = function TimerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimerComponent, selectors: [["se-timer"]], decls: 15, vars: 5, template: function TimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Timer Component");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "p");
        \u0275\u0275text(3, "Elapsed Time:");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "ul")(5, "li");
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "li");
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "li");
        \u0275\u0275text(10);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "li");
        \u0275\u0275text(12);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "li");
        \u0275\u0275text(14);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.days(), " days");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.hours(), " hours");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.minutes(), " minutes");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.seconds(), " seconds");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.milliseconds(), " milliseconds");
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimerComponent, [{
    type: Component,
    args: [{ selector: "se-timer", imports: [], template: `<h1>Timer Component</h1>
    <p>Elapsed Time:</p>
    <ul>
      <li>{{ days() }} days</li>
      <li>{{ hours() }} hours</li>
      <li>{{ minutes() }} minutes</li>
      <li>{{ seconds() }} seconds</li>
      <li>{{ milliseconds() }} milliseconds</li>
    </ul> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/timer/timer.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimerComponent, { className: "TimerComponent", filePath: "src/app/timer/timer.component.ts", lineNumber: 34 });
})();
var UserService = class _UserService {
  constructor() {
    this.#http = inject(HttpClient);
    this.#url = (id) => `https://api.example.com/users/${id}`;
    this.#base = signal(
      signal(void 0).asReadonly(),
      ...ngDevMode ? [{ debugName: "#base" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#userId = linkedSignal(
      () => this.#base()(),
      ...ngDevMode ? [{ debugName: "#userId" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#userUrl = computed(
      () => {
        const id = this.#userId();
        return id ? this.#url(id) : void 0;
      },
      ...ngDevMode ? [{ debugName: "#userUrl" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.userResource = httpResource(
      this.#userUrl,
      ...ngDevMode ? [{ debugName: "userResource" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.action = signal(
      { running: false },
      ...ngDevMode ? [{ debugName: "action" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #http;
  #url;
  #base;
  #userId;
  #userUrl;
  link(idSignal) {
    this.#base.set(idSignal);
    return this;
  }
  create(user) {
    return endpointHandler({
      actionSignal: this.action,
      serverCall: this.#http.post(this.#url(user.id), user),
      actionType: "create"
    }).then(successHandler((data) => {
      this.#userId.set(data.id);
      this.userResource.value.set(data);
    }));
  }
  read(id) {
    this.#userId.set(id);
  }
  update(user) {
    if (this.userResource.value().id !== user.id) {
      throw new Error("Do you really want to get fired? Updating user id does not match the linked user id.");
    }
    return endpointHandler({
      serverCall: this.#http.put(this.#url(user.id), user),
      actionType: "update",
      actionSignal: this.action
    }).then(successHandler((serverUser) => this.userResource.value.set(serverUser)));
  }
  delete(id) {
    return endpointHandler({
      serverCall: this.#http.delete(this.#url(id)),
      actionType: "delete",
      actionSignal: this.action
    }).then(successHandler(() => {
      this.#userId.set(void 0);
      this.userResource.value.set(void 0);
    }));
  }
  static {
    this.\u0275fac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable
  }], null, null);
})();
var usersList = class _usersList {
  constructor() {
    this.#http = inject(HttpClient);
    this.#url = (id) => `https://api.example.com/users/${id}`;
    this.usersResource = httpResource(
      () => "https://api.example.com/users?orderBy=name",
      ...ngDevMode ? [{ debugName: "usersResource" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.action = signal(
      { running: false },
      ...ngDevMode ? [{ debugName: "action" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #http;
  #url;
  create(user) {
    return endpointHandler({
      actionSignal: this.action,
      serverCall: this.#http.post(this.#url(user.id), user),
      actionType: "create"
    }).then(successHandler((data) => {
      const id = data;
      this.usersResource.value.update((users) => [...users || [], id]);
    }));
  }
  update(user) {
    return endpointHandler({
      serverCall: this.#http.put(this.#url(user.id), user),
      actionType: "update",
      actionSignal: this.action
    });
  }
  static {
    this.\u0275fac = function usersList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _usersList)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _usersList, factory: _usersList.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(usersList, [{
    type: Injectable
  }], null, null);
})();
export {
  TimerComponent,
  UserService,
  usersList
};
