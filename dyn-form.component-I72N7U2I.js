import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-RUC3MGHW.js";
import {
  HttpClient
} from "./chunk-NMBS7RAC.js";
import {
  AsyncPipe
} from "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  Injectable,
  ViewChildren,
  combineLatest,
  filter,
  firstValueFrom,
  inject,
  map,
  setClassMetadata,
  startWith,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/addresses.service.ts
var AddressesService = class _AddressesService {
  constructor() {
    this.http = inject(HttpClient);
    this.addresses$ = this.http.get("assets/addresses.csv", { responseType: "text" }).pipe(map((csv) => csv.split("\r").map((line) => line.split(","))), map(([header, ...rows]) => rows.map((row, id) => row.reduce((rec, val, i) => {
      rec[unquote(header[i])] = unquote(val);
      return rec;
    }, { id }))));
  }
  static {
    this.\u0275fac = function AddressesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AddressesService, factory: _AddressesService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function unquote(str) {
  return str?.replace(/^"(.*)"$/, "$1");
}

// src/app/dyn-form/dyn-form.component.ts
var _c0 = ["myForm"];
function DynFormComponent_Conditional_2_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Do not change");
    \u0275\u0275elementEnd();
  }
}
function DynFormComponent_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div")(3, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function DynFormComponent_Conditional_2_For_4_Template_input_ngModelChange_3_listener($event) {
      const field_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const vm_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(vm_r3.person[field_r2.name], $event) || (vm_r3.person[field_r2.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(4, DynFormComponent_Conditional_2_For_4_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const vm_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", field_r2.name, " ", field_r2.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", field_r2.name)("type", field_r2.type);
    \u0275\u0275twoWayProperty("ngModel", vm_r3.person[field_r2.name]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.name === "id" ? 4 : -1);
  }
}
function DynFormComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dialog")(1, "form", 1, 0);
    \u0275\u0275repeaterCreate(3, DynFormComponent_Conditional_2_For_4_Template, 5, 6, "label", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
    \u0275\u0275text(7, "Submit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.fields);
  }
}
var extractInputType = (value) => {
  const type = (value.constructor.name || "unknown").toLowerCase();
  if (value === null || value === void 0) {
    return "hidden";
  }
  if (type === "string") {
    return "text";
  }
  return type;
};
var DynFormComponent = class _DynFormComponent {
  constructor() {
    this.adr = inject(AddressesService);
    this.person$ = new BehaviorSubject({});
    this.fieldData$ = this.person$.pipe(map((person) => Object.entries(person).map(([name, value]) => ({
      name,
      value,
      type: extractInputType(value)
    }))), map((fields) => fields.filter((field) => field.type !== "Array")));
    this.addresses$ = this.adr.addresses$;
    this.vm$ = combineLatest({
      person: this.person$,
      fields: this.fieldData$,
      addresses: this.addresses$
    }).pipe(map(({ person, fields, addresses }) => ({
      person,
      fields,
      addresses,
      names: Object.keys(addresses[0])
    })));
  }
  ngAfterViewInit() {
    this.formList.changes.pipe(
      startWith(void 0),
      // the first time it doesn't emit anything
      map(() => this.formList.first),
      // get the form
      filter((form) => form !== void 0),
      // filter out when it's undefined
      switchMap((form) => form.valueChanges),
      // get the value changes
      tap((vc) => console.log("form value changed", vc))
    ).subscribe();
    this.adr.addresses$;
  }
  async openWith(id) {
    if (id) {
      const dialog = document.querySelector("dialog");
      const list = await firstValueFrom(this.addresses$);
      const person = list.find((p) => p.id === id);
      this.person$.next(person);
      dialog.showModal();
    }
  }
  static {
    this.\u0275fac = function DynFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynFormComponent, selectors: [["app-dyn-form"]], viewQuery: function DynFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.formList = _t);
      }
    }, decls: 4, vars: 3, consts: [["myForm", "ngForm"], ["method", "dialog"], [1, "labelRow"], ["type", "submit"], [3, "ngModelChange", "name", "type", "ngModel"]], template: function DynFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Dynamic form sample");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, DynFormComponent_Conditional_2_Template, 8, 0, "dialog");
        \u0275\u0275pipe(3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(3, 1, ctx.vm$)) ? 2 : -1, tmp_0_0);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, AsyncPipe], styles: ["\ndialog[_ngcontent-%COMP%]::backdrop {\n  background: rgba(30, 20, 35, 0.45);\n}\n.tableHolder[_ngcontent-%COMP%] {\n  height: 80vh;\n  overflow: auto;\n  width: 100rem;\n  border-collapse: collapse;\n}\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: rgb(42, 41, 41);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n  align-items: center;\n  gap: 0.4rem;\n}\ninput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  width: 20rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynFormComponent, [{
    type: Component,
    args: [{ imports: [AsyncPipe, FormsModule], selector: "app-dyn-form", changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1>Dynamic form sample</h1>
@if (vm$ | async; as vm) {
  <dialog>
    <form #myForm="ngForm" method="dialog">
      @for (field of vm.fields; track field) {
        <label>
          {{ field.name }} {{ field.type }}
          <div>
            <input
              [name]="field.name"
              [type]="field.type"
              [(ngModel)]="vm.person[field.name]"
            />
            @if (field.name === 'id') {
              <p>Do not change</p>
            }
          </div>
        </label>
      }
      <div class="labelRow">
        <button type="submit">Submit</button>
      </div>
    </form>
  </dialog>
}

<style>
  dialog::backdrop {
    background: rgba(30, 20, 35, 0.45);
  }

  .tableHolder {
    height: 80vh;
    overflow: auto;
    width: 100rem;
    border-collapse: collapse;
  }

  tr:nth-child(even) {
    background-color: rgb(42, 41, 41);
  }

  form {
    display: flex;
    flex-direction: column;
  }
  label {
    display: grid;
    grid-template-columns: 7rem 1fr;
    align-items: center;
    gap: 0.4rem;
  }
  input {
    margin-bottom: 5px;
    width: 20rem;
  }
</style>
`, styles: ["/* angular:styles/component:css;8f7dea45ff3d349ea7e1fd79a6b9e9bb687c5483fe090a3e5cfd91b2fb232f50;/home/runner/work/Samples/Samples/src/app/dyn-form/dyn-form.component.html */\ndialog::backdrop {\n  background: rgba(30, 20, 35, 0.45);\n}\n.tableHolder {\n  height: 80vh;\n  overflow: auto;\n  width: 100rem;\n  border-collapse: collapse;\n}\ntr:nth-child(even) {\n  background-color: rgb(42, 41, 41);\n}\nform {\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n  align-items: center;\n  gap: 0.4rem;\n}\ninput {\n  margin-bottom: 5px;\n  width: 20rem;\n}\n"] }]
  }], null, { formList: [{
    type: ViewChildren,
    args: ["myForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynFormComponent, { className: "DynFormComponent", filePath: "src/app/dyn-form/dyn-form.component.ts", lineNumber: 55 });
})();
export {
  DynFormComponent
};
