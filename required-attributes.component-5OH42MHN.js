import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  signal,
  take,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/required-attributes/required-attributes/wait-for-it/wait-for-it.component.ts
function WaitForItComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r1.propName, " - ", item_r1.value);
  }
}
function WaitForItComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, WaitForItComponent_Conditional_0_For_2_Template, 2, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.goodToGo());
  }
}
function WaitForItComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Loading ...");
    \u0275\u0275domElementEnd();
  }
}
var WaitForItComponent = class _WaitForItComponent {
  constructor() {
    this.someVar = input(
      ...ngDevMode ? [void 0, { debugName: "someVar" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.prop1 = input(
      "",
      ...ngDevMode ? [{ debugName: "prop1" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.prop2 = input(
      "",
      ...ngDevMode ? [{ debugName: "prop2" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.prop3 = input(
      "",
      ...ngDevMode ? [{ debugName: "prop3" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#collectedProps = computed(
      () => {
        const createProp = (propName, value) => value ? { propName, value } : void 0;
        return [
          createProp("prop1", this.prop1()),
          createProp("prop2", this.prop2()),
          createProp("prop3", this.prop3())
        ].filter((p) => !!p);
      },
      ...ngDevMode ? [{ debugName: "#collectedProps" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.requiredProps = computed(
      () => this.#collectedProps(),
      ...ngDevMode ? [{ debugName: "requiredProps" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.goodToGo = computed(
      () => {
        const props = this.#collectedProps();
        return props.length === 3 ? props : void 0;
      },
      ...ngDevMode ? [{ debugName: "goodToGo" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #collectedProps;
  static {
    this.\u0275fac = function WaitForItComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WaitForItComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WaitForItComponent, selectors: [["app-wait-for-it"]], inputs: { someVar: [1, "someVar"], prop1: [1, "prop1"], prop2: [1, "prop2"], prop3: [1, "prop3"] }, decls: 2, vars: 1, template: function WaitForItComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, WaitForItComponent_Conditional_0_Template, 3, 0, "ul")(1, WaitForItComponent_Conditional_1_Template, 2, 0, "h2");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.goodToGo() !== void 0 ? 0 : 1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaitForItComponent, [{
    type: Component,
    args: [{ selector: "app-wait-for-it", changeDetection: ChangeDetectionStrategy.OnPush, imports: [], template: "@if (goodToGo()!==undefined) {\n  <ul>\n    @for (item of goodToGo(); track item) {\n      <li>{{ item.propName }} - {{ item.value }}</li>\n    }\n  </ul>\n} @else {\n  <h2>Loading ...</h2>\n}\n" }]
  }], null, { someVar: [{ type: Input, args: [{ isSignal: true, alias: "someVar", required: false }] }], prop1: [{ type: Input, args: [{ isSignal: true, alias: "prop1", required: false }] }], prop2: [{ type: Input, args: [{ isSignal: true, alias: "prop2", required: false }] }], prop3: [{ type: Input, args: [{ isSignal: true, alias: "prop3", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WaitForItComponent, { className: "WaitForItComponent", filePath: "src/app/required-attributes/required-attributes/wait-for-it/wait-for-it.component.ts", lineNumber: 15 });
})();

// src/app/required-attributes/required-attributes/required-attributes.component.ts
var RequiredAttributesComponent = class _RequiredAttributesComponent {
  constructor() {
    this.reqProps = signal(
      [],
      ...ngDevMode ? [{ debugName: "reqProps" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fillthem = timer(1e3, 1e3).pipe(take(4), tap(() => this.reqProps.update((props) => [
      ...props,
      "prop 1" + Math.ceil(Math.random() * 100)
    ]))).subscribe();
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function RequiredAttributesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequiredAttributesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequiredAttributesComponent, selectors: [["app-required-attributes"]], decls: 3, vars: 3, consts: [[3, "prop1", "prop2", "prop3"]], template: function RequiredAttributesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Host for actual components");
        \u0275\u0275elementEnd();
        \u0275\u0275element(2, "app-wait-for-it", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("prop1", ctx.reqProps()[0])("prop2", ctx.reqProps()[1])("prop3", ctx.reqProps()[2]);
      }
    }, dependencies: [WaitForItComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredAttributesComponent, [{
    type: Component,
    args: [{ selector: "app-required-attributes", changeDetection: ChangeDetectionStrategy.OnPush, imports: [WaitForItComponent], template: '<h1>Host for actual components</h1>\n\n<app-wait-for-it\n  [prop1]="reqProps()[0]"\n  [prop2]="reqProps()[1]"\n  [prop3]="reqProps()[2]"\n></app-wait-for-it>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequiredAttributesComponent, { className: "RequiredAttributesComponent", filePath: "src/app/required-attributes/required-attributes/required-attributes.component.ts", lineNumber: 15 });
})();
export {
  RequiredAttributesComponent
};
