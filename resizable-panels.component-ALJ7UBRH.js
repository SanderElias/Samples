import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/resizable-panels/resizable-panel/resizable-panel.component.ts
var _c0 = ["*"];
var ResizablePanelComponent = class _ResizablePanelComponent {
  constructor() {
    this.elm = inject(ElementRef).nativeElement;
    this.des = inject(DestroyRef);
    this.name = path(this.elm);
    this.resHandler = (e) => {
      const [{ borderBoxSize: [{ inlineSize, blockSize }] }] = e;
      this.elm.style.setProperty("--_panel-width", `${inlineSize}px`);
      this.elm.style.setProperty("--_panel-height", `${blockSize}px`);
    };
    afterNextRender(() => {
      this.resObs = new ResizeObserver(debounce(this.resHandler, 250));
      this.resObs.observe(this.elm);
      this.des.onDestroy(() => this.resObs.unobserve(this.elm));
    });
  }
  static {
    this.\u0275fac = function ResizablePanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResizablePanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResizablePanelComponent, selectors: [["se-resizable-panel"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ResizablePanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n  --_panel-width: var(--panel-width, 300px);\n  --_panel-height: var(--panel-height, 300px);\n  margin: calc(var(--panel-gap) / 2);\n  width: var(--_panel-width);\n  height: var(--_panel-height);\n  min-height: 1.5rem;\n  min-width: 4rem;\n  resize: both;\n  overflow: auto;\n  border: 1px solid white;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizablePanelComponent, [{
    type: Component,
    args: [{ selector: "se-resizable-panel", imports: [], template: `<ng-content></ng-content>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/resizable-panels/resizable-panel/resizable-panel.component.css */\n:host {\n  display: inline-block;\n  --_panel-width: var(--panel-width, 300px);\n  --_panel-height: var(--panel-height, 300px);\n  margin: calc(var(--panel-gap) / 2);\n  width: var(--_panel-width);\n  height: var(--_panel-height);\n  min-height: 1.5rem;\n  min-width: 4rem;\n  resize: both;\n  overflow: auto;\n  border: 1px solid white;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResizablePanelComponent, { className: "ResizablePanelComponent", filePath: "src/app/resizable-panels/resizable-panel/resizable-panel.component.ts", lineNumber: 17 });
})();
function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}
function path(elm) {
  let a = [];
  while (elm.parentNode) {
    let d = [
      elm.tagName.toLowerCase(),
      elm.hasAttribute("class") ? elm.getAttribute("class") : "",
      elm.hasAttribute("id") ? elm.getAttribute("id") : "",
      elm.hasAttribute("name") ? elm.getAttribute("name") : "",
      elm.hasAttribute("type") ? elm.getAttribute("type") : "",
      0
      // nth-child
    ];
    for (let i = 0; i < d.length; i++)
      d[i] = typeof d[i] == "string" ? d[i].trim() : d[i];
    if (d[1] != "")
      d[1] = "." + d[1].split(" ").join(".");
    if (d[2] != "")
      d[2] = "#" + d[2];
    if (d[3] != "")
      d[3] = '[name="' + d[3] + '"]';
    if (d[4] != "")
      d[4] = '[type="' + d[4] + '"]';
    let s = elm;
    while (s) {
      d[5]++;
      s = s.previousElementSibling;
    }
    d[5] = d[5] != "" ? ":nth-child(" + d[5] + ")" : ":only-child";
    s = "";
    for (let i = 0; i < d.length; i++)
      s += d[i];
    a.unshift(s);
    elm = elm.parentNode;
  }
  return a.join(">");
}

// src/app/resizable-panels/resizable-panels.component.ts
function ResizablePanelsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "se-resizable-panel")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Panel ", n_r1);
  }
}
var ResizablePanelsComponent = class _ResizablePanelsComponent {
  constructor() {
    this.$range = signal(
      1.5,
      ...ngDevMode ? [{ debugName: "$range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.elm = inject(ElementRef).nativeElement;
    this.panels = ["One", "Three", "Two", "Four"];
    effect(() => {
      const r = this.$range();
      this.elm.style.setProperty("--panel-gap", `${r}px`);
    });
  }
  static {
    this.\u0275fac = function ResizablePanelsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResizablePanelsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResizablePanelsComponent, selectors: [["se-resizable-panels"]], decls: 3, vars: 1, consts: [["type", "range", 3, "change", "value"]], template: function ResizablePanelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "input", 0);
        \u0275\u0275listener("change", function ResizablePanelsComponent_Template_input_change_0_listener($event) {
          return ctx.$range.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(1, ResizablePanelsComponent_For_2_Template, 3, 1, "se-resizable-panel", null, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275property("value", ctx.$range());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.panels);
      }
    }, dependencies: [ResizablePanelComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid yellow;\n  min-height: 100%;\n  --panel-width: 300px;\n  --panel-height: 300px;\n  --panel-gap: 1.5rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizablePanelsComponent, [{
    type: Component,
    args: [{ selector: "se-resizable-panels", imports: [ResizablePanelComponent], template: `
    <input
      type="range"
      [value]="$range()"
      (change)="$range.set($any($event.target).value)"
    />
    @for (n of panels; track n) {
      <se-resizable-panel>
        <h3>Panel {{ n }}</h3>
      </se-resizable-panel>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/resizable-panels/resizable-panels.component.css */\n:host {\n  display: block;\n  border: 1px solid yellow;\n  min-height: 100%;\n  --panel-width: 300px;\n  --panel-height: 300px;\n  --panel-gap: 1.5rem;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResizablePanelsComponent, { className: "ResizablePanelsComponent", filePath: "src/app/resizable-panels/resizable-panels.component.ts", lineNumber: 30 });
})();
export {
  ResizablePanelsComponent
};
