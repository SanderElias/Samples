import {
  LoggedIn
} from "./chunk-N67WQN73.js";
import {
  assertDefined
} from "./chunk-IHBT2AMQ.js";
import "./chunk-LJ2EIP3L.js";
import "./chunk-V6OJJHGF.js";
import "./chunk-2KCW2NJN.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  afterRenderEffect,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵqueryAdvance,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-5EIP4NRL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/grid-play/grid-play.component.ts
var _c0 = ["gridContainer"];
var GridPlayComponent = class _GridPlayComponent {
  constructor() {
    this.user = inject(LoggedIn).user;
    this.mouseOnCell = signal({ x: 0, y: 0 }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "mouseOnCell" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.x === b.x && a.y === b.y }));
    this.gridContainerRef = viewChild("gridContainer", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "gridContainerRef" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this.gridContainer = computed(
      () => assertDefined(this.gridContainerRef()?.nativeElement),
      ...ngDevMode ? [{ debugName: "gridContainer" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.gridProps = signal(
      {
        cellSize: 0,
        gap: 0,
        xCells: 0,
        yCells: 0
      },
      ...ngDevMode ? [{ debugName: "gridProps" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ = afterRenderEffect({
      read: () => {
        const gridContainer = this.gridContainer();
        const style = getComputedStyle(gridContainer);
        this.gridProps.set({
          cellSize: parseFloat(style.getPropertyValue("--cellSize") || "10"),
          gap: parseFloat(style.getPropertyValue("--gap") || "1"),
          xCells: Number(style.getPropertyValue("--xCells") || "40"),
          yCells: Number(style.getPropertyValue("--yCells") || "40")
        });
      }
    });
  }
  mouseToXY(event) {
    const gridContainer = this.gridContainer();
    const { cellSize, gap, xCells, yCells } = this.gridProps();
    const rect = gridContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const sizeIncludingGap = cellSize + gap;
    const x = Math.min(xCells, Math.floor(mouseX / sizeIncludingGap) + 1);
    const y = Math.min(yCells, Math.floor(mouseY / sizeIncludingGap) + 1);
    this.mouseOnCell.set({ x, y });
  }
  static {
    this.\u0275fac = function GridPlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridPlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridPlayComponent, selectors: [["se-grid-play"]], viewQuery: function GridPlayComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.gridContainerRef, _c0, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 11, vars: 15, consts: [["gridContainer", ""], [1, "grid-container", 3, "mousemove"], [1, "grid-item"], [1, "mouse-indicator"], ["id", "cell-coords"]], template: function GridPlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "div", 1, 0);
        \u0275\u0275domListener("mousemove", function GridPlayComponent_Template_div_mousemove_2_listener($event) {
          return ctx.mouseToXY($event);
        });
        \u0275\u0275domElementStart(4, "div", 2);
        \u0275\u0275text(5, "1");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 2);
        \u0275\u0275text(7, "3");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(8, "div", 3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "div", 4);
        \u0275\u0275text(10);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("Grid Play ", ctx.user());
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("--x", 1)("--y", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("--x", 20)("--y", 40);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("--x", ctx.mouseOnCell().x)("--y", ctx.mouseOnCell().y);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.mouseOnCell().x, ", ", ctx.mouseOnCell().y);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  --cellSize: 15px;\n  --xCells: 25;\n  --yCells: 25;\n  --gap: 1px;\n  --accent1: #f082cb;\n  --accent2: #9c1d7c;\n}\n.mouse-indicator[_ngcontent-%COMP%] {\n  display: none;\n  width: calc(var(--cellSize) - (2 * var(--gap)));\n  height: calc(var(--cellSize) - (2 * var(--gap)));\n  pointer-events: none;\n  border: 2px solid black;\n  border-radius: 4px;\n  box-sizing: border-box;\n  grid-column-start: var(--x);\n  grid-row-start: var(--y);\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  inline-size: calc(var(--xCells) * var(--cellSize) + (var(--xCells) - 1) * var(--gap));\n  block-size: calc(var(--yCells) * var(--cellSize) + (var(--yCells) - 1) * var(--gap));\n  grid-template-columns: repeat(var(--xCells), var(--cellSize));\n  grid-template-rows: repeat(var(--yCells), var(--cellSize));\n  gap: var(--gap);\n  align-items: center;\n  justify-items: center;\n  border: 1px solid white;\n  background-image:\n    repeating-linear-gradient(\n      to right,\n      white 0 var(--gap),\n      rgba(255, 255, 255, 0) var(--gap) calc(var(--cellSize) + var(--gap))),\n    repeating-linear-gradient(\n      to bottom,\n      white 0 var(--gap),\n      rgba(255, 255, 255, 0) var(--gap) calc(var(--cellSize) + var(--gap))),\n    linear-gradient(\n      135deg,\n      var(--accent1) 0%,\n      var(--accent2) 100%);\n  background-position:\n    calc(var(--cellSize)) 0,\n    0 calc(var(--cellSize)),\n    0 0;\n  background-repeat:\n    repeat,\n    repeat,\n    no-repeat;\n  background-size: auto;\n  background-clip: padding-box;\n}\n.grid-container[_ngcontent-%COMP%]:hover   .mouse-indicator[_ngcontent-%COMP%] {\n  display: block;\n}\n.grid-item[_ngcontent-%COMP%] {\n  --x: attr(data-x type(<number>));\n  --y: attr(data-y type(<number>));\n  font-weight: bold;\n  font-size: calc(var(--cellSize) * 0.95);\n  color: white;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  grid-column-start: var(--x);\n  grid-row-start: var(--y);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridPlayComponent, [{
    type: Component,
    args: [{ selector: "se-grid-play", imports: [], template: `
    <h1>Grid Play {{ user() }}</h1>
    <div #gridContainer class="grid-container" (mousemove)="mouseToXY($event)">
      <div class="grid-item" [style.--x]="1" [style.--y]="1">1</div>
      <div class="grid-item" [style.--x]="20" [style.--y]="40">3</div>
      <div
        class="mouse-indicator"
        [style.--x]="mouseOnCell().x"
        [style.--y]="mouseOnCell().y"
      ></div>
    </div>
    <div id="cell-coords">{{ mouseOnCell().x }}, {{ mouseOnCell().y }}</div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/grid-play/grid-play.component.css */\n:host {\n  display: block;\n  --cellSize: 15px;\n  --xCells: 25;\n  --yCells: 25;\n  --gap: 1px;\n  --accent1: #f082cb;\n  --accent2: #9c1d7c;\n}\n.mouse-indicator {\n  display: none;\n  width: calc(var(--cellSize) - (2 * var(--gap)));\n  height: calc(var(--cellSize) - (2 * var(--gap)));\n  pointer-events: none;\n  border: 2px solid black;\n  border-radius: 4px;\n  box-sizing: border-box;\n  grid-column-start: var(--x);\n  grid-row-start: var(--y);\n}\n.grid-container {\n  display: grid;\n  inline-size: calc(var(--xCells) * var(--cellSize) + (var(--xCells) - 1) * var(--gap));\n  block-size: calc(var(--yCells) * var(--cellSize) + (var(--yCells) - 1) * var(--gap));\n  grid-template-columns: repeat(var(--xCells), var(--cellSize));\n  grid-template-rows: repeat(var(--yCells), var(--cellSize));\n  gap: var(--gap);\n  align-items: center;\n  justify-items: center;\n  border: 1px solid white;\n  background-image:\n    repeating-linear-gradient(\n      to right,\n      white 0 var(--gap),\n      rgba(255, 255, 255, 0) var(--gap) calc(var(--cellSize) + var(--gap))),\n    repeating-linear-gradient(\n      to bottom,\n      white 0 var(--gap),\n      rgba(255, 255, 255, 0) var(--gap) calc(var(--cellSize) + var(--gap))),\n    linear-gradient(\n      135deg,\n      var(--accent1) 0%,\n      var(--accent2) 100%);\n  background-position:\n    calc(var(--cellSize)) 0,\n    0 calc(var(--cellSize)),\n    0 0;\n  background-repeat:\n    repeat,\n    repeat,\n    no-repeat;\n  background-size: auto;\n  background-clip: padding-box;\n}\n.grid-container:hover .mouse-indicator {\n  display: block;\n}\n.grid-item {\n  --x: attr(data-x type(<number>));\n  --y: attr(data-y type(<number>));\n  font-weight: bold;\n  font-size: calc(var(--cellSize) * 0.95);\n  color: white;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  grid-column-start: var(--x);\n  grid-row-start: var(--y);\n}\n"] }]
  }], null, { gridContainerRef: [{ type: ViewChild, args: ["gridContainer", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridPlayComponent, { className: "GridPlayComponent", filePath: "src/app/grid-play/grid-play.component.ts", lineNumber: 34 });
})();
export {
  GridPlayComponent
};
