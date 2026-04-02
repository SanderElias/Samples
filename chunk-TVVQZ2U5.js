import {
  FormField,
  form
} from "./chunk-LIXZKSRG.js";
import {
  isObject
} from "./chunk-IPCX26GH.js";
import {
  JsonPipe
} from "./chunk-MTKF5SUL.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4YMCON7N.js";

// src/app/signal-forms-experiment/dynamic/dynamic.component.ts
function DynamicComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 2)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const _field_r1 = ctx.$implicit;
    \u0275\u0275property("for", \u0275\u0275interpolate(_field_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(_field_r1);
  }
}
var DynamicComponent = class _DynamicComponent {
  constructor() {
    this.randomtype = Math.floor(Math.random() * shapes.length);
    this.model = signal(
      shapes[this.randomtype],
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fd = form(this.model);
    this.fields = getPropNames.bind(this.fd);
  }
  getFieldValue(field) {
  }
  inspect() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    this.model.set(randomShape);
  }
  static {
    this.\u0275fac = function DynamicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynamicComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicComponent, selectors: [["se-dynamic"]], decls: 16, vars: 4, consts: [[3, "click"], ["type", "text", 3, "formField"], [3, "for"]], template: function DynamicComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Dynamic Form Trail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p");
        \u0275\u0275text(3, "This form is generated based on a random shape object.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0);
        \u0275\u0275listener("click", function DynamicComponent_Template_button_click_4_listener() {
          return ctx.inspect();
        });
        \u0275\u0275text(5, "inspect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form")(7, "label");
        \u0275\u0275text(8, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 1);
        \u0275\u0275controlCreate();
        \u0275\u0275repeaterCreate(10, DynamicComponent_For_11_Template, 3, 3, "label", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "pre")(13, "code");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "json");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.fd.type);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.fields());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 2, ctx.fd().value()));
      }
    }, dependencies: [FormField, JsonPipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-1);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicComponent, [{
    type: Component,
    args: [{ selector: "se-dynamic", imports: [JsonPipe, FormField], template: `
    <h1>Dynamic Form Trail</h1>
    <p>This form is generated based on a random shape object.</p>
    <button (click)="inspect()">inspect</button>
    <form>
      <label>Type</label>
      <input type="text" [formField]="$any(fd.type)" />

      @for (_field of fields(); track _field) {
        <label for="{{ _field }}">
          <span>{{ _field }}</span>
          <!-- <input type="text"  placeholder="{{ _field }}" [value]="fd().value()[_field]" /> -->
          <!-- <input type="text" placeholder="{{ _field }}" [formField]="fd[_field]" /> -->
        </label>
      }
    </form>
    <pre><code>{{ fd().value() | json }}</code></pre>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-forms-experiment/dynamic/dynamic.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-1);\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicComponent, { className: "DynamicComponent", filePath: "src/app/signal-forms-experiment/dynamic/dynamic.component.ts", lineNumber: 61 });
})();
function getPropNames() {
  const v = this().value();
  console.log(this().properties);
  return isObject(v) ? Object.keys(v) : [];
}
var shapes = [
  { type: "person", name: "Alice", age: 30 },
  { type: "company", name: "Acme Corp", industry: "Manufacturing" },
  { type: "animal", name: "Fido", species: "Dog" },
  { type: "car", brand: "Toyota", model: "Corolla" }
];

export {
  DynamicComponent,
  getPropNames
};
