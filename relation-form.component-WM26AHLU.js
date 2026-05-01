import {
  RelationsService
} from "./chunk-X7MNV4PP.js";
import "./chunk-II6ZEKWC.js";
import "./chunk-MJ4PLPQG.js";
import "./chunk-3PFWJ23U.js";
import "./chunk-V5IPUR26.js";
import "./chunk-JX56EMXU.js";
import "./chunk-XUVHIZKL.js";
import "./chunk-H7TM7WNO.js";
import {
  cloneDeep,
  deepDiff,
  flattenRecord,
  unFlattenRecord
} from "./chunk-5LQK5NDQ.js";
import "./chunk-KVEFCSSA.js";
import "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewChild,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵqueryAdvance,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-T5ZKQ47R.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/crud-stuff/relation-form/relation-form.component.ts
var _c0 = ["form"];
var RelationForm = class _RelationForm {
  constructor() {
    this.id = input.required(
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rev = input.required(
      ...ngDevMode ? [{ debugName: "rev" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.done = output();
    this.form = viewChild(
      "form",
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rs = inject(RelationsService);
    this.relation = this.rs.read(this.id);
    this.flatData = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "flatData" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => this.relation.value(),
      computation: (data) => flattenRecord(data ?? {})
    }));
    this.fields = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "fields" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.flatData,
      computation: (data) => Object.keys(data)
    }));
    this.originalData = computed(
      () => cloneDeep(this.relation.value() ?? {}),
      ...ngDevMode ? [{ debugName: "originalData" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentFormData = computed(
      () => {
        const form = this.form()?.nativeElement;
        if (!form) {
          return {};
        }
        const newData = __spreadValues({}, this.flatData());
        for (const field of this.fields()) {
          if (form[field]) {
            const type = typeof newData[field];
            if (type === "string") {
              newData[field] = form[field].value;
            }
            if (type === "number") {
              newData[field] = Number(form[field].value);
            }
            if (type === "boolean") {
              newData[field] = form[field].checked;
            }
          }
        }
        return unFlattenRecord(newData);
      },
      ...ngDevMode ? [{ debugName: "currentFormData" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._r = afterRenderEffect(async () => {
      const rev = this.rev();
      const currentRev = this.relation.value()?._rev;
      console.log({ rev, currentRev });
      if (rev && currentRev && rev !== currentRev) {
        const newData = await this.rs.reFetch(this.id());
        console.log("The relation has been updated elsewhere. Please reload the form to get the latest data.");
        const myChanges = deepDiff(this.originalData(), this.currentFormData());
        const remoteChanges = deepDiff(this.originalData(), newData);
        console.log("Remote changes:");
        console.dir(remoteChanges);
        console.log("Your unsaved changes:");
        console.dir(myChanges);
      }
    });
    this._ = effect(
      () => {
        const data = this.flatData();
        const form = this.form()?.nativeElement;
        if (!data || !form)
          return;
        for (const [name, value] of Object.entries(data)) {
          if (form[name]) {
            form[name].value = value;
          }
        }
      },
      ...ngDevMode ? [{ debugName: "_" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async submit(ev) {
    ev.preventDefault();
    const newUser = this.currentFormData();
    const { result, user, error } = await this.rs.update(newUser);
    if (result === "conflict") {
      console.log("Conflict detected, please reload the user data");
      this.relation.value.set(user);
    }
    if (result === "error") {
      if (error === "forbidden") {
        return this.done.emit();
      }
      console.log("Error updating the user");
      console.dir(error);
    }
    if (result === "ok" || result === "noChange") {
      console.log("User updated successfully");
      this.relation.reload();
      this.done.emit();
    }
  }
  static {
    this.\u0275fac = function RelationForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RelationForm)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RelationForm, selectors: [["relation-form"]], viewQuery: function RelationForm_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.form, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { id: [1, "id"], rev: [1, "rev"] }, outputs: { done: "done" }, decls: 37, vars: 0, consts: [["form", ""], [3, "submit"], ["for", "name"], ["id", "name", "name", "name", "required", ""], ["for", "username"], ["id", "username", "name", "username", "required", ""], ["for", "email"], ["id", "email", "name", "email", "required", "", "type", "email"], ["for", "street"], ["id", "street", "name", "address.street", "required", ""], ["for", "suite"], ["id", "suite", "name", "address.suite"], ["for", "city"], ["id", "city", "name", "address.city", "required", ""], ["for", "zipcode"], ["id", "zipcode", "name", "address.zipcode", "required", ""], ["for", "lat"], ["id", "lat", "name", "address.geo.lat", "required", "", "min", "-90", "max", "90", "type", "number", "step", "0.0001"], ["for", "lng"], ["id", "lng", "name", "address.geo.lng", "required", "", "min", "-180", "max", "180", "type", "number", "step", "0.0001"]], template: function RelationForm_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "form", 1, 0);
        \u0275\u0275domListener("submit", function RelationForm_Template_form_submit_0_listener($event) {
          return ctx.submit($event);
        });
        \u0275\u0275domElementStart(2, "label", 2);
        \u0275\u0275text(3, "Name");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(4, "input", 3);
        \u0275\u0275domElementStart(5, "label", 4);
        \u0275\u0275text(6, "Username");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(7, "input", 5);
        \u0275\u0275domElementStart(8, "label", 6);
        \u0275\u0275text(9, "Email");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(10, "input", 7);
        \u0275\u0275domElementStart(11, "fieldset")(12, "legend");
        \u0275\u0275text(13, "Address");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(14, "label", 8);
        \u0275\u0275text(15, "Street");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(16, "input", 9);
        \u0275\u0275domElementStart(17, "label", 10);
        \u0275\u0275text(18, "Suite");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(19, "input", 11);
        \u0275\u0275domElementStart(20, "label", 12);
        \u0275\u0275text(21, "City");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(22, "input", 13);
        \u0275\u0275domElementStart(23, "label", 14);
        \u0275\u0275text(24, "Zipcode");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(25, "input", 15);
        \u0275\u0275domElementStart(26, "fieldset")(27, "legend");
        \u0275\u0275text(28, "Geo");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(29, "label", 16);
        \u0275\u0275text(30, "Latitude");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(31, "input", 17);
        \u0275\u0275domElementStart(32, "label", 18);
        \u0275\u0275text(33, "Longitude");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(34, "input", 19);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(35, "button");
        \u0275\u0275text(36, "Submit");
        \u0275\u0275domElementEnd()();
      }
    }, styles: ['\nform[_ngcontent-%COMP%], \nfieldset[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\ninput[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nlabel[_ngcontent-%COMP%]:has(+ input[required]):after {\n  display: inline;\n  content: "*";\n  color: orange;\n}\ninput[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RelationForm, [{
    type: Component,
    args: [{ selector: "relation-form", template: `
    <form #form (submit)="submit($event)">
      <label for="name">Name</label>
      <input id="name" name="name" required />
      <label for="username">Username</label>
      <input id="username" name="username" required />
      <label for="email">Email</label>
      <input id="email" name="email" required type="email" />
      <fieldset>
        <legend>Address</legend>
        <label for="street">Street</label>
        <input id="street" name="address.street" required />
        <label for="suite">Suite</label>
        <input id="suite" name="address.suite" />
        <label for="city">City</label>
        <input id="city" name="address.city" required />
        <label for="zipcode">Zipcode</label>
        <input id="zipcode" name="address.zipcode" required />
        <fieldset>
          <legend>Geo</legend>
          <label for="lat">Latitude</label>
          <input
            id="lat"
            name="address.geo.lat"
            required
            min="-90"
            max="90"
            type="number"
            step="0.0001"
          />
          <label for="lng">Longitude</label>
          <input
            id="lng"
            name="address.geo.lng"
            required
            min="-180"
            max="180"
            type="number"
            step="0.0001"
          />
        </fieldset>
      </fieldset>
      <button>Submit</button>
    </form>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/crud-stuff/relation-form/relation-form.component.css */\nform,\nfieldset {\n  display: flex;\n  flex-direction: column;\n}\ninput {\n  margin-bottom: 1rem;\n}\nlabel:has(+ input[required]):after {\n  display: inline;\n  content: "*";\n  color: orange;\n}\ninput:last-child {\n  margin-bottom: 0;\n}\n'] }]
  }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], rev: [{ type: Input, args: [{ isSignal: true, alias: "rev", required: true }] }], done: [{ type: Output, args: ["done"] }], form: [{ type: ViewChild, args: ["form", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RelationForm, { className: "RelationForm", filePath: "src/app/crud-stuff/relation-form/relation-form.component.ts", lineNumber: 71 });
})();
export {
  RelationForm
};
