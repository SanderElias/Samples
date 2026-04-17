import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  Output,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5EIP4NRL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/stepper/step-data.service.ts
var StepDataService = class _StepDataService {
  constructor() {
    this.stepsMap = signal(/* @__PURE__ */ new Map(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stepsMap" } : (
      /* istanbul ignore next */
      {}
    )), { equal: () => false }));
    this.selected = signal(
      -1,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.register = (step) => this.stepsMap.update((x) => {
      x.set(step().id, step);
      if (step().id === this.selected())
        step().selected.set(true);
      return x;
    });
    this.unRegister = (step) => this.stepsMap.update((x) => {
      x.delete(step().id);
      return x;
    });
    this.select = (id) => {
      const oldSelected = this.selected();
      if (!id || oldSelected === id)
        return;
      const stepsMap = this.stepsMap();
      this.selected.set(id ?? -1);
      const old = stepsMap.get(oldSelected)?.();
      if (old) {
        old.selected.set(false);
      }
      const toSelect = stepsMap.get(id)?.();
      if (toSelect) {
        toSelect.selected.set(true);
      }
    };
    this.getActive = computed(
      () => this.stepsMap().get(this.selected())?.(),
      ...ngDevMode ? [{ debugName: "getActive" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function StepDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StepDataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StepDataService, factory: _StepDataService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepDataService, [{
    type: Injectable
  }], null, null);
})();

// src/app/stepper/step/step.component.ts
var _c0 = ["*"];
var StepComponent = class _StepComponent {
  constructor() {
    this.stepId = input.required(
      ...ngDevMode ? [{ debugName: "stepId" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sd = inject(StepDataService);
    this.disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
      /* istanbul ignore next */
      {}
    )), { transform: booleanAttribute }));
    this.stepperData = computed(
      () => {
        const id = this.stepId();
        return untracked(() => ({
          id,
          active: signal(true),
          selected: signal(false),
          disabled: this.disabled,
          touched: signal(false)
        }));
      },
      ...ngDevMode ? [{ debugName: "stepperData" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isSelected = computed(
      () => this.stepperData().selected(),
      ...ngDevMode ? [{ debugName: "isSelected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#dummy = afterNextRender(() => {
      this.sd.register(this.stepperData);
    });
  }
  #dummy;
  select() {
    if (this.disabled())
      return;
    this.stepperData().touched.set(true);
    this.sd.select(this.stepId());
  }
  static {
    this.\u0275fac = function StepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepComponent, selectors: [["se-step"]], hostVars: 6, hostBindings: function StepComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function StepComponent_click_HostBindingHandler() {
          return ctx.select();
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("selected", ctx.isSelected())("disabled", ctx.disabled())("touched", ctx.stepperData().touched());
      }
    }, inputs: { stepId: [1, "stepId"], disabled: [1, "disabled"] }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "circle"]], template: function StepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElement(0, "span", 0);
        \u0275\u0275projection(1);
      }
    }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #3f3b3b;\n  border: 1px solid #cdcbcb;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n[_nghost-%COMP%]    > [_ngcontent-%COMP%]:first-child:before {\n  content: "";\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 1rem;\n  background-color: #69b6d5;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:last-child::after {\n  display: inline-flexbox;\n  position: relative;\n  top: -1.45rem;\n  right: -0.75rem;\n  font-weight: bold;\n  width: 1rem;\n  height: 1rem;\n  content: " ";\n  border-radius: 50%;\n  color: white;\n  border: none;\n}\n.disabled[_nghost-%COMP%] {\n  opacity: 0.5;\n}\n.selected[_nghost-%COMP%] {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n.selected[_nghost-%COMP%]    > [_ngcontent-%COMP%]:first-child:before {\n  background-color: #6cb952;\n}\n.touched[_nghost-%COMP%]   [_ngcontent-%COMP%]:last-child::after {\n  content: "\\2713";\n  background-color: #6cb952;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepComponent, [{
    type: Component,
    args: [{ selector: "se-step", imports: [], template: ` <span class="circle"></span> <ng-content /> `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[class.selected]": "isSelected()",
      "[class.disabled]": "disabled()",
      "[class.touched]": "stepperData().touched()",
      "(click)": "select()"
    }, styles: ['/* src/app/stepper/step/step.component.css */\n:host {\n  display: block;\n  background-color: #3f3b3b;\n  border: 1px solid #cdcbcb;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n:host > :first-child:before {\n  content: "";\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 1rem;\n  background-color: #69b6d5;\n}\n:host :last-child::after {\n  display: inline-flexbox;\n  position: relative;\n  top: -1.45rem;\n  right: -0.75rem;\n  font-weight: bold;\n  width: 1rem;\n  height: 1rem;\n  content: " ";\n  border-radius: 50%;\n  color: white;\n  border: none;\n}\n:host.disabled {\n  opacity: 0.5;\n}\n:host.selected {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n:host.selected > :first-child:before {\n  background-color: #6cb952;\n}\n:host.touched :last-child::after {\n  content: "\\2713";\n  background-color: #6cb952;\n}\n'] }]
  }], null, { stepId: [{ type: Input, args: [{ isSignal: true, alias: "stepId", required: true }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepComponent, { className: "StepComponent", filePath: "src/app/stepper/step/step.component.ts", lineNumber: 28 });
})();

// src/app/stepper/steps/steps.component.ts
var _c02 = ["*"];
var StepsComponent = class _StepsComponent {
  constructor() {
    this.sd = inject(StepDataService);
    this.selectedStepId = model(
      -1,
      ...ngDevMode ? [{ debugName: "selectedStepId" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#dummy = afterRenderEffect(() => untracked(() => this.sd.select(this.selectedStepId())));
    this.#dummy1 = afterRenderEffect(() => {
      const newId = this.sd.selected();
      if (newId !== this.selectedStepId()) {
        untracked(() => this.selectedStepId.set(newId));
      }
    });
  }
  // I really wished this would work
  // #dummy = syncSignals(this.selectedStepId, this.sd.selected)
  #dummy;
  #dummy1;
  static {
    this.\u0275fac = function StepsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StepsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepsComponent, selectors: [["se-steps"]], inputs: { selectedStepId: [1, "selectedStepId"] }, outputs: { selectedStepId: "selectedStepIdChange" }, features: [\u0275\u0275ProvidersFeature([StepDataService])], ngContentSelectors: _c02, decls: 1, vars: 0, template: function StepsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsComponent, [{
    type: Component,
    args: [{ selector: "se-steps", imports: [], template: ` <ng-content /> `, changeDetection: ChangeDetectionStrategy.OnPush, providers: [StepDataService], styles: ["/* src/app/stepper/steps/steps.component.css */\n:host {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n}\n"] }]
  }], null, { selectedStepId: [{ type: Input, args: [{ isSignal: true, alias: "selectedStepId", required: false }] }, { type: Output, args: ["selectedStepIdChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepsComponent, { className: "StepsComponent", filePath: "src/app/stepper/steps/steps.component.ts", lineNumber: 23 });
})();

// src/app/stepper/stepper.component.ts
var _forTrack0 = ($index, $item) => $item.stepNumber;
function StepperComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "se-step", 1)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275property("stepId", step_r1.stepNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r1.stepName);
  }
}
function StepperComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "se-step", 1)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    \u0275\u0275property("stepId", step_r2.stepNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r2.stepName);
  }
}
function StepperComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 4);
    \u0275\u0275listener("click", function StepperComponent_For_19_Template_label_click_0_listener() {
      const step_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setStep(step_r4.stepNumber));
    });
    \u0275\u0275elementStart(1, "span")(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r4.stepNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r4.stepName);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r4.radioStep() === step_r4.stepNumber)("value", step_r4.stepNumber);
  }
}
var StepperComponent = class _StepperComponent {
  constructor() {
    this.steps = [
      { stepNumber: 1, stepName: "Step 1" },
      { stepNumber: 2, stepName: "Step 2" },
      { stepNumber: 3, stepName: "Step 3" }
    ];
    this.currentStep = signal(
      1,
      ...ngDevMode ? [{ debugName: "currentStep" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.radioStep = signal(
      1,
      ...ngDevMode ? [{ debugName: "radioStep" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setStep(step) {
    console.log("setStep", step);
    this.radioStep.set(step);
  }
  static {
    this.\u0275fac = function StepperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StepperComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepperComponent, selectors: [["se-stepper"]], decls: 20, vars: 4, consts: [[3, "selectedStepIdChange"], [3, "stepId"], ["disabled", "", 3, "stepId"], [3, "selectedStepIdChange", "selectedStepId"], [3, "click"], [1, "id"], ["name", "testGroep", "type", "radio", 3, "checked", "value"]], template: function StepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "se-steps", 0);
        \u0275\u0275listener("selectedStepIdChange", function StepperComponent_Template_se_steps_selectedStepIdChange_2_listener($event) {
          return ctx.otherStep = $event;
        });
        \u0275\u0275repeaterCreate(3, StepperComponent_For_4_Template, 3, 2, "se-step", 1, _forTrack0);
        \u0275\u0275elementStart(5, "se-step", 2)(6, "span");
        \u0275\u0275text(7, "Step 4");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "h1");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "se-steps", 3);
        \u0275\u0275twoWayListener("selectedStepIdChange", function StepperComponent_Template_se_steps_selectedStepIdChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.currentStep, $event) || (ctx.currentStep = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(11, StepperComponent_For_12_Template, 3, 2, "se-step", 1, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "br")(14, "br");
        \u0275\u0275elementStart(15, "h3");
        \u0275\u0275text(16, "Radio buttons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "fieldset");
        \u0275\u0275repeaterCreate(18, StepperComponent_For_19_Template, 6, 4, "label", null, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("no default selected ", ctx.otherStep);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(2);
        \u0275\u0275property("stepId", 4);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("With selected ", ctx.currentStep());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("selectedStepId", ctx.currentStep);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.steps);
      }
    }, dependencies: [StepsComponent, StepComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nfieldset[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  border: none;\n  border-radius: 1rem;\n  padding: 1rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  width: fit-content;\n  background-color: #3f3b3b;\n  border: 1px solid #cdcbcb;\n  border-radius: 1rem;\n  padding: 1rem;\n}\nlabel[_ngcontent-%COMP%]   span.id[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.2rem;\n  height: 1.2rem;\n  border-radius: 1.2rem;\n  background-color: #69b6d5;\n}\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: -150vw;\n  width: 0;\n  height: 0;\n}\nlabel[_ngcontent-%COMP%]:has(input:checked) {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\nlabel[_ngcontent-%COMP%]:has(input:checked)   span.id[_ngcontent-%COMP%] {\n  background-color: #6cb952;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{ selector: "se-stepper", imports: [StepsComponent, StepComponent], template: `
    <h1>no default selected {{ otherStep }}</h1>
    <se-steps (selectedStepIdChange)="otherStep = $event">
      @for (step of steps; track step.stepNumber) {
        <se-step [stepId]="step.stepNumber">
          <span> {{ step.stepName }}</span>
        </se-step>
      }
      <se-step [stepId]="4" disabled>
        <span>Step 4</span>
      </se-step>
    </se-steps>
    <h1>With selected {{ currentStep() }}</h1>
    <se-steps [(selectedStepId)]="currentStep">
      @for (step of steps; track step.stepNumber) {
        <se-step [stepId]="step.stepNumber">
          <span> {{ step.stepName }}</span>
        </se-step>
      }
    </se-steps>
    <br /><br />
    <h3>Radio buttons</h3>
    <fieldset>
      @for (step of steps; track step.stepNumber) {
        <label (click)="setStep(step.stepNumber)">
          <span
            ><span class="id">{{ step.stepNumber }}</span>
            {{ step.stepName }}</span
          >
          <input
            name="testGroep"
            type="radio"
            [checked]="radioStep() === step.stepNumber"
            [value]="step.stepNumber"
          />
        </label>
      }
    </fieldset>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/stepper/stepper.component.css */\n:host {\n  display: block;\n}\nfieldset {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  border: none;\n  border-radius: 1rem;\n  padding: 1rem;\n}\nlabel {\n  display: block;\n  width: fit-content;\n  background-color: #3f3b3b;\n  border: 1px solid #cdcbcb;\n  border-radius: 1rem;\n  padding: 1rem;\n}\nlabel span.id {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.2rem;\n  height: 1.2rem;\n  border-radius: 1.2rem;\n  background-color: #69b6d5;\n}\nlabel input {\n  display: block;\n  position: absolute;\n  left: -150vw;\n  width: 0;\n  height: 0;\n}\nlabel:has(input:checked) {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\nlabel:has(input:checked) span.id {\n  background-color: #6cb952;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepperComponent, { className: "StepperComponent", filePath: "src/app/stepper/stepper.component.ts", lineNumber: 51 });
})();
export {
  StepperComponent
};
