import {
  getPropNames
} from "./chunk-TVVQZ2U5.js";
import {
  FormField,
  form
} from "./chunk-LIXZKSRG.js";
import "./chunk-UGNSKCWD.js";
import "./chunk-IPCX26GH.js";
import "./chunk-UN3GGFEO.js";
import {
  JsonPipe
} from "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  linkedSignal,
  setClassMetadata,
  signal,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4YMCON7N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/dynsignal-form/dynsignal-form.component.ts
function DynsignalFormComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", \u0275\u0275interpolate(type_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r1);
  }
}
function DynsignalFormComponent_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 3);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.nfFd.defaultValue);
    \u0275\u0275control();
  }
}
function DynsignalFormComponent_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 4);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.nfFd.defaultValue);
    \u0275\u0275control();
  }
}
function DynsignalFormComponent_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 0);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.nfFd.defaultValue);
    \u0275\u0275control();
  }
}
function DynsignalFormComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 7);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _field_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("for", \u0275\u0275interpolate(_field_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(_field_r3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(_field_r3))("formField", ctx_r1.dataForm[_field_r3]);
    \u0275\u0275control();
  }
}
var types = ["boolean", "number", "string"];
var DynsignalFormComponent = class _DynsignalFormComponent {
  constructor() {
    this.formData = signal(
      {
        name: {
          type: "string",
          defaultValue: "default"
        },
        email: {
          type: "string",
          defaultValue: "default"
        }
      },
      ...ngDevMode ? [{ debugName: "formData" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.types = types;
    this.newField = signal(
      {
        name: "",
        type: "string",
        defaultValue: ""
      },
      ...ngDevMode ? [{ debugName: "newField" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.nfFd = form(this.newField);
    this.model = linkedSignal(
      () => formModelFromDynForm(this.formData()),
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dynForm = form(this.formData);
    this.dataForm = form(this.model, (path) => {
    });
    this.fields = getPropNames.bind(this.dataForm);
  }
  addField(fieldName, fieldType, defaultValue) {
    this.formData.update((fd) => {
      return __spreadProps(__spreadValues({}, fd), {
        [fieldName]: {
          type: fieldType,
          defaultValue
        }
      });
    });
  }
  static {
    this.\u0275fac = function DynsignalFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynsignalFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynsignalFormComponent, selectors: [["se-dynsignal-form"]], decls: 30, vars: 6, consts: [["type", "text", 3, "formField"], [3, "formField"], [3, "value"], ["type", "checkbox", 3, "formField"], ["type", "number", 3, "formField"], ["type", "button", 3, "click"], [3, "for"], ["type", "text", 3, "placeholder", "formField"]], template: function DynsignalFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2");
        \u0275\u0275text(1, "Dynamic Signal Form");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form")(3, "label")(4, "span");
        \u0275\u0275text(5, "Field Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "input", 0);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "label")(8, "span");
        \u0275\u0275text(9, "Field Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 1);
        \u0275\u0275repeaterCreate(11, DynsignalFormComponent_For_12_Template, 2, 3, "option", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "label")(14, "span");
        \u0275\u0275text(15, "Default Field Value");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(16, DynsignalFormComponent_Case_16_Template, 1, 1, "input", 3)(17, DynsignalFormComponent_Case_17_Template, 1, 1, "input", 4)(18, DynsignalFormComponent_Case_18_Template, 1, 1, "input", 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 5);
        \u0275\u0275listener("click", function DynsignalFormComponent_Template_button_click_19_listener() {
          return ctx.addField(ctx.nfFd.name().value(), ctx.nfFd.type().value(), ctx.nfFd.defaultValue().value());
        });
        \u0275\u0275text(20, " Add Field ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "h3");
        \u0275\u0275text(22, "Results:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "form");
        \u0275\u0275repeaterCreate(24, DynsignalFormComponent_For_25_Template, 4, 6, "label", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "pre")(27, "code");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "json");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.nfFd.name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.nfFd.type);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.types);
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_5_0 = ctx.nfFd.type().value()) === "boolean" ? 16 : tmp_5_0 === "number" ? 17 : tmp_5_0 === "string" ? 18 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.fields());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 4, ctx.dataForm().value()));
      }
    }, dependencies: [FormField, JsonPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  padding: var(--size-2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynsignalFormComponent, [{
    type: Component,
    args: [{ selector: "se-dynsignal-form", imports: [JsonPipe, FormField], template: `
    <h2>Dynamic Signal Form</h2>
    <form>
      <label>
        <span>Field Name</span>
        <input type="text" [formField]="nfFd.name" />
      </label>
      <label>
        <span>Field Type</span>
        <select [formField]="nfFd.type">
          @for (type of types; track type) {
            <option value="{{ type }}">{{ type }}</option>
          }
        </select>
      </label>
      <label>
        <span>Default Field Value</span>
        @switch (nfFd.type().value()) {
          @case ('boolean') {
            <input type="checkbox" [formField]="$any(nfFd.defaultValue)" />
          }
          @case ('number') {
            <input type="number" [formField]="$any(nfFd.defaultValue)" />
          }
          @case ('string') {
            <input type="text" [formField]="$any(nfFd.defaultValue)" />
          }
        }
      </label>
      <button
        type="button"
        (click)="
          addField(
            nfFd.name().value(),
            nfFd.type().value(),
            nfFd.defaultValue().value()
          )
        "
      >
        Add Field
      </button>
    </form>

    <h3>Results:</h3>
    <form>
      @for (_field of fields(); track _field) {
        <label for="{{ _field }}">
          <span>{{ _field }}</span>
          <input
            type="text"
            placeholder="{{ _field }}"
            [formField]="$any(dataForm[_field])"
          />
        </label>
      }
    </form>
    <pre><code>{{ dataForm().value() | json }}</code></pre>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/dynsignal-form/dynsignal-form.component.css */\n:host {\n  display: block;\n  padding: var(--size-2);\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynsignalFormComponent, { className: "DynsignalFormComponent", filePath: "src/app/dynsignal-form/dynsignal-form.component.ts", lineNumber: 101 });
})();
function formModelFromDynForm(dynForm) {
  const model = {};
  for (const key in dynForm) {
    model[key] = dynForm[key].defaultValue;
  }
  return model;
}
export {
  DynsignalFormComponent,
  types
};
