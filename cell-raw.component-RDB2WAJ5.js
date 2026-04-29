import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/cells/cell-raw/cell-raw.component.ts
var clampedRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;
var CellRawComponent = class _CellRawComponent {
  constructor() {
    this.zone = inject(NgZone);
    this.elm = inject(ElementRef).nativeElement;
    this.gridSize = 100;
    this.cells = [];
    this.aliveColor = `oklch(${clampedRandom(55, 95)}% 75% 173`;
    this.deadColor = `oklch(${clampedRandom(10, 55)}% 50% 280`;
    this.setup = async () => {
      if (typeof window === "undefined")
        return;
      if (typeof document === "undefined")
        return;
      const elm = this.elm;
      const cells = this.cells;
      const addCell = (id) => {
        const cell = document.createElement("cell");
        const alive = Math.random() < 0.06;
        cell.style.setProperty("--cellBg", alive ? this.aliveColor : this.deadColor);
        cells.push({ id, cell, alive });
        elm.appendChild(cell);
      };
      console.log(`adding ${this.gridSize * this.gridSize} cells`);
      for (let id = 0; id < this.gridSize * this.gridSize; id += 1) {
        addCell(id);
        id % 1e3 === 0 && await new Promise((r) => setTimeout(r, 15));
      }
      await new Promise((r) => setTimeout(r, 10));
      const rowLength = window.getComputedStyle(elm).getPropertyValue("grid-template-columns").split(" ").length;
      let i = cells.length - 1;
      console.log(elm, cells.length, rowLength);
      while (cells.length < rowLength * rowLength) {
        addCell(++i);
        i % 1e3 === 0 && await new Promise((r) => setTimeout(r, 4));
      }
      console.log("done creating", this.cells.length);
      i = 0;
      console.log("done adding", this.cells.length);
    };
    this.zone.runOutsideAngular(this.setup);
  }
  static {
    this.\u0275fac = function CellRawComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CellRawComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CellRawComponent, selectors: [["se-cell-raw"]], decls: 0, vars: 0, template: function CellRawComponent_Template(rf, ctx) {
    }, styles: ['/* src/app/cells/cell-raw/cell-raw.component.css */\n@property --cellBg { syntax: "<color>"; inherits: true; initial-value: black; }\n@property --cellSize { syntax: "<length> | <percentage>"; inherits: true; initial-value: 1.25rem; }\n:root {\n  --cellBg: oklch(0.5 0.5 150);\n  --cellSize: 10px;\n}\n#outlet > se-cell-raw {\n  display: grid;\n  height: 95vh;\n  aspect-ratio: 1;\n  grid-template-columns: repeat(auto-fit, var(--cellSize));\n  grid-template-rows: repeat(auto-fit, var(--cellSize));\n  gap: 0.15rem;\n}\ncell {\n  display: block;\n  float: left;\n  margin: 1px;\n  width: var(--cellSize);\n  aspect-ratio: 1;\n  background-color: var(--cellBg);\n  border-radius: calc(var(--cellSize / 20));\n  padding: 0rem;\n  text-overflow: ellipsis;\n}\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellRawComponent, [{
    type: Component,
    args: [{ selector: "se-cell-raw", imports: [], template: ``, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ['/* src/app/cells/cell-raw/cell-raw.component.css */\n@property --cellBg { syntax: "<color>"; inherits: true; initial-value: black; }\n@property --cellSize { syntax: "<length> | <percentage>"; inherits: true; initial-value: 1.25rem; }\n:root {\n  --cellBg: oklch(0.5 0.5 150);\n  --cellSize: 10px;\n}\n#outlet > se-cell-raw {\n  display: grid;\n  height: 95vh;\n  aspect-ratio: 1;\n  grid-template-columns: repeat(auto-fit, var(--cellSize));\n  grid-template-rows: repeat(auto-fit, var(--cellSize));\n  gap: 0.15rem;\n}\ncell {\n  display: block;\n  float: left;\n  margin: 1px;\n  width: var(--cellSize);\n  aspect-ratio: 1;\n  background-color: var(--cellBg);\n  border-radius: calc(var(--cellSize / 20));\n  padding: 0rem;\n  text-overflow: ellipsis;\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CellRawComponent, { className: "CellRawComponent", filePath: "src/app/cells/cell-raw/cell-raw.component.ts", lineNumber: 21 });
})();
export {
  CellRawComponent
};
