import {
  ShowErrorsInDom
} from "./chunk-AOCRHDZE.js";
import {
  FormField,
  FormRoot,
  MaxLengthValidationError,
  apply,
  applyEach,
  applyWhenValue,
  form,
  maxError,
  maxLength,
  minError,
  minLength,
  minLengthError,
  patternError,
  required,
  schema,
  transformedValue,
  validate,
  validateAsync
} from "./chunk-LIXZKSRG.js";
import {
  NotifyDialogService
} from "./chunk-QWNQP44T.js";
import "./chunk-V5IPUR26.js";
import "./chunk-UGNSKCWD.js";
import {
  flattenRecord,
  isObject
} from "./chunk-IPCX26GH.js";
import "./chunk-UN3GGFEO.js";
import "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injectable,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
  afterRenderEffect,
  computed,
  inject,
  input,
  linkedSignal,
  model,
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-4YMCON7N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/signal-forms-experiment/util/sample-data.model.ts
var SampleDataContactDetailType;
(function(SampleDataContactDetailType2) {
  SampleDataContactDetailType2["Email"] = "E-Mail";
  SampleDataContactDetailType2["Fax"] = "Fax";
  SampleDataContactDetailType2["Mobile"] = "Mobile";
  SampleDataContactDetailType2["Phone"] = "Phone";
})(SampleDataContactDetailType || (SampleDataContactDetailType = {}));

// src/app/signal-forms-experiment/contacts/contacts.component.ts
function ContactsComponent_For_7_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r4);
  }
}
function ContactsComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function ContactsComponent_For_7_Template_button_click_1_listener() {
      const contact_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delContact(contact_r2().value()));
    });
    \u0275\u0275text(2, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label")(4, "span");
    \u0275\u0275text(5, "type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 3)(7, "option", 4);
    \u0275\u0275text(8, "-- Select type --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, ContactsComponent_For_7_For_10_Template, 2, 2, "option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label")(12, "span");
    \u0275\u0275text(13, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 6);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label")(16, "span");
    \u0275\u0275text(17, "priority");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 7);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isLastOne());
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", contact_r2.type);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.types);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background-color", ctx_r2.backgroundColor(contact_r2.info)());
    \u0275\u0275property("formField", contact_r2.info);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", contact_r2.priority);
    \u0275\u0275control();
  }
}
var ContactsComponent = class _ContactsComponent {
  constructor() {
    this.contacts = input.required(
      ...ngDevMode ? [{ debugName: "contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.contactList = computed(
      () => this.contacts()(),
      ...ngDevMode ? [{ debugName: "contactList" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isLastOne = computed(
      () => this.contactList().value().length === 1,
      ...ngDevMode ? [{ debugName: "isLastOne" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.types = Object.values(SampleDataContactDetailType);
    this.backgroundColor = (contact) => computed(() => {
      const { pending, dirty } = contact();
      return pending() ? "var(--orange-6)" : "";
    });
  }
  addContact() {
    this.contactList().value.update((contacts) => [
      ...contacts,
      { type: SampleDataContactDetailType.Email, info: "", priority: 0 }
    ]);
  }
  delContact(contact) {
    const contacts = this.contactList().value;
    if (contacts().length > 1) {
      contacts.update((contacts2) => contacts2.filter((t) => t !== contact));
    }
  }
  static {
    this.\u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["fieldset", "contacts", ""]], inputs: { contacts: [1, "contacts"] }, decls: 8, vars: 0, consts: [["type", "button", 1, "action", 3, "click"], [1, "row"], ["type", "button", 1, "action", 3, "click", "disabled"], ["showError", "", 3, "formField"], ["value", ""], [3, "value"], ["type", "text", "placeholder", "value", "showError", "", 3, "formField"], ["type", "number", "placeholder", "priority", 3, "formField"]], template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "legend");
        \u0275\u0275text(1, " Contacts ");
        \u0275\u0275elementStart(2, "button", 0);
        \u0275\u0275listener("click", function ContactsComponent_Template_button_click_2_listener() {
          return ctx.addContact();
        });
        \u0275\u0275text(3, "+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275text(5, ' Try adding the contact "i@exists.gov" to see aSync validation in action. ');
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(6, ContactsComponent_For_7_Template, 19, 6, "div", 1, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.contacts());
      }
    }, dependencies: [FormField, ShowErrorsInDom], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\ndiv.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  gap: var(--size-2);\n  align-items: baseline;\n}\n@media (width < 680px) {\n  div.row[_ngcontent-%COMP%] {\n    grid-template-columns: max-content 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 0;\n  }\n  div.row[_ngcontent-%COMP%]   button.action[_ngcontent-%COMP%] {\n    grid-row: span 3;\n  }\n}\ninput[type=number][_ngcontent-%COMP%] {\n  width: 3rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\nselect[_ngcontent-%COMP%] {\n  width: 16ch;\n}\ndiv[_ngcontent-%COMP%]    > button.action[_ngcontent-%COMP%] {\n  position: inherit;\n  margin-inline-start: 0;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactsComponent, [{
    type: Component,
    args: [{ selector: "fieldset [contacts]", imports: [FormField, ShowErrorsInDom], template: `<legend>
      Contacts
      <button type="button" class="action" (click)="addContact()">+</button>
    </legend>
    <div>
      Try adding the contact "i@exists.gov" to see aSync validation in action.
    </div>
    @for (contact of contacts(); track $index) {
      <div class="row">
        <button
          class="action"
          type="button"
          (click)="delContact(contact().value())"
          [disabled]="isLastOne()"
        >
          \u{1F5D1}\uFE0F
        </button>
        <!-- the div is needed to align the error with the control -->
        <label>
          <span>type</span>
          <select [formField]="contact.type" showError="">
            <option value="">-- Select type --</option>
            @for (type of types; track type) {
              <option [value]="type">{{ type }}</option>
            }
          </select>
        </label>
        <!-- the div is needed to align the error with the control -->
        <label>
          <span>info</span>
          <input
            type="text"
            [formField]="contact.info"
            placeholder="value"
            showError
            [style.backgroundColor]="backgroundColor(contact.info)()"
          />
        </label>
        <label>
          <span>priority</span>
          <input
            type="number"
            [formField]="contact.priority"
            placeholder="priority"
          />
        </label>
      </div>
    } `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-forms-experiment/contacts/contacts.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\ndiv.row {\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  gap: var(--size-2);\n  align-items: baseline;\n}\n@media (width < 680px) {\n  div.row {\n    grid-template-columns: max-content 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 0;\n  }\n  div.row button.action {\n    grid-row: span 3;\n  }\n}\ninput[type=number] {\n  width: 3rem;\n}\nlabel > span {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\nselect {\n  width: 16ch;\n}\ndiv > button.action {\n  position: inherit;\n  margin-inline-start: 0;\n}\n"] }]
  }], null, { contacts: [{ type: Input, args: [{ isSignal: true, alias: "contacts", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src/app/signal-forms-experiment/contacts/contacts.component.ts", lineNumber: 70 });
})();

// src/app/signal-forms-experiment/input-random-int/input-random-int.component.ts
var MAX = 1e3;
var InputRandomIntComponent = class _InputRandomIntComponent {
  constructor() {
    this.field = inject(FormField);
    this.MAX = MAX;
    this.value = model(
      0,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min = input(
      0,
      ...ngDevMode ? [{ debugName: "min" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max = input(
      MAX,
      ...ngDevMode ? [{ debugName: "max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showMinMax = signal(
      false,
      ...ngDevMode ? [{ debugName: "showMinMax" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.lowerBoundary = linkedSignal(
      () => this.min() ?? 0,
      ...ngDevMode ? [{ debugName: "lowerBoundary" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upperBoundary = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "upperBoundary" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.lowerBoundary,
      computation: (min, prev) => {
        let newValue = prev?.value ?? MAX;
        return Math.min(MAX, newValue < min ? min + 1 : newValue);
      }
    }));
    this.upperLowest = computed(
      () => Math.max(this.lowerBoundary() + 1, this.min() ?? 0),
      ...ngDevMode ? [{ debugName: "upperLowest" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  getRandomInt() {
    this.value.set(Math.floor(Math.random() * (this.upperBoundary() - this.lowerBoundary() + 1)) + this.lowerBoundary());
  }
  static {
    this.\u0275fac = function InputRandomIntComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputRandomIntComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputRandomIntComponent, selectors: [["se-input-random-int", "formField", ""]], hostVars: 2, hostBindings: function InputRandomIntComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("min-max", ctx.showMinMax());
      }
    }, inputs: { value: [1, "value"], min: [1, "min"], max: [1, "max"] }, outputs: { value: "valueChange" }, decls: 10, vars: 9, consts: [["title", "click to set boundaries", 3, "click"], ["type", "range", "step", "1", 3, "input", "min", "max", "value"], ["type", "range", "step", "1", 3, "input", "blur", "min", "max", "value"], ["type", "button", 3, "click"]], template: function InputRandomIntComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "span", 0);
        \u0275\u0275domListener("click", function InputRandomIntComponent_Template_span_click_0_listener() {
          return ctx.showMinMax.set(!ctx.showMinMax());
        });
        \u0275\u0275text(1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "label");
        \u0275\u0275text(3, "Min value: ");
        \u0275\u0275domElementStart(4, "input", 1);
        \u0275\u0275domListener("input", function InputRandomIntComponent_Template_input_input_4_listener($event) {
          return ctx.lowerBoundary.set(+$event.target.value);
        });
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(5, "label");
        \u0275\u0275text(6, "Max value: ");
        \u0275\u0275domElementStart(7, "input", 2);
        \u0275\u0275domListener("input", function InputRandomIntComponent_Template_input_input_7_listener($event) {
          return ctx.upperBoundary.set(+$event.target.value);
        })("blur", function InputRandomIntComponent_Template_input_blur_7_listener() {
          return ctx.field.state().markAsTouched();
        });
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(8, "button", 3);
        \u0275\u0275domListener("click", function InputRandomIntComponent_Template_button_click_8_listener() {
          return ctx.getRandomInt();
        });
        \u0275\u0275text(9);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("current value: ", ctx.value(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("min", ctx.min() ?? 0)("max", ctx.max() ?? ctx.MAX)("value", ctx.lowerBoundary());
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("min", ctx.upperLowest())("max", ctx.max() ?? ctx.MAX)("value", ctx.upperBoundary());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2(" Get random int between ", ctx.lowerBoundary(), " and ", ctx.upperBoundary(), " ");
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--size-2);\n}\n.min-max[_nghost-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--size-1);\n}\n.min-max[_nghost-%COMP%]   [_ngcontent-%COMP%]:not(:first-child) {\n  margin-inline-start: var(--size-4);\n}\n.min-max[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--size-2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: none;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputRandomIntComponent, [{
    type: Component,
    args: [{ selector: "se-input-random-int [formField]", imports: [], template: `
    <span
      (click)="showMinMax.set(!showMinMax())"
      title="click to set boundaries"
      >current value: {{ value() }}
    </span>
    <label
      >Min value:
      <input
        type="range"
        [min]="min() ?? 0"
        [max]="max() ?? MAX"
        [value]="lowerBoundary()"
        (input)="lowerBoundary.set(+$event.target.value)"
        step="1"
    /></label>
    <label
      >Max value:
      <input
        type="range"
        [min]="upperLowest()"
        [max]="max() ?? MAX"
        [value]="upperBoundary()"
        (input)="upperBoundary.set(+$event.target.value)"
        (blur)="field.state().markAsTouched()"
        step="1"
    /></label>
    <button type="button" (click)="getRandomInt()">
      Get random int between {{ lowerBoundary() }} and {{ upperBoundary() }}
    </button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[class.min-max]": "showMinMax()"
    }, styles: ["/* src/app/signal-forms-experiment/input-random-int/input-random-int.component.css */\n:host {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--size-2);\n}\n:host.min-max {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--size-1);\n}\n:host.min-max :not(:first-child) {\n  margin-inline-start: var(--size-4);\n}\n:host.min-max label {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--size-2);\n}\nlabel {\n  display: none;\n}\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputRandomIntComponent, { className: "InputRandomIntComponent", filePath: "src/app/signal-forms-experiment/input-random-int/input-random-int.component.ts", lineNumber: 57 });
})();

// src/app/signal-forms-experiment/tags/tags.component.ts
var _c0 = ["tagsInput"];
function TagsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (max ", ctx_r0.maxLength(), " tags)");
  }
}
function TagsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 4)(1, "button", 5);
    \u0275\u0275listener("click", function TagsComponent_For_8_Template_button_click_1_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.delTag($index_r3));
    });
    \u0275\u0275text(2, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 6);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLastOne());
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", tag_r4);
    \u0275\u0275control();
  }
}
var TagsComponent = class _TagsComponent {
  constructor() {
    this.tags = input.required(
      ...ngDevMode ? [{ debugName: "tags" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tagsInput = viewChild("tagsInput", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "tagsInput" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this.tagsList = computed(
      () => this.tags()(),
      ...ngDevMode ? [{ debugName: "tagsList" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isLastOne = computed(
      () => this.tagsList().value().length === 1,
      ...ngDevMode ? [{ debugName: "isLastOne" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.maxLength = computed(
      () => {
        const error = (this.tagsList().errors() || []).find((e) => e instanceof MaxLengthValidationError);
        return error === void 0 ? null : error.maxLength;
      },
      ...ngDevMode ? [{ debugName: "maxLength" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ = afterRenderEffect(() => {
      const errors = this.tagsList().errors() || [];
      const elm = this.tagsInput().nativeElement;
      if (errors.length > 0) {
        elm.setCustomValidity("error in tags");
      } else {
        elm.setCustomValidity("");
      }
    });
  }
  addTag() {
    this.tagsList().value.update((tags) => ["", ...tags]);
  }
  delTag(index) {
    const tags = this.tagsList().value;
    if (tags().length > 1) {
      tags.update((tags2) => tags2.filter((t, i) => i !== index));
    }
  }
  static {
    this.\u0275fac = function TagsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TagsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TagsComponent, selectors: [["fieldset", "tags", ""]], viewQuery: function TagsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.tagsInput, _c0, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { tags: [1, "tags"] }, decls: 9, vars: 1, consts: [["tagsInput", ""], [1, "error"], ["type", "button", 1, "action", 3, "click"], ["type", "text", "name", "tags", 2, "display", "none"], [1, "tags"], ["type", "button", 1, "action", 3, "click", "disabled"], ["type", "text", "showError", "", 3, "formField"]], template: function TagsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "legend");
        \u0275\u0275text(1, " Tags ");
        \u0275\u0275conditionalCreate(2, TagsComponent_Conditional_2_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function TagsComponent_Template_button_click_3_listener() {
          return ctx.addTag();
        });
        \u0275\u0275text(4, "+");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "input", 3, 0);
        \u0275\u0275repeaterCreate(7, TagsComponent_For_8_Template, 4, 2, "label", 4, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.maxLength() !== null ? 2 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.tags());
      }
    }, dependencies: [FormField, ShowErrorsInDom], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nlabel.tags[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px auto;\n  gap: var(--size-3);\n  grid-row-gap: var(--size-1);\n  align-items: baseline;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--red-5);\n  font-variant: small-caps;\n  font-size: 0.9rem;\n  margin-inline-start: var(--size-2);\n}\nlabel.tags[_ngcontent-%COMP%]    > button.action[_ngcontent-%COMP%] {\n  position: inherit;\n  margin-inline-start: 0;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagsComponent, [{
    type: Component,
    args: [{ selector: "fieldset [tags]", imports: [FormField, ShowErrorsInDom], template: `
    <legend>
      Tags
      @if (maxLength() !== null) {
        <span class="error"> (max {{ maxLength() }} tags)</span>
      }
      <button type="button" class="action" (click)="addTag()">+</button>
    </legend>
    <input type="text" name="tags" #tagsInput style="display: none;" />
    @for (tag of tags(); track $index) {
      <label class="tags">
        <button
          type="button"
          class="action"
          (click)="delTag($index)"
          [disabled]="isLastOne()"
        >
          \u{1F5D1}\uFE0F
        </button>
        <input type="text" [formField]="tag" showError />
      </label>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-forms-experiment/tags/tags.component.css */\n:host {\n  display: block;\n}\nlabel.tags {\n  display: grid;\n  grid-template-columns: 48px auto;\n  gap: var(--size-3);\n  grid-row-gap: var(--size-1);\n  align-items: baseline;\n}\n.error {\n  color: var(--red-5);\n  font-variant: small-caps;\n  font-size: 0.9rem;\n  margin-inline-start: var(--size-2);\n}\nlabel.tags > button.action {\n  position: inherit;\n  margin-inline-start: 0;\n}\n"] }]
  }], null, { tags: [{ type: Input, args: [{ isSignal: true, alias: "tags", required: true }] }], tagsInput: [{ type: ViewChild, args: ["tagsInput", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TagsComponent, { className: "TagsComponent", filePath: "src/app/signal-forms-experiment/tags/tags.component.ts", lineNumber: 47 });
})();

// src/app/signal-forms-experiment/util/random-error.ts
var randomError = async (form2) => {
  const data = form2().value();
  if (isObject(data)) {
    const fieldNames = Object.keys(flattenRecord(data));
    const randomField = fieldNames[Math.floor(Math.random() * fieldNames.length)].split(".");
    try {
      const fieldTree = randomField.reduce((f, key) => {
        return f[key] ?? f;
      }, form2);
      console.log(`the field "${randomField.join(".")}" will have the error`);
      return {
        kind: "randomError",
        message: "This is a random server-side error for testing purposes",
        fieldTree
      };
    } catch {
      return {
        kind: "randomError",
        message: "This is a random server-side error for testing purposes",
        fieldTree: form2["name"]
      };
    }
  }
};

// src/app/signal-forms-experiment/util/sample-data.service.ts
var SampleDataService = class _SampleDataService {
  constructor() {
    this.getById = (id) => linkedSignal({
      source: id,
      computation: (id2) => {
        const data = inMemoryDb.get(id2);
        if (!data) {
          return emptyData(id2);
        }
        return structuredClone(data);
      }
    });
    this.getAll = () => structuredClone(Array.from(inMemoryDb.values()));
    this.save = async (data) => {
      await new Promise((res) => setTimeout(res, 500));
      inMemoryDb.set(data.id, data);
    };
  }
  static {
    this.\u0275fac = function SampleDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SampleDataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SampleDataService, factory: _SampleDataService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SampleDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var inMemoryDb = /* @__PURE__ */ new Map();
inMemoryDb.set("1", {
  id: "1",
  name: "Sander",
  dob: new Date(1980, 1, 1),
  password: "007 Is not secure",
  confirm: "007 Is not secure",
  favoriteRandomInt: 42,
  contacts: [
    { type: SampleDataContactDetailType.Email, info: "a@b.c", priority: 0 },
    {
      type: SampleDataContactDetailType.Mobile,
      info: "+31 6123 456 789",
      priority: 0
    }
  ],
  tags: ["developer", "angular", "aa", "aaa", "aaaa"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
});
var emptyData = (id) => ({
  id,
  name: "",
  dob: /* @__PURE__ */ new Date("2000"),
  password: "",
  confirm: "",
  tags: [],
  favoriteRandomInt: 0,
  address: { street: "", city: "", state: "", zip: "" },
  contacts: []
});

// src/app/signal-forms-experiment/validations/email-address.validation.ts
var emailAddress = schema((emailAddress2) => {
  validate(emailAddress2, ({ value }) => {
    const v = value();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      return patternError(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, {
        message: "Invalid email address"
      });
    }
    return null;
  });
  validateAsync(emailAddress2, {
    params: ({ value, state }) => state.dirty() ? value() : void 0,
    factory: (params) => resource({
      params,
      loader: async ({ params: params2 }) => {
        const emailToCheck = params2;
        if (Math.random() < 0.5) {
          throw new Error("Simulated server connection error");
        }
        await new Promise((resolve) => setTimeout(resolve, 2500));
        const existingEmails = ["i@exists.gov", "j@exists.gov"];
        return existingEmails.includes(emailToCheck);
      }
    }),
    onError: (err) => ({
      kind: "serverConnectionError",
      message: "Could not validate email address at this time\nPlease try again later."
    }),
    onSuccess: (result) => result ? {
      kind: "serverError",
      message: "Email address already exists"
    } : null
  });
});

// src/app/signal-forms-experiment/validations/phone-number.validation.ts
var phoneNumber = schema((valueField) => {
  validate(valueField, ({ value }) => {
    const errors = [];
    const v = value();
    const numberOfDigits = v.split("").filter((c) => "0123456789".includes(c)).length;
    if (!/^\+?[0-9\s\-()]{7,}$/.test(v)) {
      errors.push(patternError(/^\+?[0-9\s\-()]{7,}$/, {
        message: "only numbers and ()+- are allowed"
      }));
    }
    if (numberOfDigits < 7) {
      errors.push(minLengthError(7, { message: "At least 7 digits are required" }));
    }
    if (numberOfDigits > 15) {
      errors.push(maxError(15, { message: "Maximum 15 digits allowed" }));
    }
    return errors.length > 0 ? errors : null;
  });
});

// src/app/signal-forms-experiment/validations/contacts.validation.ts
var contactsSchema = schema((contactsArray) => {
  minLength(contactsArray, 1, { message: "At least one contact is required" });
  applyEach(contactsArray, contactSchema);
});
var contactSchema = schema((contact) => {
  const types = Object.values(SampleDataContactDetailType);
  required(contact.info, { message: "a value is required" });
  validate(contact.type, ({ value }) => {
    const v = value();
    if (types.includes(v) === false) {
      return { kind: "invalidType", message: "Invalid contact type" };
    }
    return null;
  });
  applyWhenValue(contact, (c) => c.type === SampleDataContactDetailType.Email, (c) => apply(c.info, emailAddress));
  applyWhenValue(contact, (c) => c.type === SampleDataContactDetailType.Fax, (c) => apply(c.info, phoneNumber));
  applyWhenValue(contact, (c) => c.type === SampleDataContactDetailType.Mobile, (c) => apply(c.info, phoneNumber));
  applyWhenValue(contact, (c) => c.type === SampleDataContactDetailType.Phone, (c) => apply(c.info, phoneNumber));
});

// src/app/signal-forms-experiment/validations/password-complexity.validation.ts
var passwordComplexitySchema = schema((password) => {
  required(password, { message: "can not be empty" });
  minLength(password, 6, { message: "must be at least 6 characters" });
  validate(password, ({ value }) => {
    const v = value();
    const errors = [];
    if (!/[A-Z]/.test(v)) {
      errors.push({
        kind: "complexity",
        message: "must contain an uppercase letter"
      });
    }
    if (!/[a-z]/.test(v)) {
      errors.push(complexityError("must contain a lowercase letter"));
    }
    if (!/[0-9]/.test(v)) {
      errors.push(complexityError("must contain a number"));
    }
    if (!/[^A-Za-z0-9]/.test(v)) {
      errors.push(complexityError("must contain a special character"));
    }
    return errors.length > 0 ? errors : null;
  });
});
var complexityError = (message) => ({
  kind: "complexity",
  message
});

// src/app/signal-forms-experiment/validations/tags.validation.ts
var tagsSchema = schema((tagsArray) => {
  maxLength(tagsArray, 7, { message: "Maximum 7 tags allowed" });
  const tagSchema = schema((tag) => {
    required(tag, { message: "Tag can not be empty" });
    minLength(tag, 2, { message: "Tag must be at least 2 characters" });
    validate(tag, ({ value, state, valueOf }) => {
      const tagToTest = value();
      const index = parseInt("" + state.keyInParent(), 10);
      const tags = valueOf(tagsArray).map((tag2, idx) => [tag2, idx]);
      for (const [tag2, idx] of tags) {
        if (idx !== index && tag2 === tagToTest) {
          return patternError(/.*/, {
            message: "Duplicate tags are not allowed"
          });
        }
      }
    });
    validate(tag, ({ value }) => {
      const v = value().toLowerCase();
      if (v.includes("react")) {
        return patternError(/.*/, { message: "no, just, no!" });
      }
    });
  });
  applyEach(tagsArray, tagSchema);
});

// src/app/signal-forms-experiment/validations/sampledata-validation.ts
var sampleDataValidationSchema = schema((relation) => {
  required(relation.name, { message: "a name is required" });
  validate(relation.name, ({ value }) => {
    const v = value();
    if (v && v.length < 3) {
      return minLengthError(3, {
        message: "Name must be at least 3 characters"
      });
    }
    if (v && !/^[A-Za-z\s]+$/.test(v)) {
      return patternError(/^[A-Za-z\s]+$/, {
        message: "Name must contain only letters and spaces"
      });
    }
    return null;
  });
  required(relation.dob);
  validate(relation.dob, ({ value }) => {
    const v = value();
    if (v && new Date(v).getTime() > Date.now()) {
      return maxError(Date.now(), {
        message: "Date of birth cannot be in the future"
      });
    }
    return null;
  });
  validate(relation.dob, ({ value }) => {
    const v = value();
    if (v && new Date(v).getFullYear() < 1900) {
      return minError(1900, { message: "Year must be 1900 or later" });
    }
    return null;
  });
  apply(relation.password, passwordComplexitySchema);
  required(relation.confirm);
  validate(relation.confirm, ({ value, valueOf }) => {
    const v = value();
    const pw = valueOf(relation.password);
    if (v !== pw) {
      return { kind: "mismatch", message: "Passwords do not match" };
    }
    return null;
  });
  required(relation.address.street);
  required(relation.address.city);
  required(relation.address.state);
  apply(relation.tags, tagsSchema);
  apply(relation.contacts, contactsSchema);
});

// src/app/signal-forms-experiment/zero-padd-number/zero-pad-number.component.ts
var defaultMaxLength = 5;
var ZeroPadNumberComponent = class _ZeroPadNumberComponent {
  constructor() {
    this.value = model.required(
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.padTo = input(defaultMaxLength, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "padTo" } : (
      /* istanbul ignore next */
      {}
    )), { transform: (v) => v === "" ? defaultMaxLength : isNaN(Number(v)) ? defaultMaxLength : Number(v) }));
    this.format = (s) => {
      this.rawValue.set(format(s, this.padTo()));
    };
    this.rawValue = transformedValue(this.value, {
      parse: (s) => {
        if (s == null || s === void 0 || s.trim() === "") {
          return { value: void 0 };
        }
        const num = Number(s);
        if (isNaN(num)) {
          return {
            errors: [
              {
                kind: "typeError",
                message: `value ${s} could not be parsed as a number`
              }
            ]
          };
        }
        return { value: num };
      },
      // when the forms value changes, we need to format it for display in the input
      format: (n) => format(n, this.padTo())
    });
  }
  static {
    this.\u0275fac = function ZeroPadNumberComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZeroPadNumberComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZeroPadNumberComponent, selectors: [["se-zero-pad-number"]], inputs: { value: [1, "value"], padTo: [1, "padTo"] }, outputs: { value: "valueChange" }, decls: 1, vars: 1, consts: [["type", "text", 3, "input", "value"]], template: function ZeroPadNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "input", 0);
        \u0275\u0275domListener("input", function ZeroPadNumberComponent_Template_input_input_0_listener($event) {
          return ctx.format($event.target.value);
        });
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275domProperty("value", ctx.rawValue());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZeroPadNumberComponent, [{
    type: Component,
    args: [{ selector: "se-zero-pad-number", imports: [], template: `<input
    type="text"
    [value]="rawValue()"
    (input)="format($event.target.value)"
  />`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-forms-experiment/zero-padd-number/zero-pad-number.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }, { type: Output, args: ["valueChange"] }], padTo: [{ type: Input, args: [{ isSignal: true, alias: "padTo", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZeroPadNumberComponent, { className: "ZeroPadNumberComponent", filePath: "src/app/signal-forms-experiment/zero-padd-number/zero-pad-number.component.ts", lineNumber: 25 });
})();
function format(n, padTo) {
  return isNaN(Number(n)) ? typeof n === "string" ? n : "0".padStart(padTo, "0") : Number(n).toString().padStart(padTo, "0");
}

// src/app/signal-forms-experiment/signal-forms-experiment.component.ts
var _c02 = ["dlg"];
var SignalFormsExperimentComponent = class _SignalFormsExperimentComponent {
  constructor() {
    this.dataService = inject(SampleDataService);
    this.ns = inject(NotifyDialogService);
    this.id = signal(
      "1",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.relation = this.dataService.getById(this.id);
    this.dlgText = signal(
      "Submitting and validating on the server, please hold!",
      ...ngDevMode ? [{ debugName: "dlgText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fd = form(this.relation, sampleDataValidationSchema, {
      submission: {
        action: async (value) => {
          const dialog = this.dlg()?.nativeElement;
          let result = void 0;
          this.dlgText.set("Submitting and validating on the server, please hold!");
          dialog.showModal();
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          if (Math.random() < 0.9) {
            this.dlgText.set("Server validation failed, please fix the error!");
            result = await randomError(this.fd);
          } else {
            this.dlgText.set("Form submitted successfully!");
          }
          setTimeout(() => {
            dialog.close();
          }, 2e3);
          return result;
        }
      }
    });
    this.dlg = viewChild("dlg", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "dlg" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
  }
  static {
    this.\u0275fac = function SignalFormsExperimentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignalFormsExperimentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalFormsExperimentComponent, selectors: [["ng-component"]], viewQuery: function SignalFormsExperimentComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dlg, _c02, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 57, vars: 15, consts: [["dlg", ""], ["href", "/signalForms/tree"], [3, "formRoot"], [1, "wrapper"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Your name", "showError", "", "autocomplete", "name", 3, "formField"], ["for", "dob"], ["id", "dob", "type", "date", "showError", "", "autocomplete", "bday", 3, "formField"], ["for", "password"], ["id", "password", "type", "password", "placeholder", "Password", "showError", "", "autocomplete", "new-password", 3, "formField"], ["for", "confirm"], ["id", "confirm", "type", "password", "placeholder", "Confirm Password", "showError", "", "autocomplete", "new-password", 3, "formField"], [3, "formField"], ["showError", "", 3, "formField"], [3, "contacts"], ["for", "street"], ["id", "street", "type", "text", "placeholder", "Street", "showError", "", "autocomplete", "street-address", 3, "formField"], ["for", "city"], ["id", "city", "type", "text", "placeholder", "City", "showError", "", "autocomplete", "address-level2", 3, "formField"], ["for", "zip"], ["id", "zip", "type", "text", "placeholder", "Zip", "showError", "", "autocomplete", "postal-code", 3, "formField"], ["for", "state"], ["id", "state", "type", "text", "placeholder", "State", "showError", "", "autocomplete", "address-level1", 3, "formField"], [3, "tags"], ["type", "submit", 3, "disabled"]], template: function SignalFormsExperimentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, " Signal Forms Experiment ");
        \u0275\u0275elementStart(2, "small")(3, "a", 1);
        \u0275\u0275text(4, "recursive form");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "form", 2)(6, "div", 3)(7, "label", 4)(8, "span");
        \u0275\u0275text(9, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 5);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "label", 6)(12, "span");
        \u0275\u0275text(13, "Date of Birth");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 7);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 8)(16, "span");
        \u0275\u0275text(17, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "label", 10)(20, "span");
        \u0275\u0275text(21, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 11);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "label")(24, "span");
        \u0275\u0275text(25, "Favorite Random Int");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "se-input-random-int", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "label")(28, "span");
        \u0275\u0275text(29, "Or, use a custom zero-padded number favorite random");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "se-zero-pad-number", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "fieldset", 14);
        \u0275\u0275elementStart(32, "fieldset")(33, "legend");
        \u0275\u0275text(34, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "label", 15)(36, "span");
        \u0275\u0275text(37, "Street");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "label", 17)(40, "span");
        \u0275\u0275text(41, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 18);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "label", 19)(44, "span");
        \u0275\u0275text(45, "Zip");
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "input", 20);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "label", 21)(48, "span");
        \u0275\u0275text(49, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 22);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(51, "fieldset", 23);
        \u0275\u0275elementStart(52, "button", 24);
        \u0275\u0275text(53, "Submit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "dialog", null, 0);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("formRoot", ctx.fd);
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.fd.name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.dob);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.password);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.confirm);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.favoriteRandomInt);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.favoriteRandomInt);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("contacts", ctx.fd.contacts);
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.fd.address.street);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.address.city);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.address.zip);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.address.state);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("tags", ctx.fd.tags);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.fd().valid());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.dlgText());
      }
    }, dependencies: [
      FormField,
      TagsComponent,
      ContactsComponent,
      InputRandomIntComponent,
      ZeroPadNumberComponent,
      ShowErrorsInDom,
      // FormsModule,
      FormRoot
    ], styles: ['/* src/app/signal-forms-experiment/signal-forms-experiment.component.css */\n:host {\n  display: block;\n  margin-top: var(--size-3);\n  max-width: 99vw;\n  columns: 2;\n}\nform {\n  --size-content-3: 140ch;\n  width: var(--size-content-3);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: "firstDiv     AddressComponent" "contacts     tagsComponent" "submitButton submitButton";\n  gap: var(--size-4);\n  margin: auto;\n  background-color: var(--surface-2);\n  padding: var(--size-3);\n  border-radius: var(--radius-3);\n}\n@media (width < 1500px) {\n  form {\n    --size-content-3: min(98vw, 70ch);\n    grid-template-areas: "firstDiv" "AddressComponent" "contacts" "tagsComponent" "submitButton";\n    grid-template-columns: 1fr;\n  }\n}\nbutton[type=submit] {\n  grid-area: e;\n}\nform fieldset:nth-child(2) {\n  grid-area: contacts;\n}\nform fieldset:nth-child(3) {\n  grid-area: AddressComponent;\n}\nform fieldset:nth-child(4) {\n  grid-area: tagsComponent;\n}\ndiv.wrapper {\n  grid-area: firstDiv;\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\nlabel > *:nth-child(2) {\n  margin-left: var(--size-3);\n}\nlabel:has(input[required]) > span:first-child:after {\n  content: "*";\n  color: var(--red-3);\n}\nbutton[type=submit] {\n  grid-area: submitButton;\n}\n:is(input, textarea, select):user-invalid {\n  border: 2px solid var(--red-5);\n}\nfieldset > legend {\n  display: inline-flex;\n  align-items: center;\n  background: var(--surface-2);\n  padding-inline: calc(var(--size-2));\n  z-index: 1;\n}\nfieldset:has(legend button.action) {\n  padding-block-start: var(--size-5);\n}\nfieldset {\n  container-type: inline-size;\n  margin-block-end: 0;\n  position: relative;\n}\ndiv.error-messages {\n  display: none;\n}\ndiv.error-messages {\n  display: block;\n  color: var(--red-5);\n  grid-column: 2;\n  font-style: italic;\n  min-height: 1.5em;\n  font-variant: small-caps;\n  margin-inline-start: var(--size-2);\n  margin-block-start: calc(-1 * var(--size-2));\n}\ndiv.error-messages ul {\n  font-size: 0.95rem;\n}\ndiv.error-messages ul:not(:has(:nth-child(2))) {\n  list-style: none;\n  padding-inline-start: var(--size-4);\n}\nbutton.action {\n  border-radius: 50%;\n  width: var(--size-8);\n  height: var(--size-8);\n  padding: 0;\n  font-size: var(--size-3);\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\nfieldset > legend button.action {\n  position: absolute;\n  right: var(--size-3);\n  top: -2rem;\n}\ndialog {\n  padding: var(--size-6);\n  font-size: var(--size-5);\n  border-radius: var(--radius-3);\n  box-shadow: var(--shadow-4);\n  width: var(--size-content-3);\n}\n:is(input, textarea, [contenteditable]) {\n  caret-color: #ff6b6b;\n  transition: box-shadow 0.12s ease, background-color 0.12s ease;\n}\n:is(input:focus, textarea:focus, [contenteditable]:focus) {\n  box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.12), inset 0 0 0 1px rgba(255, 107, 107, 0.18);\n  background-color: rgba(255, 107, 107, 0.02);\n}\n:is(input::selection, textarea::selection) {\n  background: rgba(255, 107, 107, 0.18);\n}\ninput[type=number] {\n  caret-color: #ff6b6b;\n}\n[contenteditable]:focus {\n  outline: 2px solid rgba(255, 107, 107, 0.18);\n  outline-offset: 2px;\n}\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalFormsExperimentComponent, [{
    type: Component,
    args: [{ imports: [
      FormField,
      TagsComponent,
      ContactsComponent,
      InputRandomIntComponent,
      ZeroPadNumberComponent,
      ShowErrorsInDom,
      // FormsModule,
      FormRoot
    ], template: `
    <h1>
      Signal Forms Experiment
      <small><a href="/signalForms/tree">recursive form</a></small>
    </h1>
    <!-- FormRoot is new in V21.2. It provides a way to handle form submission and validation in a more structured way. -->
    <form [formRoot]="fd">
      <div class="wrapper">
        <label for="name">
          <span>Name</span>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            [formField]="fd.name"
            showError
            autocomplete="name"
          />
        </label>
        <label for="dob">
          <span>Date of Birth</span>
          <input
            id="dob"
            type="date"
            [formField]="fd.dob"
            showError
            autocomplete="bday"
          />
        </label>
        <label for="password">
          <span>Password</span>
          <input
            id="password"
            type="password"
            placeholder="Password"
            [formField]="fd.password"
            showError
            autocomplete="new-password"
          />
        </label>
        <label for="confirm">
          <span>Confirm Password</span>
          <input
            id="confirm"
            type="password"
            placeholder="Confirm Password"
            [formField]="fd.confirm"
            showError
            autocomplete="new-password"
          />
        </label>
        <label>
          <span>Favorite Random Int</span>
          <!-- This is a custom form control that generates a random integer and binds it to the form field. -->
          <se-input-random-int [formField]="fd.favoriteRandomInt" />
        </label>
        <label>
          <span>Or, use a custom zero-padded number favorite random</span>
          <!-- This is a custom form control that displays a zero-padded number and binds it to the form field. -->
          <se-zero-pad-number [formField]="fd.favoriteRandomInt" showError />
        </label>
      </div>
      <!-- use the contacts component to iter over the contacts -->
      <fieldset [contacts]="fd.contacts"></fieldset>

      <fieldset>
        <legend>Address</legend>
        <label for="street">
          <span>Street</span>
          <input
            id="street"
            type="text"
            placeholder="Street"
            [formField]="fd.address.street"
            showError
            autocomplete="street-address"
          />
        </label>
        <label for="city">
          <span>City</span>
          <input
            id="city"
            type="text"
            placeholder="City"
            [formField]="fd.address.city"
            showError
            autocomplete="address-level2"
          />
        </label>
        <label for="zip">
          <span>Zip</span>
          <input
            id="zip"
            type="text"
            placeholder="Zip"
            [formField]="fd.address.zip"
            showError
            autocomplete="postal-code"
          />
        </label>
        <label for="state">
          <span>State</span>
          <input
            id="state"
            type="text"
            placeholder="State"
            [formField]="fd.address.state"
            showError
            autocomplete="address-level1"
          />
        </label>
      </fieldset>
      <!-- use the tags component to iter over the tags -->
      <fieldset [tags]="fd.tags"></fieldset>
      <button type="submit" [disabled]="!fd().valid()">Submit</button>
    </form>
    <dialog #dlg>{{ dlgText() }}</dialog>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/signal-forms-experiment/signal-forms-experiment.component.css */\n:host {\n  display: block;\n  margin-top: var(--size-3);\n  max-width: 99vw;\n  columns: 2;\n}\nform {\n  --size-content-3: 140ch;\n  width: var(--size-content-3);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: "firstDiv     AddressComponent" "contacts     tagsComponent" "submitButton submitButton";\n  gap: var(--size-4);\n  margin: auto;\n  background-color: var(--surface-2);\n  padding: var(--size-3);\n  border-radius: var(--radius-3);\n}\n@media (width < 1500px) {\n  form {\n    --size-content-3: min(98vw, 70ch);\n    grid-template-areas: "firstDiv" "AddressComponent" "contacts" "tagsComponent" "submitButton";\n    grid-template-columns: 1fr;\n  }\n}\nbutton[type=submit] {\n  grid-area: e;\n}\nform fieldset:nth-child(2) {\n  grid-area: contacts;\n}\nform fieldset:nth-child(3) {\n  grid-area: AddressComponent;\n}\nform fieldset:nth-child(4) {\n  grid-area: tagsComponent;\n}\ndiv.wrapper {\n  grid-area: firstDiv;\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\nlabel > *:nth-child(2) {\n  margin-left: var(--size-3);\n}\nlabel:has(input[required]) > span:first-child:after {\n  content: "*";\n  color: var(--red-3);\n}\nbutton[type=submit] {\n  grid-area: submitButton;\n}\n:is(input, textarea, select):user-invalid {\n  border: 2px solid var(--red-5);\n}\nfieldset > legend {\n  display: inline-flex;\n  align-items: center;\n  background: var(--surface-2);\n  padding-inline: calc(var(--size-2));\n  z-index: 1;\n}\nfieldset:has(legend button.action) {\n  padding-block-start: var(--size-5);\n}\nfieldset {\n  container-type: inline-size;\n  margin-block-end: 0;\n  position: relative;\n}\ndiv.error-messages {\n  display: none;\n}\ndiv.error-messages {\n  display: block;\n  color: var(--red-5);\n  grid-column: 2;\n  font-style: italic;\n  min-height: 1.5em;\n  font-variant: small-caps;\n  margin-inline-start: var(--size-2);\n  margin-block-start: calc(-1 * var(--size-2));\n}\ndiv.error-messages ul {\n  font-size: 0.95rem;\n}\ndiv.error-messages ul:not(:has(:nth-child(2))) {\n  list-style: none;\n  padding-inline-start: var(--size-4);\n}\nbutton.action {\n  border-radius: 50%;\n  width: var(--size-8);\n  height: var(--size-8);\n  padding: 0;\n  font-size: var(--size-3);\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\nfieldset > legend button.action {\n  position: absolute;\n  right: var(--size-3);\n  top: -2rem;\n}\ndialog {\n  padding: var(--size-6);\n  font-size: var(--size-5);\n  border-radius: var(--radius-3);\n  box-shadow: var(--shadow-4);\n  width: var(--size-content-3);\n}\n:is(input, textarea, [contenteditable]) {\n  caret-color: #ff6b6b;\n  transition: box-shadow 0.12s ease, background-color 0.12s ease;\n}\n:is(input:focus, textarea:focus, [contenteditable]:focus) {\n  box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.12), inset 0 0 0 1px rgba(255, 107, 107, 0.18);\n  background-color: rgba(255, 107, 107, 0.02);\n}\n:is(input::selection, textarea::selection) {\n  background: rgba(255, 107, 107, 0.18);\n}\ninput[type=number] {\n  caret-color: #ff6b6b;\n}\n[contenteditable]:focus {\n  outline: 2px solid rgba(255, 107, 107, 0.18);\n  outline-offset: 2px;\n}\n'] }]
  }], null, { dlg: [{ type: ViewChild, args: ["dlg", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalFormsExperimentComponent, { className: "SignalFormsExperimentComponent", filePath: "src/app/signal-forms-experiment/signal-forms-experiment.component.ts", lineNumber: 164 });
})();
export {
  SignalFormsExperimentComponent
};
