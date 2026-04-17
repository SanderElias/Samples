import {
  SampledataService
} from "./chunk-CPDBIGM3.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  RangeValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-UZTLWWSK.js";
import {
  AsyncPipe
} from "./chunk-V6OJJHGF.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  shareReplay,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EIP4NRL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/rvt/reactive/reactive.component.ts
function ReactiveComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main")(1, "h1");
    \u0275\u0275text(2, "Reactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 0);
    \u0275\u0275listener("ngSubmit", function ReactiveComponent_Conditional_0_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(4, "label")(5, "span");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 1);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label")(9, "span");
    \u0275\u0275text(10, "Date of birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 2);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label")(13, "span");
    \u0275\u0275text(14, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 3);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label")(17, "span");
    \u0275\u0275text(18, "Favorite Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 4);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label")(21, "span");
    \u0275\u0275element(22, "input", 5);
    \u0275\u0275controlCreate();
    \u0275\u0275text(23, " Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 6);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 7);
    \u0275\u0275listener("click", function ReactiveComponent_Conditional_0_Template_button_click_29_listener($event) {
      const data_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.updateForm(data_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(30, " Reset form ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 8);
    \u0275\u0275text(32, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Level ", \u0275\u0275pipeBind1(27, 3, ctx_r1.level$));
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.form.valid);
  }
}
var ReactiveComponent = class _ReactiveComponent {
  constructor() {
    this.ds = inject(SampledataService);
    this.data$ = this.ds.data$.pipe(shareReplay({ refCount: true, bufferSize: 1 }));
    this.form = new FormGroup({});
    this.sub = this.data$.subscribe((data) => {
      this.updateForm(data);
      this.level$ = this.form.get("level").valueChanges.pipe(startWith(data.level));
    });
  }
  updateForm(data) {
    this.form = new FormGroup({
      name: new FormControl(data.name, Validators.required),
      dob: new FormControl(data.dob.toISOString().slice(0, 10)),
      email: new FormControl(data.email),
      favNumber: new FormControl(data.favNumber),
      admin: new FormControl(data.admin),
      level: new FormControl(data.level)
    });
  }
  save() {
    console.log(`saving reactive ${JSON.stringify(this.form.value, void 0, 2)}`);
    const dob = new Date(this.form.value.dob);
    this.ds.save(__spreadProps(__spreadValues({}, this.form.value), { dob }));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  static {
    this.\u0275fac = function ReactiveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactiveComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactiveComponent, selectors: [["se-reactive"]], decls: 2, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["name", "name", "type", "text", "placeholder", "Name", "formControlName", "name"], ["name", "dob", "type", "date", "placeholder", "Date of birth", "formControlName", "dob"], ["name", "email", "type", "email", "placeholder", "Email Address", "formControlName", "email"], ["name", "favNumber", "type", "number", "placeholder", "Favorite Number", "formControlName", "favNumber"], ["name", "admin", "type", "checkbox", "formControlName", "admin"], ["name", "level", "type", "range", "min", "1", "max", "5", "formControlName", "level"], ["type", "cancel", 3, "click"], ["type", "submit", 3, "disabled"]], template: function ReactiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ReactiveComponent_Conditional_0_Template, 33, 5, "main");
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.data$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AsyncPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nform[_ngcontent-%COMP%] {\n  border: 2px solid #d7b52b;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  accent-color: #2bd75d;\n  width: 30rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: auto;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\nlabel[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 0.25rem;\n}\n.ng-invalid.ng-dirty[_ngcontent-%COMP%]:not(form) {\n  background-color: rgb(143, 70, 70);\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #2bd75d;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #d7b52b;\n  cursor: not-allowed;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveComponent, [{
    type: Component,
    args: [{ selector: "se-reactive", imports: [AsyncPipe, ReactiveFormsModule], template: `
    @if (data$ | async; as data) {
      <main>
        <h1>Reactive</h1>
        <form [formGroup]="form" (ngSubmit)="save()">
          <label>
            <span>Name</span>
            <input
              name="name"
              type="text"
              placeholder="Name"
              formControlName="name"
            />
          </label>
          <label>
            <span>Date of birth</span>
            <input
              name="dob"
              type="date"
              placeholder="Date of birth"
              formControlName="dob"
            />
          </label>
          <label>
            <span>Email Address</span>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              formControlName="email"
            />
          </label>
          <label>
            <span>Favorite Number</span>
            <input
              name="favNumber"
              type="number"
              placeholder="Favorite Number"
              formControlName="favNumber"
            />
          </label>
          <label>
            <span
              ><input name="admin" type="checkbox" formControlName="admin" />
              Admin</span
            >
          </label>
          <label>
            <span>Level {{ level$ | async }}</span>
            <input
              name="level"
              type="range"
              min="1"
              max="5"
              formControlName="level"
            />
          </label>
          <button
            type="cancel"
            (click)="updateForm(data); $event.preventDefault()"
          >
            Reset form
          </button>
          <button type="submit" [disabled]="!form.valid">Submit</button>
        </form>
      </main>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/rvt/reactive/reactive.component.css */\n:host {\n  display: block;\n}\nform {\n  border: 2px solid #d7b52b;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  accent-color: #2bd75d;\n  width: 30rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: auto;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\nlabel > *:nth-child(2) {\n  margin-left: 0.25rem;\n}\n.ng-invalid.ng-dirty:not(form) {\n  background-color: rgb(143, 70, 70);\n}\nbutton[type=submit] {\n  background-color: #2bd75d;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem;\n}\nbutton:disabled {\n  background-color: #d7b52b;\n  cursor: not-allowed;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactiveComponent, { className: "ReactiveComponent", filePath: "src/app/rvt/reactive/reactive.component.ts", lineNumber: 90 });
})();

export {
  ReactiveComponent
};
