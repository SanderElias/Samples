import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  Output,
  afterRenderEffect,
  computed,
  inject,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/cells/cell/cell.component.ts
var clampedRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;
var CellComponent = class _CellComponent {
  constructor() {
    this.cellData = model.required(
      ...ngDevMode ? [{ debugName: "cellData" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.elm = inject(ElementRef).nativeElement;
    this.zone = inject(NgZone);
    this.aliveColor = `oklch(${clampedRandom(55, 95)}% 75% 173`;
    this.deadColor = `oklch(${clampedRandom(10, 55)}% 50% 280`;
    this.id = computed(
      () => this.cellData().id,
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.alive = computed(
      () => this.cellData().alive,
      ...ngDevMode ? [{ debugName: "alive" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setBg = () => this.zone.runOutsideAngular(() => this.elm.style.setProperty("--cellBg", this.alive() ? this.aliveColor : this.deadColor));
    this._ = afterRenderEffect(() => this.setBg());
  }
  ngOnInit() {
    this.setBg();
  }
  static {
    this.\u0275fac = function CellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CellComponent, selectors: [["se-cell"]], inputs: { cellData: [1, "cellData"] }, outputs: { cellData: "cellDataChange" }, decls: 0, vars: 0, template: function CellComponent_Template(rf, ctx) {
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  width: var(--cellSize);\n  aspect-ratio: 1;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--cellBg);\n  border-radius: 0.25rem;\n  padding: 0rem;\n  overflow: none;\n  text-overflow: ellipsis;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellComponent, [{
    type: Component,
    args: [{ selector: "se-cell", imports: [], template: ``, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/cells/cell/cell.component.css */\n:host {\n  display: flex;\n  width: var(--cellSize);\n  aspect-ratio: 1;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--cellBg);\n  border-radius: 0.25rem;\n  padding: 0rem;\n  overflow: none;\n  text-overflow: ellipsis;\n}\n"] }]
  }], null, { cellData: [{ type: Input, args: [{ isSignal: true, alias: "cellData", required: true }] }, { type: Output, args: ["cellDataChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CellComponent, { className: "CellComponent", filePath: "src/app/cells/cell/cell.component.ts", lineNumber: 24 });
})();

// src/app/cells/cells.component.ts
function CellsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "se-cell", 1);
    \u0275\u0275twoWayListener("cellDataChange", function CellsComponent_For_1_Template_se_cell_cellDataChange_0_listener($event) {
      const cell_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(cell_r2, $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r2 = ctx.$implicit;
    \u0275\u0275twoWayProperty("cellData", cell_r2);
  }
}
var clampedRandom2 = (min, max) => Math.round(Math.random() * (max - min)) + min;
var CellsComponent = class _CellsComponent {
  constructor() {
    this.elm = inject(ElementRef).nativeElement;
    this.zone = inject(NgZone);
    this.cdr = inject(ChangeDetectorRef);
    this.isAlive = signal(
      false,
      ...ngDevMode ? [{ debugName: "isAlive" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.gridSize = signal(
      100,
      ...ngDevMode ? [{ debugName: "gridSize" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cells = signal(
      Array.from({ length: 200 }, (_, i) => signal({
        id: i,
        alive: Math.random() < 0.06
        // populate ~5%
      })),
      ...ngDevMode ? [{ debugName: "cells" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.growList = async () => {
      const neededCells = this.gridSize() * this.gridSize();
      while (this.cells().length < neededCells) {
        const len = this.cells().length;
        const addNum = 250;
        const add = len + addNum > neededCells ? neededCells - len : addNum;
        const newCells = [];
        for (let i = 0; i < add; i += 1) {
          newCells.push(signal({
            id: len + i,
            alive: Math.random() < 0.06
            // populate ~5%
          }));
        }
        this.cells.update((c) => c.concat(newCells));
        await new Promise((r) => setTimeout(r, 5));
      }
      console.log(`Done, created ${neededCells} in a ${this.gridSize()} x ${this.gridSize()} grid.`);
    };
    this.repopulate = () => this.cells().forEach((cell) => cell.update(({ id }) => ({ id, alive: Math.random() < 0.06 })));
    this.calcGrid = () => {
      if (typeof window === "undefined")
        return;
      const gridStyle = window.getComputedStyle(this.elm);
      const cols = gridStyle.getPropertyValue("grid-template-columns").split(" ").length;
      this.gridSize.set(cols);
    };
    this.aliveColor = `oklch(${clampedRandom2(55, 95)}% 75% 173`;
    this.deadColor = `oklch(${clampedRandom2(10, 55)}% 50% 280`;
    this.cycle = async () => {
      const cells = this.cells();
      const gs = this.gridSize();
      for (const cell of cells) {
        const { id, alive } = cell();
        const alives = neighbors(id, gs).reduce((aliveCOunt, cellId) => aliveCOunt += cells[cellId]?.().alive ? 1 : 0, 0);
        if (alive && !(alives === 2 || alives === 3)) {
          cell.set({ id, alive: false });
          continue;
        }
        if (!alive && alives === 3) {
          cell.set({ id, alive: true });
        }
      }
      if (this.isAlive()) {
        await new Promise((r) => setTimeout(() => this.cycle(), 100));
      }
    };
    this.onClick = (ev) => {
      this.zone.runOutsideAngular(() => {
        if (this.started) {
          clearInterval(this.started);
          this.repopulate();
          this.started = void 0;
        } else {
          this.started = setInterval(this.cycle, 100);
        }
      });
    };
  }
  async ngOnInit() {
    this.calcGrid();
    await this.growList();
    this.isAlive.set(true);
    this.cycle();
  }
  static {
    this.\u0275fac = function CellsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CellsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CellsComponent, selectors: [["se-cells"]], hostBindings: function CellsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CellsComponent_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    }, decls: 2, vars: 0, consts: [[3, "cellData"], [3, "cellDataChange", "cellData"]], template: function CellsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, CellsComponent_For_1_Template, 1, 1, "se-cell", 0, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.cells());
      }
    }, dependencies: [CellComponent], styles: ['\n@property --cellBg { syntax: "<color>"; inherits: true; initial-value: black; }\n@property --cellSize { syntax: "<length> | <percentage>"; inherits: true; initial-value: 1.25rem; }\n[_nghost-%COMP%] {\n  --cellBg: oklch(0.5 0.5 150);\n  --cellSize: 15px;\n  display: grid;\n  height: 95vh;\n  aspect-ratio: 1;\n  grid-template-columns: repeat(auto-fit, var(--cellSize));\n  grid-template-rows: repeat(auto-fit, var(--cellSize));\n  gap: 0.15rem;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellsComponent, [{
    type: Component,
    args: [{ selector: "se-cells", imports: [CellComponent], template: `@for (cell of cells(); track $index) {
    <se-cell [(cellData)]="cell" />
  } `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/cells/cells.component.css */\n@property --cellBg { syntax: "<color>"; inherits: true; initial-value: black; }\n@property --cellSize { syntax: "<length> | <percentage>"; inherits: true; initial-value: 1.25rem; }\n:host {\n  --cellBg: oklch(0.5 0.5 150);\n  --cellSize: 15px;\n  display: grid;\n  height: 95vh;\n  aspect-ratio: 1;\n  grid-template-columns: repeat(auto-fit, var(--cellSize));\n  grid-template-rows: repeat(auto-fit, var(--cellSize));\n  gap: 0.15rem;\n}\n'] }]
  }], null, { onClick: [{
    type: HostListener,
    args: ["click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CellsComponent, { className: "CellsComponent", filePath: "src/app/cells/cells.component.ts", lineNumber: 32 });
})();
function neighbors(id, rowLength) {
  const above = (id2) => id2 < rowLength ? id2 - rowLength + rowLength * rowLength : id2 - rowLength;
  const below = (id2) => id2 + rowLength > rowLength * rowLength - 1 ? id2 + rowLength - rowLength * rowLength : id2 + rowLength;
  const left = (id2) => id2 % rowLength === 0 ? id2 + rowLength - 1 : id2 - 1;
  const right = (id2) => id2 + 1 % rowLength === 0 ? id2 - rowLength + 1 : id2 + 1;
  const aboveId = above(id);
  const belowId = below(id);
  return [
    left(aboveId),
    aboveId,
    right(aboveId),
    left(id),
    right(id),
    left(belowId),
    belowId,
    right(belowId)
  ];
}
export {
  CellsComponent
};
