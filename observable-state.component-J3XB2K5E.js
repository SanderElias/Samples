import {
  createGetStateMethod,
  createSetStateMethod
} from "./chunk-TK2MUREH.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  debounceTime,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/observable-state/observable-sate/observable-state.component.ts
var ObservableStateComponent = class _ObservableStateComponent {
  constructor() {
    this.state$ = new BehaviorSubject({
      count: 5,
      msg: "",
      overMax: false,
      underMin: false,
      max: 10,
      min: 2
    });
    this.updateMessage = (state) => {
      const msg = state.overMax ? "too high!" : state.underMin ? "too low!" : "";
      this.setState("msg", msg);
    };
    this.viewModel$ = this.state$.pipe(
      debounceTime(5),
      // <== don't refire on "sync" state changes.
      /** use side-effect to check the state */
      tap((state) => this.checkState()),
      /** another side effect to update the messgage */
      tap(this.updateMessage)
    );
    this.setState = createSetStateMethod(this.state$);
    this.getState = createGetStateMethod(this.state$);
  }
  /**
   * I need multiple things form the state here,
   * so, here I'm using destructuring on the complete state
   */
  async checkState() {
    const { count, min, max, overMax, underMin } = await this.getState();
    if (count > max !== overMax) {
      this.setState("overMax", count > max);
    }
    if (count < min !== underMin) {
      this.setState("underMin", count < min);
    }
  }
  /**
   * Sample method that does processing
   * this is a silly example, in a real world app, there is usually more processing
   */
  async up() {
    const count = await this.getState("count");
    this.setState("count", count + 1);
  }
  async down() {
    const count = await this.getState("count");
    this.setState("count", count - 1);
    this.setState({ min: 3, max: 5 });
  }
  static {
    this.\u0275fac = function ObservableStateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ObservableStateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObservableStateComponent, selectors: [["app-observable-state"]], decls: 2, vars: 0, template: function ObservableStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Observable state");
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\nsection[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 150px 150px 150px;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObservableStateComponent, [{
    type: Component,
    args: [{ selector: "app-observable-state", changeDetection: ChangeDetectionStrategy.OnPush, imports: [], template: '<h1>Observable state</h1>\n\n<!-- @if (viewModel$ | async; as vm) {\n  <main>\n    <section class="display">\n      <button (click)="down()" [disabled]="vm.underMin">-</button>\n      <h3>{{ vm.count }}</h3>\n      <button (click)="up()" [disabled]="vm.overMax">+</button>\n      <br />\n    </section>\n    <h1>{{ vm.msg }}</h1>\n    <br />\n    <br />\n    <p>The raw viewModel:</p>\n    <hr />\n    <pre><code>{{vm|json}}</code></pre>\n  </main>\n} -->\n\n<style>\n  section {\n    display: grid;\n    grid-template-columns: 150px 150px 150px;\n  }\n  section h3 {\n    text-align: center;\n    font-size: 30px;\n  }\n</style>\n', styles: ["/* angular:styles/component:css;ba5dd187917157e2d5fcda7691ef0e98fdbf51f2ad7896e280ce2ffd786ff94f;/home/runner/work/Samples/Samples/src/app/observable-state/observable-sate/observable-state.component.html */\nsection {\n  display: grid;\n  grid-template-columns: 150px 150px 150px;\n}\nsection h3 {\n  text-align: center;\n  font-size: 30px;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObservableStateComponent, { className: "ObservableStateComponent", filePath: "src/app/observable-state/observable-sate/observable-state.component.ts", lineNumber: 34 });
})();
export {
  ObservableStateComponent
};
