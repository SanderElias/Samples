import {
  ChangeDetectionStrategy,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/view-transitions/view-transitions.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ViewTransitionsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const box_r1 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", "hsl(" + box_r1.value * 3.6 + ", 70%, 50%)")("view-transition-name", "box-" + box_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", box_r1.value, " ");
  }
}
var ViewTransitionsComponent = class _ViewTransitionsComponent {
  constructor() {
    this.boxes = signal(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        value: Math.floor(Math.random() * 100)
      })),
      ...ngDevMode ? [{ debugName: "boxes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sortOrder = signal(
      "none",
      ...ngDevMode ? [{ debugName: "sortOrder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sortedBoxes = computed(
      () => {
        const order = this.sortOrder();
        const boxes = this.boxes();
        if (order === "none") {
          return boxes;
        }
        return [...boxes].sort((a, b) => order === "asc" ? a.value - b.value : b.value - a.value);
      },
      ...ngDevMode ? [{ debugName: "sortedBoxes" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addBox() {
    const currentBoxes = this.boxes();
    const newBox = {
      id: currentBoxes.length,
      value: Math.floor(Math.random() * 100)
    };
    this.boxes.set([...currentBoxes, newBox]);
  }
  toggleSortOrder() {
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        this.sortOrder.set(this.sortOrder() === "none" ? "asc" : this.sortOrder() === "asc" ? "desc" : "none");
      });
    } else {
      this.sortOrder.set(this.sortOrder() === "none" ? "asc" : this.sortOrder() === "asc" ? "desc" : "none");
    }
  }
  static {
    this.\u0275fac = function ViewTransitionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewTransitionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewTransitionsComponent, selectors: [["se-view-transitions"]], decls: 10, vars: 0, consts: [[1, "button-bar"], [3, "click"], [1, "grid"], [1, "box", 3, "backgroundColor", "view-transition-name"], [1, "box"]], template: function ViewTransitionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "View Transition playground");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "div", 0)(3, "button", 1);
        \u0275\u0275domListener("click", function ViewTransitionsComponent_Template_button_click_3_listener() {
          return ctx.toggleSortOrder();
        });
        \u0275\u0275text(4, "click to sort");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "button", 1);
        \u0275\u0275domListener("click", function ViewTransitionsComponent_Template_button_click_5_listener() {
          return ctx.addBox();
        });
        \u0275\u0275text(6, "click to add");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "div", 2);
        \u0275\u0275repeaterCreate(8, ViewTransitionsComponent_For_9_Template, 2, 5, "div", 3, _forTrack0);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.sortedBoxes());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\ndiv.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));\n  gap: 10px;\n  padding: 10px;\n}\ndiv.button-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding-inline: 20px;\n}\ndiv.box[_ngcontent-%COMP%] {\n  aspect-ratio: 1 / 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewTransitionsComponent, [{
    type: Component,
    args: [{ selector: "se-view-transitions", imports: [], template: `
    <h1>View Transition playground</h1>
    <div class="button-bar">
      <button (click)="toggleSortOrder()">click to sort</button>
      <button (click)="addBox()">click to add</button>
    </div>
    <div class="grid">
      @for (box of sortedBoxes(); track box.id) {
        <div
          class="box"
          [style.backgroundColor]="'hsl(' + box.value * 3.6 + ', 70%, 50%)'"
          [style.view-transition-name]="'box-' + box.id"
        >
          {{ box.value }}
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/view-transitions/view-transitions.component.css */\n:host {\n  display: block;\n}\ndiv.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));\n  gap: 10px;\n  padding: 10px;\n}\ndiv.button-bar {\n  display: flex;\n  gap: 20px;\n  padding-inline: 20px;\n}\ndiv.box {\n  aspect-ratio: 1 / 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewTransitionsComponent, { className: "ViewTransitionsComponent", filePath: "src/app/view-transitions/view-transitions.component.ts", lineNumber: 32 });
})();
export {
  ViewTransitionsComponent
};
