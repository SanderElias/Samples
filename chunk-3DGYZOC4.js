import {
  SampledataService
} from "./chunk-E2OUYD6A.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RangeValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-RUC3MGHW.js";
import {
  AsyncPipe,
  DatePipe
} from "./chunk-PESRSGYJ.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LHOZ36SL.js";

// src/app/rvt/template/template.component.ts
function TemplateComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main")(1, "h1");
    \u0275\u0275text(2, "Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 1, 0);
    \u0275\u0275listener("ngSubmit", function TemplateComponent_Conditional_0_Template_form_ngSubmit_3_listener() {
      const data_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save(data_r2));
    });
    \u0275\u0275elementStart(5, "label")(6, "span");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 2);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateComponent_Conditional_0_Template_input_ngModelChange_8_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(data_r2.name, $event) || (data_r2.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label")(10, "span");
    \u0275\u0275text(11, "Date of birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 3);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275listener("ngModel", function TemplateComponent_Conditional_0_Template_input_ngModel_12_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(data_r2.dob = $event.target.valueAsDate);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label")(15, "span");
    \u0275\u0275text(16, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateComponent_Conditional_0_Template_input_ngModelChange_17_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(data_r2.email, $event) || (data_r2.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label")(19, "span");
    \u0275\u0275text(20, "Favorite Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateComponent_Conditional_0_Template_input_ngModelChange_21_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(data_r2.favNumber, $event) || (data_r2.favNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label")(23, "span")(24, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateComponent_Conditional_0_Template_input_ngModelChange_24_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(data_r2.admin, $event) || (data_r2.admin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275text(25, " Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label")(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateComponent_Conditional_0_Template_input_ngModelChange_29_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(data_r2.level, $event) || (data_r2.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 8);
    \u0275\u0275listener("click", function TemplateComponent_Conditional_0_Template_button_click_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.reset$.next(void 0);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(31, " Reset form ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 9);
    \u0275\u0275listener("click", function TemplateComponent_Conditional_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const form_r4 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reveal(form_r4));
    });
    \u0275\u0275text(33, " Submit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx;
    const form_r4 = \u0275\u0275reference(4);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", data_r2.name);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind2(13, 8, data_r2.dob, "yyyy-MM-dd"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", data_r2.email);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r2.favNumber);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.admin);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Level ", data_r2.level);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", data_r2.level);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !form_r4.valid);
  }
}
var TemplateComponent = class _TemplateComponent {
  constructor() {
    this.reset$ = new BehaviorSubject(void 0);
    this.ds = inject(SampledataService);
    this.data$ = this.reset$.pipe(switchMap(() => this.ds.data$));
  }
  save(data) {
    console.log(`saving template ${JSON.stringify(data, void 0, 2)}`);
    this.ds.save(data);
  }
  reveal(form) {
    window.templateForm = form;
  }
  static {
    this.\u0275fac = function TemplateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateComponent, selectors: [["se-template"]], decls: 2, vars: 3, consts: [["form", "ngForm"], [3, "ngSubmit"], ["name", "name", "type", "text", "placeholder", "Name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "dob", "type", "date", "placeholder", "Date of birth", 3, "ngModel"], ["name", "email", "type", "email", "placeholder", "Email Address", 3, "ngModelChange", "ngModel"], ["name", "favNumber", "type", "number", "placeholder", "Favorite Number", 3, "ngModelChange", "ngModel"], ["name", "admin", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["name", "level", "type", "range", "min", "1", "max", "5", 3, "ngModelChange", "ngModel"], ["type", "cancel", 3, "click"], ["type", "submit", 3, "click", "disabled"]], template: function TemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, TemplateComponent_Conditional_0_Template, 34, 11, "main");
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.data$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AsyncPipe, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nform[_ngcontent-%COMP%] {\n  border: 2px solid #2bd75d;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  accent-color: #2bd75d;\n  width: 30rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: auto;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\nlabel[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 0.25rem;\n}\n.ng-invalid.ng-dirty[_ngcontent-%COMP%]:not(form) {\n  background-color: rgb(143, 70, 70);\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #2bd75d;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #d7b52b;\n  cursor: not-allowed;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateComponent, [{
    type: Component,
    args: [{ selector: "se-template", imports: [AsyncPipe, DatePipe, FormsModule], template: `
    @if (data$ | async; as data) {
      <main>
        <h1>Template</h1>
        <form #form="ngForm" (ngSubmit)="save(data)">
          <label>
            <span>Name</span>
            <input
              name="name"
              type="text"
              placeholder="Name"
              [(ngModel)]="data.name"
              required
            />
          </label>
          <label>
            <span>Date of birth</span>
            <input
              name="dob"
              type="date"
              placeholder="Date of birth"
              [ngModel]="data.dob | date: 'yyyy-MM-dd'"
              (ngModel)="data.dob = $any($event).target.valueAsDate"
            />
          </label>
          <label>
            <span>Email Address</span>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              [(ngModel)]="data.email"
            />
          </label>
          <label>
            <span>Favorite Number</span>
            <input
              name="favNumber"
              type="number"
              placeholder="Favorite Number"
              [(ngModel)]="data.favNumber"
            />
          </label>
          <label>
            <span
              ><input name="admin" type="checkbox" [(ngModel)]="data.admin" />
              Admin</span
            >
          </label>
          <label>
            <span>Level {{ data.level }}</span>
            <input
              name="level"
              type="range"
              min="1"
              max="5"
              [(ngModel)]="data.level"
            />
          </label>
          <button
            type="cancel"
            (click)="reset$.next(undefined); $event.preventDefault()"
          >
            Reset form
          </button>
          <button type="submit" [disabled]="!form.valid" (click)="reveal(form)">
            Submit
          </button>
        </form>
      </main>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/rvt/template/template.component.css */\n:host {\n  display: block;\n}\nform {\n  border: 2px solid #2bd75d;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  accent-color: #2bd75d;\n  width: 30rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: auto;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\nlabel > *:nth-child(2) {\n  margin-left: 0.25rem;\n}\n.ng-invalid.ng-dirty:not(form) {\n  background-color: rgb(143, 70, 70);\n}\nbutton[type=submit] {\n  background-color: #2bd75d;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem;\n}\nbutton:disabled {\n  background-color: #d7b52b;\n  cursor: not-allowed;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateComponent, { className: "TemplateComponent", filePath: "src/app/rvt/template/template.component.ts", lineNumber: 88 });
})();

export {
  TemplateComponent
};
