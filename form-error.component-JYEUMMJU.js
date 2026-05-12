import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-RUC3MGHW.js";
import {
  JsonPipe
} from "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
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
import "./chunk-KCHQYSDT.js";

// src/app/form-error/show-error/show-error.component.ts
var _c0 = ["*"];
var ShowErrorComponent = class _ShowErrorComponent {
  #form = inject(NgForm);
  // use the injector to find the nearest form group, usually the form itself
  #elm = inject(ElementRef).nativeElement;
  #sub = this.#form.form.statusChanges.subscribe({
    next: () => {
      const form = this.#form.form;
      const inp = this.#elm.parentElement?.querySelector("[name]");
      const name = inp?.name;
      const field = form.get(name);
      if (field == void 0) {
        form.touched && console.warn(`Field with name: "${name}" not found`);
        return;
      }
      if (field?.pristine)
        return;
      if (field?.errors != void 0) {
        this.#elm.style.display = "block";
      } else {
        this.#elm.style.display = "none";
      }
    }
  });
  ngOnDestroy() {
    this.#sub.unsubscribe();
  }
  static {
    this.\u0275fac = function ShowErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowErrorComponent, selectors: [["se-show-error"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ShowErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: none;\n  color: red;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowErrorComponent, [{
    type: Component,
    args: [{ selector: "se-show-error", imports: [], template: `<ng-content></ng-content>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/form-error/show-error/show-error.component.css */\n:host {\n  display: none;\n  color: red;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowErrorComponent, { className: "ShowErrorComponent", filePath: "src/app/form-error/show-error/show-error.component.ts", lineNumber: 16 });
})();

// src/app/form-error/form-error.component.ts
var FormErrorComponent = class _FormErrorComponent {
  constructor() {
    this.name = "";
    this.age = 0;
  }
  static {
    this.\u0275fac = function FormErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormErrorComponent, selectors: [["se-form-error"]], decls: 26, vars: 9, consts: [["form", "ngForm"], ["type", "text", "name", "name", "required", "", "minlength", "2", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "age", "min", "10", "max", "130", "required", "", 3, "ngModelChange", "ngModel"], [3, "disabled"]], template: function FormErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Form with error shown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", null, 0)(4, "label")(5, "span");
        \u0275\u0275text(6, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 1);
        \u0275\u0275twoWayListener("ngModelChange", function FormErrorComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(8, "se-show-error");
        \u0275\u0275text(9, "Name is mandatory and at least 2 long");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "label")(11, "span");
        \u0275\u0275text(12, "Age");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 2);
        \u0275\u0275twoWayListener("ngModelChange", function FormErrorComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.age, $event) || (ctx.age = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(14, "se-show-error");
        \u0275\u0275text(15, "Age must be between 10 and 130");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 3);
        \u0275\u0275text(17, "Submit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "pre")(19, "code");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "json");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "pre")(23, "code");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "json");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const form_r2 = \u0275\u0275reference(3);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.age);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", form_r2.status === "INVALID");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 5, form_r2.value), "\n");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 7, form_r2.status), "\n");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, ShowErrorComponent, JsonPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}", '\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5rem 20rem;\n}\nlabel[_ngcontent-%COMP%]   se-show-error[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n}\nlabel[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:has([ng-invalid])   span[_ngcontent-%COMP%]:after {\n  content: "*";\n  color: red;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormErrorComponent, [{
    type: Component,
    args: [{ selector: "se-form-error", imports: [FormsModule, ShowErrorComponent, JsonPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1>Form with error shown</h1>
<form #form="ngForm">
  <label>
    <span>Name</span>
    <input type="text" name="name" [(ngModel)]="name" required minlength="2" />
    <se-show-error>Name is mandatory and at least 2 long</se-show-error>
  </label>
  <label>
    <span>Age</span>
    <input
      type="number"
      name="age"
      [(ngModel)]="age"
      min="10"
      max="130"
      required
    />
    <se-show-error>Age must be between 10 and 130</se-show-error>
  </label>

  <button [disabled]="form.status === 'INVALID'">Submit</button>
</form>

<pre><code>{{form.value | json}}
</code></pre>
<pre><code>{{form.status | json}}
</code></pre>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    display: grid;
    grid-template-columns: 5rem 20rem;

    & se-show-error {
      grid-column: 2/3;
    }

    & :has([ng-invalid]) span:after {
      content: '*';
      color: red;
    }
  }
</style>
`, styles: ["/* src/app/form-error/form-error.component.css */\n:host {\n  display: block;\n}\n", '/* angular:styles/component:css;a1907cd39937ec39c411e52f107a7d70a0fd40b2b05829655aca4e87e5038776;/home/runner/work/Samples/Samples/src/app/form-error/form-error.component.html */\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nlabel {\n  display: grid;\n  grid-template-columns: 5rem 20rem;\n}\nlabel se-show-error {\n  grid-column: 2/3;\n}\nlabel :has([ng-invalid]) span:after {\n  content: "*";\n  color: red;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormErrorComponent, { className: "FormErrorComponent", filePath: "src/app/form-error/form-error.component.ts", lineNumber: 14 });
})();
export {
  FormErrorComponent as default
};
