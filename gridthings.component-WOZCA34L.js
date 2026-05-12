import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/gridthings/cell/cell.component.ts
var _c0 = ["*"];
var CellComponent = class _CellComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function CellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CellComponent, selectors: [["app-cell"]], hostVars: 4, hostBindings: function CellComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("grid-column-start", ctx.x)("grid-row-start", ctx.y);
      }
    }, inputs: { x: "x", y: "y" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: grid;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  align-items: center;\n  justify-items: center;\n  background-color: #00cc0020;\n  overflow: none;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellComponent, [{
    type: Component,
    args: [{ selector: "app-cell", template: `<ng-content></ng-content>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;080cdd3c4147e39b61c9dbc4d76c479eb4f4f6e32571178f02735cddcbc8c828;/home/runner/work/Samples/Samples/src/app/gridthings/cell/cell.component.ts */\n:host {\n  display: grid;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  align-items: center;\n  justify-items: center;\n  background-color: #00cc0020;\n  overflow: none;\n}\n"] }]
  }], () => [], { x: [{
    type: Input
  }, {
    type: HostBinding,
    args: ["style.grid-column-start"]
  }], y: [{
    type: Input
  }, {
    type: HostBinding,
    args: ["style.grid-row-start"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CellComponent, { className: "CellComponent", filePath: "src/app/gridthings/cell/cell.component.ts", lineNumber: 30 });
})();

// src/app/gridthings/gridthings/gridthings.component.ts
function GridthingsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-cell", 4)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    \u0275\u0275property("x", x_r1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r1);
  }
}
function GridthingsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-cell", 5)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const y_r2 = ctx.$implicit;
    \u0275\u0275property("y", y_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(y_r2);
  }
}
var GridthingsComponent = class _GridthingsComponent {
  constructor() {
    this.labels = Array.from({ length: 10 }, (_, i) => i + 1);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function GridthingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridthingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridthingsComponent, selectors: [["app-gridthings"]], decls: 12, vars: 0, consts: [["x", "3", "y", "5"], ["x", "4", "y", "6"], ["x", "8", "y", "9"], ["x", "9", "y", "10"], ["y", "1", 3, "x"], ["x", "1", 3, "y"]], template: function GridthingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-cell", 0);
        \u0275\u0275text(1, " Hello,");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "app-cell", 1);
        \u0275\u0275text(3, " Dark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-cell", 2);
        \u0275\u0275text(5, " I'm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "app-cell", 3);
        \u0275\u0275text(7, " here");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, GridthingsComponent_For_9_Template, 3, 2, "app-cell", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(10, GridthingsComponent_For_11_Template, 3, 2, "app-cell", 5, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.labels);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.labels.slice(1, ctx.labels.length));
      }
    }, dependencies: [CellComponent], styles: ['\n[_ngcontent-%COMP%]:root {\n  --cols: 10;\n  --rows: 10;\n}\n[_nghost-%COMP%] {\n  --cols: 10;\n  position: relative;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  border: 1px solid white;\n  grid-template-columns: repeat(var(--cols), calc(100% / var(--cols)));\n  grid-template-rows: repeat(var(--rows), calc(100% / var(--rows)));\n  background:\n    linear-gradient(\n      90deg,\n      transparent calc(100% - 1px),\n      white 1px);\n  background-size: calc(100% / var(--cols));\n}\n[_nghost-%COMP%]::after {\n  --rows: 10;\n  content: " ";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(transparent 50%, #ffffff30 50%);\n  background-size: 100% calc(100% / (var(--rows) / 2));\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridthingsComponent, [{
    type: Component,
    args: [{ selector: "app-gridthings", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CellComponent], template: `<style>
  :root {
    --cols: 10;
    --rows: 10;
  }

  :host {
    --cols: 10;
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    border: 1px solid white;
    grid-template-columns: repeat(var(--cols), calc(100% / var(--cols)));
    grid-template-rows: repeat(var(--rows), calc(100% / var(--rows)));

    background: linear-gradient(90deg, transparent calc(100% - 1px), white 1px);
    background-size: calc(100% / var(--cols));
  }

  :host::after {
    --rows: 10;
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-image: linear-gradient(transparent 50%, #ffffff30 50%);
    background-size: 100% calc(100% / (var(--rows) / 2));
  }
</style>

<app-cell x="3" y="5"> Hello,</app-cell>
<app-cell x="4" y="6"> Dark</app-cell>
<app-cell x="8" y="9"> I'm</app-cell>
<app-cell x="9" y="10"> here</app-cell>

<!-- x headers -->
@for (x of labels; track x) {
  <app-cell [x]="x" y="1">
    <h1>{{ x }}</h1>
  </app-cell>
}
<!-- y headers -->
@for (y of labels.slice(1, labels.length); track y) {
  <app-cell [y]="y" x="1">
    <h1>{{ y }}</h1>
  </app-cell>
}
`, styles: ['/* angular:styles/component:css;ac76760707559d0739a3da01159757e469280f9d4af9e5366efb471737410ce2;/home/runner/work/Samples/Samples/src/app/gridthings/gridthings/gridthings.component.html */\n:root {\n  --cols: 10;\n  --rows: 10;\n}\n:host {\n  --cols: 10;\n  position: relative;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  border: 1px solid white;\n  grid-template-columns: repeat(var(--cols), calc(100% / var(--cols)));\n  grid-template-rows: repeat(var(--rows), calc(100% / var(--rows)));\n  background:\n    linear-gradient(\n      90deg,\n      transparent calc(100% - 1px),\n      white 1px);\n  background-size: calc(100% / var(--cols));\n}\n:host::after {\n  --rows: 10;\n  content: " ";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(transparent 50%, #ffffff30 50%);\n  background-size: 100% calc(100% / (var(--rows) / 2));\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridthingsComponent, { className: "GridthingsComponent", filePath: "src/app/gridthings/gridthings/gridthings.component.ts", lineNumber: 13 });
})();
export {
  GridthingsComponent
};
