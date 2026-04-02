import {
  persistentSignal
} from "./chunk-ZPRQSZFG.js";
import "./chunk-IPCX26GH.js";
import "./chunk-UN3GGFEO.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/toh/toh.component.ts
function TohComponent_For_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 6);
  }
  if (rf & 2) {
    const puck_r1 = ctx.$implicit;
    \u0275\u0275styleProp("--size", puck_r1);
    \u0275\u0275attribute("data-weight", puck_r1);
  }
}
function TohComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TohComponent_For_1_Conditional_1_For_1_Template, 1, 3, "div", 5, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.puckList());
  }
}
function TohComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, TohComponent_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275attribute("dropzone", col_r3);
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r3 === 1 ? 1 : -1);
  }
}
function TohComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Stack ", col_r4);
  }
}
function getFirstDraggable(elm) {
  return Array.from(elm.children).find((child) => child.classList.contains("puck"));
}
function canDrop(targetStack, currentDragged2) {
  const first = targetStack.children[0];
  const draggedWeight = +(currentDragged2?.dataset?.weight || 0);
  const firstWeight = +(first?.dataset?.weight || 0);
  if (!currentDragged2)
    return false;
  if (firstWeight === 0)
    return true;
  return firstWeight > draggedWeight;
}
var currentDragged;
var TohComponent = class _TohComponent {
  constructor() {
    this.#elm = inject(ElementRef).nativeElement;
    this.pucks = persistentSignal("toh-pucks", 4);
    this.cols = persistentSignal("toh-cols", 3);
    this.puckList = computed(
      () => Array.from({ length: this.pucks() }, (_, i) => i + 1),
      ...ngDevMode ? [{ debugName: "puckList" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colNums = computed(
      () => Array.from({ length: this.cols() }, (_, i) => i + 1),
      ...ngDevMode ? [{ debugName: "colNums" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ = afterRenderEffect(() => {
      const rootElm = this.#elm;
      const stacks = Array.from(rootElm.querySelectorAll(".stack"));
      const draggables = Array.from(rootElm.querySelectorAll("[draggable]"));
      if (stacks.length !== this.cols()) {
        throw new Error("Mismatch in number of stacks");
      }
      if (draggables.length !== this.pucks()) {
        throw new Error("Mismatch in number of draggables");
      }
      for (const draggable of draggables) {
        draggable.removeEventListener("dragstart", handleDragStart);
        draggable.removeEventListener("dragend", handleDragEnd);
        draggable.addEventListener("dragstart", handleDragStart);
        draggable.addEventListener("dragend", handleDragEnd);
      }
      for (const stack of stacks) {
        stack.removeEventListener("dragover", handleDragOver);
        stack.removeEventListener("dragleave", handleDragLeave);
        stack.removeEventListener("drop", handleDrop);
        stack.addEventListener("dragover", handleDragOver);
        stack.addEventListener("dragleave", handleDragLeave);
        stack.addEventListener("drop", handleDrop);
      }
    });
    this._1 = afterRenderEffect(() => {
      this.#elm.style.setProperty("--cols", this.cols().toString());
      this.#elm.style.setProperty("--pucks", this.pucks().toString());
    });
  }
  #elm;
  static {
    this.\u0275fac = function TohComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TohComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TohComponent, selectors: [["ng-component"]], decls: 12, vars: 4, consts: [[1, "stack"], [1, "label"], [1, "row"], ["type", "range", "min", "3", "max", "10", 3, "input", "value"], ["type", "range", "min", "3", "max", "5", 3, "input", "value"], ["draggable", "true", 1, "puck", 3, "--size"], ["draggable", "true", 1, "puck"]], template: function TohComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, TohComponent_For_1_Template, 2, 2, "div", 0, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275repeaterCreate(2, TohComponent_For_3_Template, 2, 1, "div", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275domElementStart(4, "label", 2)(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "input", 3);
        \u0275\u0275domListener("input", function TohComponent_Template_input_input_7_listener($event) {
          return ctx.pucks.set($event.target.valueAsNumber);
        });
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(8, "label", 2)(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "input", 4);
        \u0275\u0275domListener("input", function TohComponent_Template_input_input_11_listener($event) {
          return ctx.cols.set($event.target.valueAsNumber);
        });
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.colNums());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.colNums());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Number of pucks: ", ctx.pucks());
        \u0275\u0275advance();
        \u0275\u0275domProperty("value", ctx.pucks());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Number of stacks: ", ctx.cols());
        \u0275\u0275advance();
        \u0275\u0275domProperty("value", ctx.cols());
      }
    }, styles: ['\n@property --cols { syntax: "<integer>"; inherits: true; initial-value: 3; }\n@property --pucks { syntax: "<integer>"; inherits: true; initial-value: 2; }\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(var(--cols), 1fr);\n  grid-template-rows: 1fr 2rem 1.5rem;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  block-size: 100%;\n}\n.row[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  gap: var(--size-2);\n}\ndiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: var(--surface-2);\n  align-items: center;\n  gap: var(--size-1);\n}\ndiv.stack[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.puck[_ngcontent-%COMP%] {\n  --size: attr(data-weight type(<integer>));\n  --_base: calc((100 / var(--pucks)));\n  inline-size: calc(var(--_base) * var(--size) * 1%);\n  color: var(--on-surface);\n  font-size: var(--font-size-4);\n  font-weight: bold;\n  padding-block: var(--size-1);\n  block-size: var(--size-8);\n  border-radius: var(--radius-2);\n  cursor: move;\n  background-color: var(--pink-0);\n}\n.puck[data-weight="1"][_ngcontent-%COMP%] {\n  background-color: var(--yellow-4);\n}\n.puck[data-weight="2"][_ngcontent-%COMP%] {\n  background-color: var(--pink-4);\n}\n.puck[data-weight="3"][_ngcontent-%COMP%] {\n  background-color: var(--purple-4);\n}\n.puck[data-weight="4"][_ngcontent-%COMP%] {\n  background-color: var(--blue-4);\n}\n.puck[data-weight="5"][_ngcontent-%COMP%] {\n  background-color: var(--cyan-4);\n}\n.puck[data-weight="6"][_ngcontent-%COMP%] {\n  background-color: var(--teal-4);\n}\n.puck[data-weight="7"][_ngcontent-%COMP%] {\n  background-color: var(--green-4);\n}\n.puck[data-weight="8"][_ngcontent-%COMP%] {\n  background-color: var(--lime-4);\n}\n.puck.placeholder[_ngcontent-%COMP%] {\n  border: 4px dashed var(--gray-6);\n  background-color: transparent;\n  box-sizing: border-box;\n}\n.dragging[_ngcontent-%COMP%] {\n  border: 4px dashed var(--gray-6);\n}\n.dragover[_ngcontent-%COMP%] {\n  background-color: var(--green-8);\n}\n.cantdrop[_ngcontent-%COMP%] {\n  background-color: var(--red-12);\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TohComponent, [{
    type: Component,
    args: [{ template: `
    @for (col of colNums(); track $index) {
      <div attr.dropzone="{{ col }}" class="stack">
        @if (col === 1) {
          @for (puck of puckList(); track $index) {
            <div draggable="true" [attr.data-weight]="puck" [style.--size]="puck" class="puck"></div>
          }
        }
      </div>
    }
    @for (col of colNums(); track $index) {
      <div class="label">Stack {{ col }}</div>
    }
    <label class="row">
      <span>Number of pucks: {{ pucks() }}</span>
      <input
        type="range"
        [value]="pucks()"
        (input)="pucks.set($any($event.target).valueAsNumber)"
        min="3"
        max="10"
      />
    </label>
    <label class="row">
      <span>Number of stacks: {{ cols() }}</span>
      <input
        type="range"
        [value]="cols()"
        (input)="cols.set($any($event.target).valueAsNumber)"
        min="3"
        max="5"
      />
    </label>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/toh/toh.component.css */\n@property --cols { syntax: "<integer>"; inherits: true; initial-value: 3; }\n@property --pucks { syntax: "<integer>"; inherits: true; initial-value: 2; }\n:host {\n  display: grid;\n  grid-template-columns: repeat(var(--cols), 1fr);\n  grid-template-rows: 1fr 2rem 1.5rem;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  block-size: 100%;\n}\n.row {\n  grid-column: 1 / -1;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  gap: var(--size-2);\n}\ndiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: var(--surface-2);\n  align-items: center;\n  gap: var(--size-1);\n}\ndiv.stack {\n  justify-content: flex-end;\n}\n.puck {\n  --size: attr(data-weight type(<integer>));\n  --_base: calc((100 / var(--pucks)));\n  inline-size: calc(var(--_base) * var(--size) * 1%);\n  color: var(--on-surface);\n  font-size: var(--font-size-4);\n  font-weight: bold;\n  padding-block: var(--size-1);\n  block-size: var(--size-8);\n  border-radius: var(--radius-2);\n  cursor: move;\n  background-color: var(--pink-0);\n}\n.puck[data-weight="1"] {\n  background-color: var(--yellow-4);\n}\n.puck[data-weight="2"] {\n  background-color: var(--pink-4);\n}\n.puck[data-weight="3"] {\n  background-color: var(--purple-4);\n}\n.puck[data-weight="4"] {\n  background-color: var(--blue-4);\n}\n.puck[data-weight="5"] {\n  background-color: var(--cyan-4);\n}\n.puck[data-weight="6"] {\n  background-color: var(--teal-4);\n}\n.puck[data-weight="7"] {\n  background-color: var(--green-4);\n}\n.puck[data-weight="8"] {\n  background-color: var(--lime-4);\n}\n.puck.placeholder {\n  border: 4px dashed var(--gray-6);\n  background-color: transparent;\n  box-sizing: border-box;\n}\n.dragging {\n  border: 4px dashed var(--gray-6);\n}\n.dragover {\n  background-color: var(--green-8);\n}\n.cantdrop {\n  background-color: var(--red-12);\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TohComponent, { className: "TohComponent", filePath: "src/app/toh/toh.component.ts", lineNumber: 69 });
})();
function handleDragLeave(ev) {
  const el = ev.currentTarget;
  el.classList.remove("dragover");
  el.classList.remove("cantdrop");
  ev.preventDefault();
}
var handleDrop = (ev) => {
  const el = ev.currentTarget;
  ev.preventDefault();
  el.classList.remove("dragover");
  el.classList.remove("cantdrop");
  if (canDrop(el, currentDragged) && currentDragged) {
    if (el.children.length > 0) {
      el.insertBefore(currentDragged, el.children[0]);
    } else {
      el.appendChild(currentDragged);
    }
    currentDragged = void 0;
  }
};
function handleDragStart(ev) {
  const el = ev.currentTarget;
  const first = getFirstDraggable(el.parentElement);
  if (el !== first) {
    ev.preventDefault();
    return;
  }
  el.classList.add("dragging");
  currentDragged = el;
}
function handleDragEnd(ev) {
  const el = ev.currentTarget;
  el.classList.remove("dragging");
}
function handleDragOver(ev) {
  const el = ev.currentTarget;
  if (currentDragged?.parentElement === el)
    return;
  if (canDrop(el, currentDragged)) {
    el.classList.add("dragover");
  } else {
    el.classList.add("cantdrop");
  }
  ev.preventDefault();
}
export {
  TohComponent,
  canDrop,
  getFirstDraggable
};
