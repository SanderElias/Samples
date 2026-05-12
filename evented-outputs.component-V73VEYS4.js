import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Output,
  ViewChildren,
  computed,
  forwardRef,
  inject,
  model,
  setClassMetadata,
  signal,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomProperty,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-LHOZ36SL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/evented-outputs/ev-child/ev-child.component.ts
var _c0 = ["*"];
var EvChildComponent = class _EvChildComponent {
  constructor() {
    this.selected = model(
      false,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = model.required(
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = `evChild-${childId++}`;
    this.#onSelected = domEventOutput("onSelected");
    this.#onDeselected = domEventOutput("onDeselected");
  }
  #onSelected;
  #onDeselected;
  handleClick() {
    this.selected.set(!this.selected());
    if (this.selected()) {
      this.#onSelected.emit(this.id);
    } else {
      this.#onDeselected.emit(this.id);
    }
  }
  static {
    this.\u0275fac = function EvChildComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EvChildComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvChildComponent, selectors: [["ev-child"]], hostVars: 3, hostBindings: function EvChildComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function EvChildComponent_click_HostBindingHandler() {
          return ctx.handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275classProp("selected", ctx.selected());
      }
    }, inputs: { selected: [1, "selected"], value: [1, "value"] }, outputs: { selected: "selectedChange", value: "valueChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function EvChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #404040;\n  padding: 0.35rem;\n  border-radius: 0.35rem;\n  color: whitesmoke;\n}\n.selected[_nghost-%COMP%] {\n  display: block;\n  background-color: #606060;\n  color: white;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvChildComponent, [{
    type: Component,
    args: [{ selector: "ev-child", imports: [], template: ` <ng-content /> `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[class.selected]": "selected()",
      "(click)": "handleClick()",
      "[id]": "id"
    }, styles: ["/* src/app/evented-outputs/ev-child/ev-child.component.css */\n:host {\n  display: block;\n  background-color: #404040;\n  padding: 0.35rem;\n  border-radius: 0.35rem;\n  color: whitesmoke;\n}\n:host.selected {\n  display: block;\n  background-color: #606060;\n  color: white;\n}\n"] }]
  }], null, { selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }, { type: Output, args: ["selectedChange"] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }, { type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvChildComponent, { className: "EvChildComponent", filePath: "src/app/evented-outputs/ev-child/ev-child.component.ts", lineNumber: 21 });
})();
var childId = 0n;
var domEventOutput = (name, options = { bubbles: true }) => {
  const elm = inject(ElementRef).nativeElement;
  return {
    emit: (payload) => {
      const ev = new CustomEvent(name, __spreadProps(__spreadValues({}, options), { detail: payload }));
      elm.dispatchEvent(ev);
    }
  };
};

// src/app/evented-outputs/evented-outputs.component.ts
function EventedOutputsComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ev-child", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1);
  }
}
var EventedOutputsComponent = class _EventedOutputsComponent {
  constructor() {
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.tiles = viewChildren(
      EvChildComponent,
      ...ngDevMode ? [{ debugName: "tiles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.many = signal(
      true,
      ...ngDevMode ? [{ debugName: "many" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.$selected = computed(
      () => {
        const tiles = this.tiles();
        return tiles.filter((t) => t.selected()).map((t) => t.value());
      },
      ...ngDevMode ? [{ debugName: "$selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.handleSelected = (id) => {
      if (!this.many()) {
        this.tiles().forEach((t) => {
          if (t.id !== id) {
            t.selected.set(false);
          }
        });
      }
    };
    this.add = () => {
      this.arr.push(this.arr.length + 1);
    };
  }
  static {
    this.\u0275fac = function EventedOutputsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventedOutputsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventedOutputsComponent, selectors: [["se-evented-outputs"]], viewQuery: function EventedOutputsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.tiles, EvChildComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostBindings: function EventedOutputsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("onSelected", function EventedOutputsComponent_onSelected_HostBindingHandler($event) {
          return ctx.handleSelected($event.detail);
        });
      }
    }, decls: 14, vars: 1, consts: [[3, "click"], ["type", "checkbox", "checked", "many()", 3, "change"], [3, "value"]], template: function EventedOutputsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3");
        \u0275\u0275text(1, "Evented Outputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, " Click on the items to toggle their selection ");
        \u0275\u0275elementStart(6, "button", 0);
        \u0275\u0275listener("click", function EventedOutputsComponent_Template_button_click_6_listener() {
          return ctx.add();
        });
        \u0275\u0275text(7, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "label")(9, "input", 1);
        \u0275\u0275listener("change", function EventedOutputsComponent_Template_input_change_9_listener() {
          return ctx.many.set(!ctx.many());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "mutliselect?");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(12, EventedOutputsComponent_For_13_Template, 2, 2, "ev-child", 2, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Selected items: ", ctx.$selected());
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.arr);
      }
    }, dependencies: [EvChildComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  flex-direction: column;\n}\np[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: baseline;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventedOutputsComponent, [{
    type: Component,
    args: [{ selector: "se-evented-outputs", imports: [EvChildComponent], template: `
    <h3>Evented Outputs</h3>
    <div>Selected items: {{ $selected() }}</div>
    <p>
      Click on the items to toggle their selection
      <button (click)="add()">add</button>
      <label>
        <input type="checkbox" (change)="many.set(!many())" checked="many()" />
        <span>mutliselect?</span>
      </label>
    </p>
    @for (item of arr; track $index) {
      <ev-child [value]="item"> {{ item }}</ev-child>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      // use a custom DOM event to signal selection
      "(onSelected)": "handleSelected($event.detail)"
    }, styles: ["/* src/app/evented-outputs/evented-outputs.component.css */\n:host {\n  display: flex;\n  gap: 0.35rem;\n  flex-direction: column;\n}\np {\n  display: flex;\n  gap: 1rem;\n  align-items: baseline;\n}\n"] }]
  }], null, { tiles: [{ type: ViewChildren, args: [forwardRef(() => EvChildComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventedOutputsComponent, { className: "EventedOutputsComponent", filePath: "src/app/evented-outputs/evented-outputs.component.ts", lineNumber: 43 });
})();
export {
  EventedOutputsComponent
};
