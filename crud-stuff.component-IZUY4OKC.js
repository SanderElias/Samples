import {
  RelationsService
} from "./chunk-CFTKU2XN.js";
import "./chunk-OAAHRPIB.js";
import "./chunk-CR4UHDCW.js";
import {
  NotifyDialogService
} from "./chunk-OEU7DLZ2.js";
import "./chunk-V5IPUR26.js";
import {
  userCard
} from "./chunk-CRPICMUM.js";
import "./chunk-XUVHIZKL.js";
import "./chunk-N67WQN73.js";
import {
  deepEqual
} from "./chunk-IHBT2AMQ.js";
import "./chunk-LJ2EIP3L.js";
import "./chunk-V6OJJHGF.js";
import "./chunk-2KCW2NJN.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  ElementRef,
  Input,
  Output,
  ViewChild,
  afterEveryRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  inject,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-5EIP4NRL.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/crud-stuff/spinner/spinner.component.ts
function SpinnerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 0)(1, "style");
    \u0275\u0275text(2, " .spinner_EUy1 { animation: spinner_grm3 1.2s infinite; } .spinner_f6oS { animation-delay: 0.1s; } .spinner_g3nX { animation-delay: 0.2s; } .spinner_nvEs { animation-delay: 0.3s; } .spinner_MaNM { animation-delay: 0.4s; } .spinner_4nle { animation-delay: 0.5s; } .spinner_ZETM { animation-delay: 0.6s; } .spinner_HXuO { animation-delay: 0.7s; } .spinner_YaQo { animation-delay: 0.8s; } .spinner_GOx1 { animation-delay: 0.9s; } .spinner_4vv9 { animation-delay: 1s; } .spinner_NTs9 { animation-delay: 1.1s; } .spinner_auJJ { transform-origin: center; animation: spinner_T3O6 6s linear infinite; } @keyframes spinner_grm3 { 0%, 50% { animation-timing-function: cubic-bezier(0.27, 0.42, 0.37, 0.99); r: 1px; } 25% { animation-timing-function: cubic-bezier(0.53, 0, 0.61, 0.73); r: 2px; } } @keyframes spinner_T3O6 { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } } ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "g", 1);
    \u0275\u0275domElement(4, "circle", 2)(5, "circle", 3)(6, "circle", 4)(7, "circle", 5)(8, "circle", 6)(9, "circle", 7)(10, "circle", 8)(11, "circle", 9)(12, "circle", 10)(13, "circle", 11)(14, "circle", 12)(15, "circle", 13);
    \u0275\u0275domElementEnd()();
  }
}
var SpinnerComponent = class _SpinnerComponent {
  constructor() {
    this.show = input(
      true,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpinnerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnerComponent, selectors: [["se-spinner"]], inputs: { show: [1, "show"] }, decls: 1, vars: 1, consts: [["width", "32", "height", "32", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], [1, "spinner_auJJ"], ["cx", "12", "cy", "3", "r", "1", 1, "spinner_EUy1"], ["cx", "16.50", "cy", "4.21", "r", "1", 1, "spinner_EUy1", "spinner_f6oS"], ["cx", "7.50", "cy", "4.21", "r", "1", 1, "spinner_EUy1", "spinner_NTs9"], ["cx", "19.79", "cy", "7.50", "r", "1", 1, "spinner_EUy1", "spinner_g3nX"], ["cx", "4.21", "cy", "7.50", "r", "1", 1, "spinner_EUy1", "spinner_4vv9"], ["cx", "21.00", "cy", "12.00", "r", "1", 1, "spinner_EUy1", "spinner_nvEs"], ["cx", "3.00", "cy", "12.00", "r", "1", 1, "spinner_EUy1", "spinner_GOx1"], ["cx", "19.79", "cy", "16.50", "r", "1", 1, "spinner_EUy1", "spinner_MaNM"], ["cx", "4.21", "cy", "16.50", "r", "1", 1, "spinner_EUy1", "spinner_YaQo"], ["cx", "16.50", "cy", "19.79", "r", "1", 1, "spinner_EUy1", "spinner_4nle"], ["cx", "7.50", "cy", "19.79", "r", "1", 1, "spinner_EUy1", "spinner_HXuO"], ["cx", "12", "cy", "21", "r", "1", 1, "spinner_EUy1", "spinner_ZETM"]], template: function SpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SpinnerComponent_Conditional_0_Template, 16, 0, ":svg:svg", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  margin-inline-start: 0.3rem;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: white;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{ selector: "se-spinner", imports: [], template: `@if (show()) {
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        .spinner_EUy1 {
          animation: spinner_grm3 1.2s infinite;
        }
        .spinner_f6oS {
          animation-delay: 0.1s;
        }
        .spinner_g3nX {
          animation-delay: 0.2s;
        }
        .spinner_nvEs {
          animation-delay: 0.3s;
        }
        .spinner_MaNM {
          animation-delay: 0.4s;
        }
        .spinner_4nle {
          animation-delay: 0.5s;
        }
        .spinner_ZETM {
          animation-delay: 0.6s;
        }
        .spinner_HXuO {
          animation-delay: 0.7s;
        }
        .spinner_YaQo {
          animation-delay: 0.8s;
        }
        .spinner_GOx1 {
          animation-delay: 0.9s;
        }
        .spinner_4vv9 {
          animation-delay: 1s;
        }
        .spinner_NTs9 {
          animation-delay: 1.1s;
        }
        .spinner_auJJ {
          transform-origin: center;
          animation: spinner_T3O6 6s linear infinite;
        }
        @keyframes spinner_grm3 {
          0%,
          50% {
            animation-timing-function: cubic-bezier(0.27, 0.42, 0.37, 0.99);
            r: 1px;
          }
          25% {
            animation-timing-function: cubic-bezier(0.53, 0, 0.61, 0.73);
            r: 2px;
          }
        }
        @keyframes spinner_T3O6 {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      </style>
      <g class="spinner_auJJ">
        <circle class="spinner_EUy1" cx="12" cy="3" r="1" />
        <circle class="spinner_EUy1 spinner_f6oS" cx="16.50" cy="4.21" r="1" />
        <circle class="spinner_EUy1 spinner_NTs9" cx="7.50" cy="4.21" r="1" />
        <circle class="spinner_EUy1 spinner_g3nX" cx="19.79" cy="7.50" r="1" />
        <circle class="spinner_EUy1 spinner_4vv9" cx="4.21" cy="7.50" r="1" />
        <circle class="spinner_EUy1 spinner_nvEs" cx="21.00" cy="12.00" r="1" />
        <circle class="spinner_EUy1 spinner_GOx1" cx="3.00" cy="12.00" r="1" />
        <circle class="spinner_EUy1 spinner_MaNM" cx="19.79" cy="16.50" r="1" />
        <circle class="spinner_EUy1 spinner_YaQo" cx="4.21" cy="16.50" r="1" />
        <circle class="spinner_EUy1 spinner_4nle" cx="16.50" cy="19.79" r="1" />
        <circle class="spinner_EUy1 spinner_HXuO" cx="7.50" cy="19.79" r="1" />
        <circle class="spinner_EUy1 spinner_ZETM" cx="12" cy="21" r="1" />
      </g>
    </svg>
  }`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/crud-stuff/spinner/spinner.component.css */\n:host {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  margin-inline-start: 0.3rem;\n}\nsvg {\n  fill: white;\n}\n"] }]
  }], null, { show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src/app/crud-stuff/spinner/spinner.component.ts", lineNumber: 93 });
})();

// src/app/crud-stuff/utils/generateRelation.ts
async function generateRelation() {
  const fakerModule = import("./dist-I7CSMJRU.js");
  const module = await fakerModule;
  return userCard(module.faker);
}

// src/app/crud-stuff/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.relationsService = inject(RelationsService);
    this.filter = this.relationsService.filter;
  }
  async addRelation() {
    try {
      const relation = await generateRelation();
      await this.relationsService.create(relation);
    } catch (e) {
      console.error(e);
    }
  }
  async info() {
    try {
      const info = await this.relationsService.info();
      console.log(info);
    } catch (e) {
      console.error(e);
    }
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["crud-header"]], decls: 8, vars: 2, consts: [[3, "click"], ["for", "search"], ["id", "search", "type", "search", "placeholder", "Search...", 3, "input", "value"], [3, "show"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_0_listener() {
          return ctx.addRelation();
        });
        \u0275\u0275text(1, "Add relation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label", 1);
        \u0275\u0275text(3, " Search: ");
        \u0275\u0275elementStart(4, "input", 2);
        \u0275\u0275listener("input", function HeaderComponent_Template_input_input_4_listener($event) {
          return ctx.filter.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "se-spinner", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 0);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_6_listener() {
          return ctx.info();
        });
        \u0275\u0275text(7, "Info");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.filter());
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.relationsService.listIsLoading());
      }
    }, dependencies: [SpinnerComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-block-end: 0.75rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "crud-header", imports: [SpinnerComponent], template: `
    <button (click)="addRelation()">Add relation</button>
    <label for="search">
      Search:
      <input
        id="search"
        type="search"
        placeholder="Search..."
        (input)="filter.set($any($event.target).value)"
        [value]="filter()"
      />
      <se-spinner [show]="relationsService.listIsLoading()" />
    </label>
    <button (click)="info()">Info</button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/crud-stuff/header/header.component.css */\n:host {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-block-end: 0.75rem;\n}\nlabel {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/crud-stuff/header/header.component.ts", lineNumber: 28 });
})();

// src/app/crud-stuff/high-light-body/high-light-body.component.ts
var _c0 = ["*"];
var HighLightBodyComponent = class _HighLightBodyComponent {
  constructor() {
    this.highLight = input(
      ...ngDevMode ? [void 0, { debugName: "highLight" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function HighLightBodyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighLightBodyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HighLightBodyComponent, selectors: [["tbody", "highLight", ""]], inputs: { highLight: [1, "highLight"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function HighLightBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighLightBodyComponent, [{
    type: Component,
    args: [{
      selector: "tbody[highLight]",
      imports: [],
      template: `<ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { highLight: [{ type: Input, args: [{ isSignal: true, alias: "highLight", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HighLightBodyComponent, { className: "HighLightBodyComponent", filePath: "src/app/crud-stuff/high-light-body/high-light-body.component.ts", lineNumber: 9 });
})();

// src/app/crud-stuff/notify-dialog/notify-dialog.component.ts
var _c02 = ["dlg"];
var _c1 = ["*"];
var NotifyDialogComponent = class _NotifyDialogComponent {
  constructor() {
    this.lightDismiss = input(
      true,
      ...ngDevMode ? [{ debugName: "lightDismiss" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.nds = inject(NotifyDialogService);
    this.dlg = viewChild.required("dlg");
    this._ = afterRenderEffect(() => {
      const elm = this.dlg().nativeElement;
      const shown = this.nds.shown();
      if (shown) {
        elm.showModal();
      } else {
        elm.close();
      }
    });
  }
  onClick(ev) {
    if (!this.lightDismiss())
      return;
    const target = ev.target;
    if (target.tagName.toLowerCase() === "dialog") {
      this.nds.close();
    }
  }
  static {
    this.\u0275fac = function NotifyDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotifyDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotifyDialogComponent, selectors: [["se-notify-dialog"]], viewQuery: function NotifyDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dlg, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostBindings: function NotifyDialogComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NotifyDialogComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    }, inputs: { lightDismiss: [1, "lightDismiss"] }, ngContentSelectors: _c1, decls: 12, vars: 3, consts: [["dlg", ""], [3, "click"]], template: function NotifyDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "dialog", null, 0)(2, "div")(3, "header")(4, "h3");
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(6, "section");
        \u0275\u0275text(7);
        \u0275\u0275domElementEnd();
        \u0275\u0275projection(8);
        \u0275\u0275domElementStart(9, "footer")(10, "button", 1);
        \u0275\u0275domListener("click", function NotifyDialogComponent_Template_button_click_10_listener() {
          return ctx.nds.close();
        });
        \u0275\u0275text(11);
        \u0275\u0275domElementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.nds.title());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.nds.message(), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.nds.dismissButtonText());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\ndialog[_ngcontent-%COMP%] {\n  padding: 0;\n}\ndialog[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-inline: 2rem;\n  padding-block: 1rem;\n}\ndialog[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {\n  margin-block: 0.75rem;\n}\ndialog[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%], \ndialog[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  inline-size: 100%;\n  align-content: center;\n  justify-content: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotifyDialogComponent, [{
    type: Component,
    args: [{ selector: "se-notify-dialog", imports: [], template: `
    <dialog #dlg>
      <div>
        <header>
          <h3>{{ nds.title() }}</h3>
        </header>
        <section>
          {{ nds.message() }}
        </section>
        <ng-content />
        <footer>
          <button (click)="nds.close()">{{ nds.dismissButtonText() }}</button>
        </footer>
      </div>
    </dialog>
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(click)": "onClick($event)"
    }, styles: ["/* src/app/crud-stuff/notify-dialog/notify-dialog.component.css */\n:host {\n  display: block;\n}\ndialog {\n  padding: 0;\n}\ndialog > div {\n  padding-inline: 2rem;\n  padding-block: 1rem;\n}\ndialog > div > section {\n  margin-block: 0.75rem;\n}\ndialog footer,\ndialog header {\n  display: flex;\n  inline-size: 100%;\n  align-content: center;\n  justify-content: center;\n}\n"] }]
  }], null, { lightDismiss: [{ type: Input, args: [{ isSignal: true, alias: "lightDismiss", required: false }] }], dlg: [{ type: ViewChild, args: ["dlg", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotifyDialogComponent, { className: "NotifyDialogComponent", filePath: "src/app/crud-stuff/notify-dialog/notify-dialog.component.ts", lineNumber: 38 });
})();

// src/app/crud-stuff/sort-header/sort-header.component.ts
var _c03 = ["*"];
function SortHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.order() === "asc" ? "\u2193" : "\u2191", " ");
  }
}
var SortHeaderComponent = class _SortHeaderComponent {
  constructor() {
    this.relationsService = inject(RelationsService);
    this.sort = this.relationsService.sort;
    this.order = this.relationsService.order;
    this.sortOn = input.required(
      ...ngDevMode ? [{ debugName: "sortOn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.doSort = () => {
      const key = this.sortOn();
      const currentSort = this.relationsService.sort();
      if (currentSort === key) {
        this.relationsService.order.update((currentOrder) => currentOrder === "asc" ? "desc" : "asc");
      } else {
        this.relationsService.sort.set(key);
        this.relationsService.order.set("asc");
      }
    };
  }
  static {
    this.\u0275fac = function SortHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SortHeaderComponent, selectors: [["th", "sortOn", ""]], hostBindings: function SortHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SortHeaderComponent_click_HostBindingHandler() {
          return ctx.doSort();
        });
      }
    }, inputs: { sortOn: [1, "sortOn"] }, ngContentSelectors: _c03, decls: 2, vars: 1, template: function SortHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275conditionalCreate(1, SortHeaderComponent_Conditional_1_Template, 1, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sort() === ctx.sortOn() ? 1 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: table-cell;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortHeaderComponent, [{
    type: Component,
    args: [{ selector: "th [sortOn]", imports: [], template: `
    <ng-content />
    @if (sort() === sortOn()) {
      {{ order() === 'asc' ? '\u2193' : '\u2191' }}
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(click)": "doSort()"
    }, styles: ["/* src/app/crud-stuff/sort-header/sort-header.component.css */\n:host {\n  display: table-cell;\n}\n"] }]
  }], null, { sortOn: [{ type: Input, args: [{ isSignal: true, alias: "sortOn", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortHeaderComponent, { className: "SortHeaderComponent", filePath: "src/app/crud-stuff/sort-header/sort-header.component.ts", lineNumber: 25 });
})();

// dist/se-ng/headless-ui/fesm2022/se-ng-headless-ui.mjs
var _c04 = ["dialog"];
var _c12 = ["*"];
function ConfirmItComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275projection(0);
    \u0275\u0275domElementStart(1, "footer")(2, "button", 1);
    \u0275\u0275domListener("click", function ConfirmItComponent_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close(false));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 1);
    \u0275\u0275domListener("click", function ConfirmItComponent_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close(true));
    });
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cancelText());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.confirmText());
  }
}
var ConfirmItComponent = class _ConfirmItComponent {
  constructor() {
    this.confirmText = input(
      "yes",
      ...ngDevMode ? [{
        debugName: "confirmText"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancelText = input(
      "no",
      ...ngDevMode ? [{
        debugName: "cancelText"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.lightDismiss = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "lightDismiss"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    this.dlg = viewChild.required("dialog");
    this.elm = inject(ElementRef);
    this.parent = this.elm.nativeElement.parentElement;
    this.parentBox = signal({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      zIndex: 1
    }, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "parentBox"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      equal: deepEqual
    }));
    this.hidden = signal(
      true,
      ...ngDevMode ? [{
        debugName: "hidden"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ = afterRenderEffect(() => {
      const elm = this.elm.nativeElement;
      const box = this.parentBox();
      elm.style.top = `${box.top}px`;
      elm.style.left = `${box.left}px`;
      elm.style.width = `${box.width}px`;
      elm.style.height = `${box.height}px`;
      elm.style.zIndex = `${box.zIndex}`;
    });
    this._1 = afterEveryRender({
      earlyRead: () => {
        const parentRect = this.parent.getBoundingClientRect();
        let zIndex = "auto";
        if (typeof this.parent.computedStyleMap === "function") {
          zIndex = this.parent.computedStyleMap().get("z-index").value;
        }
        this.parentBox.set({
          top: parentRect.top,
          left: parentRect.left,
          width: parentRect.width,
          height: parentRect.height,
          zIndex: zIndex === "auto" ? 1 : Number(zIndex) + 1
        });
      }
    });
    this.close = (confirmed) => {
      const dialog = this.dlg().nativeElement;
      if (confirmed) {
        this.parent.dispatchEvent(this.originalEvent);
      }
      this.hidden.set(true);
      dialog.close();
    };
  }
  captureClick(ev) {
    const target = ev.target;
    ev.preventDefault();
    ev.stopPropagation();
    if (target !== this.elm.nativeElement) {
      return;
    }
    const dialog = this.dlg().nativeElement;
    this.originalEvent = ev;
    if (this.lightDismiss()) {
      dialog.addEventListener("click", (e) => {
        ev.preventDefault();
        if (e.target === dialog) {
          dialog.close();
          this.hidden.set(true);
        }
      });
    }
    this.hidden.set(false);
    dialog.showModal();
  }
  static {
    this.\u0275fac = function ConfirmItComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmItComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ConfirmItComponent,
      selectors: [["confirm-it"]],
      viewQuery: function ConfirmItComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.dlg, _c04, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      hostBindings: function ConfirmItComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function ConfirmItComponent_click_HostBindingHandler($event) {
            return ctx.captureClick($event);
          });
        }
      },
      inputs: {
        confirmText: [1, "confirmText"],
        cancelText: [1, "cancelText"],
        lightDismiss: [1, "lightDismiss"]
      },
      ngContentSelectors: _c12,
      decls: 3,
      vars: 1,
      consts: [["dialog", ""], ["type", "button", 3, "click"]],
      template: function ConfirmItComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275domElementStart(0, "dialog", null, 0);
          \u0275\u0275conditionalCreate(2, ConfirmItComponent_Conditional_2_Template, 6, 2);
          \u0275\u0275domElementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(!ctx.hidden() ? 2 : -1);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block;position:fixed;background-color:#6ae26a00}[_nghost-%COMP%]   :where(dialog[_ngcontent-%COMP%]){padding-block:1rem;padding-inline:2rem}[_nghost-%COMP%]   :where(dialog[_ngcontent-%COMP%])   footer[_ngcontent-%COMP%]{display:flex;justify-content:end;margin-block-start:1rem;gap:1rem;padding:.5rem}[_nghost-%COMP%]   :where(dialog[_ngcontent-%COMP%]::backdrop){background-color:#08080880;backdrop-filter:blur(3px)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmItComponent, [{
    type: Component,
    args: [{
      selector: "confirm-it",
      imports: [],
      template: `<dialog #dialog>
    @if (!hidden()) {
      <ng-content></ng-content>
      <footer>
        <button type="button" (click)="close(false)">{{ cancelText() }}</button>
        <button type="button" (click)="close(true)">{{ confirmText() }}</button>
      </footer>
    }
  </dialog> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(click)": "captureClick($event)"
      },
      styles: [":host{display:block;position:fixed;background-color:#6ae26a00}:host :where(dialog){padding-block:1rem;padding-inline:2rem}:host :where(dialog) footer{display:flex;justify-content:end;margin-block-start:1rem;gap:1rem;padding:.5rem}:host :where(dialog::backdrop){background-color:#08080880;backdrop-filter:blur(3px)}\n"]
    }]
  }], null, {
    confirmText: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "confirmText",
        required: false
      }]
    }],
    cancelText: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cancelText",
        required: false
      }]
    }],
    lightDismiss: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "lightDismiss",
        required: false
      }]
    }],
    dlg: [{
      type: ViewChild,
      args: ["dialog", {
        isSignal: true
      }]
    }]
  });
})();

// src/app/crud-stuff/high-light-td/high-light-td.component.ts
var _c05 = ["org"];
var _c13 = ["*"];
var HighLightTDComponent = class _HighLightTDComponent {
  constructor() {
    this.tbody = inject(HighLightBodyComponent, { optional: true, skipSelf: true });
    this.elm = inject(ElementRef).nativeElement;
    this.fakeElm = inject(DOCUMENT).createElement("span");
    this.originalContent = viewChild.required("org", { read: ElementRef });
    this.highLight = () => {
      const original = this.originalContent().nativeElement;
      const fake = this.fakeElm;
      if (!this.highlightIsDone(original, fake)) {
        original.hidden = false;
        fake.innerHTML = "";
      }
    };
    this.highlightIsDone = (originalContent, fakeContent) => {
      const originalText = originalContent.innerHTML;
      if (!originalText || originalText.trim() === "" || originalText.trim() === "--")
        return false;
      const highLight = this.tbody?.highLight();
      if (!highLight)
        return false;
      const hl = new RegExp(highLight, "gi");
      if (!hl.test(originalText))
        return false;
      const newHtml = originalText.replace(hl, (match) => `<mark>${match}</mark>`);
      if (newHtml !== fakeContent.innerHTML) {
        fakeContent.innerHTML = newHtml;
        originalContent.hidden = true;
      }
      return true;
    };
    if (!this.tbody) {
      throw new Error(`[HighLightTDComponent] could not find the required parent \`<tbody [highLight]="someSignal<string>"\``);
    }
    this.elm.appendChild(this.fakeElm);
    afterEveryRender({ read: this.highLight });
  }
  static {
    this.\u0275fac = function HighLightTDComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighLightTDComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HighLightTDComponent, selectors: [["td", 3, "ignoreHl", ""]], viewQuery: function HighLightTDComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.originalContent, _c05, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, ngContentSelectors: _c13, decls: 3, vars: 0, consts: [["org", ""]], template: function HighLightTDComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "span", null, 0);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighLightTDComponent, [{
    type: Component,
    args: [{
      selector: "td:not([ignoreHl])",
      imports: [],
      template: `<span #org><ng-content></ng-content></span>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], { originalContent: [{ type: ViewChild, args: ["org", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HighLightTDComponent, { className: "HighLightTDComponent", filePath: "src/app/crud-stuff/high-light-td/high-light-td.component.ts", lineNumber: 19 });
})();

// src/app/crud-stuff/utils/is-empty-relation.ts
var isEmptyRelation = (obj) => {
  const _a = obj, { id } = _a, rest = __objRest(_a, ["id"]);
  return Object.keys(rest).length === 0;
};

// src/app/crud-stuff/user-row/user-row.component.ts
var UserRowComponent = class _UserRowComponent {
  constructor() {
    this.relationService = inject(RelationsService);
    this.userId = input.required(
      ...ngDevMode ? [{ debugName: "userId" }] : (
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
    this.edit = output();
    this._ = afterRenderEffect(() => {
      if (this.rev() && this.rev() !== this.relRef.value()?._rev) {
        this.relRef.reload();
      }
    });
    this.relRef = this.relationService.read(this.userId);
    this.unStable = computed(
      () => {
        const rowLoading = this.relRef.isLoading();
        const listLoading = this.relationService.listIsLoading();
        return rowLoading || listLoading || isEmptyRelation(this.relRef.value());
      },
      ...ngDevMode ? [{ debugName: "unStable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rel = computed(
      () => this.relRef.value(),
      ...ngDevMode ? [{ debugName: "rel" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  deleteRelation(rel) {
    this.relationService.delete(rel).catch((e) => {
      console.error(e);
    });
  }
  static {
    this.\u0275fac = function UserRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserRowComponent, selectors: [["tr", "userId", ""]], inputs: { userId: [1, "userId"], rev: [1, "rev"] }, outputs: { edit: "edit" }, decls: 17, vars: 7, consts: [["ignoreHl", ""], [3, "click", "disabled"], ["lightDismiss", ""], ["loading", "eager", "alt", "User Avatar", "width", "42", "height", "42", 3, "src"]], template: function UserRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "td", 0)(1, "button", 1);
        \u0275\u0275listener("click", function UserRowComponent_Template_button_click_1_listener() {
          return ctx.deleteRelation(ctx.rel());
        });
        \u0275\u0275text(2, " \u{1F5D1}\uFE0F ");
        \u0275\u0275elementStart(3, "confirm-it", 2)(4, "h3");
        \u0275\u0275text(5, "Sure?");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 1);
        \u0275\u0275listener("click", function UserRowComponent_Template_button_click_7_listener() {
          return ctx.edit.emit(ctx.rel().id);
        });
        \u0275\u0275text(8, "\u270F\uFE0F");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "td", 0);
        \u0275\u0275element(10, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "td");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "td");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "td");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.unStable());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" Are you sure you want to delete ", ctx.rel().name, " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.unStable());
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.rel().avatar ?? "https://avatars.githubusercontent.com/u/96109922", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.rel().name ?? "--");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.rel().username ?? "--");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.rel().email ?? "--");
      }
    }, dependencies: [ConfirmItComponent, HighLightTDComponent], styles: ["\n[_nghost-%COMP%] {\n  display: table-row;\n}\n[_nghost-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background-color: var(--surface-2);\n}\ntd[_ngcontent-%COMP%] {\n  --_width: calc((100vw - 12rem) / 3);\n  inline-size: var(--_width);\n  max-inline-size: var(--_width);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: left;\n}\ntd[_ngcontent-%COMP%]:has(img) {\n  justify-content: center;\n  align-items: center;\n  inline-size: 3.5rem;\n  max-inline-size: 3.5rem;\n}\ntd[_ngcontent-%COMP%]:has(img)   img[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  inline-size: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center;\n}\ntd[_ngcontent-%COMP%]:has(button) {\n  display: flex;\n  inline-size: 7rem;\n  max-inline-size: 7rem;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\ntd[_ngcontent-%COMP%]:has(button)   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  aspect-ratio: 1;\n  padding-inline: 9px;\n  padding-block: 4px;\n}\ntd[_ngcontent-%COMP%]:has(button)   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  margin-inline: var(--size-0);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRowComponent, [{
    type: Component,
    args: [{ selector: "tr [userId]", imports: [ConfirmItComponent, HighLightTDComponent], template: `
    <td ignoreHl>
      <button (click)="deleteRelation(rel())" [disabled]="unStable()">
        \u{1F5D1}\uFE0F
        <confirm-it lightDismiss>
          <h3>Sure?</h3>
          Are you sure you want to delete {{ rel().name }}
        </confirm-it>
      </button>
      <button (click)="edit.emit(rel().id!)" [disabled]="unStable()">\u270F\uFE0F</button>
    </td>
    <td ignoreHl>
      <img
        loading="eager"
        [src]="
          rel().avatar ?? 'https://avatars.githubusercontent.com/u/96109922'
        "
        alt="User Avatar"
        width="42"
        height="42"
      />
    </td>
    <td>{{ rel().name ?? '--' }}</td>
    <td>{{ rel().username ?? '--' }}</td>
    <td>{{ rel().email ?? '--' }}</td>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/crud-stuff/user-row/user-row.component.css */\n:host {\n  display: table-row;\n}\n:host:nth-child(even) td {\n  background-color: var(--surface-2);\n}\ntd {\n  --_width: calc((100vw - 12rem) / 3);\n  inline-size: var(--_width);\n  max-inline-size: var(--_width);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: left;\n}\ntd:has(img) {\n  justify-content: center;\n  align-items: center;\n  inline-size: 3.5rem;\n  max-inline-size: 3.5rem;\n}\ntd:has(img) img {\n  aspect-ratio: 1;\n  inline-size: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center;\n}\ntd:has(button) {\n  display: flex;\n  inline-size: 7rem;\n  max-inline-size: 7rem;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\ntd:has(button) button {\n  border-radius: 50%;\n  aspect-ratio: 1;\n  padding-inline: 9px;\n  padding-block: 4px;\n}\ntd:has(button) button:disabled {\n  opacity: 0.5;\n  margin-inline: var(--size-0);\n}\n"] }]
  }], null, { userId: [{ type: Input, args: [{ isSignal: true, alias: "userId", required: true }] }], rev: [{ type: Input, args: [{ isSignal: true, alias: "rev", required: true }] }], edit: [{ type: Output, args: ["edit"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserRowComponent, { className: "UserRowComponent", filePath: "src/app/crud-stuff/user-row/user-row.component.ts", lineNumber: 49 });
})();

// src/app/crud-stuff/crud-stuff.component.ts
var _c06 = ["dlg"];
var CrudStuffComponent_Defer_22_DepsFn = () => [
  /* @ts-ignore */
  import("./relation-form.component-TKRLH6RL.js").then((m) => m.RelationForm)
];
function CrudStuffComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 6);
    \u0275\u0275listener("edit", function CrudStuffComponent_For_17_Template_tr_edit_0_listener() {
      const rel_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(rel_r2[0]));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rel_r2 = ctx.$implicit;
    \u0275\u0275property("userId", rel_r2[0])("rev", rel_r2[1]);
  }
}
function CrudStuffComponent_Defer_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "relation-form", 7);
    \u0275\u0275listener("done", function CrudStuffComponent_Defer_20_Template_relation_form_done_0_listener() {
      \u0275\u0275restoreView(_r4);
      \u0275\u0275nextContext();
      const dlg_r5 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(dlg_r5.close());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r2.editRec())("rev", ctx_r2.editRev());
  }
}
function CrudStuffComponent_DeferPlaceholder_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
var CrudStuffComponent = class _CrudStuffComponent {
  constructor() {
    this.relationsService = inject(RelationsService);
    this.relationIds = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "relationIds" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => this.relationsService.list(),
      computation: (list, previous) => {
        const emptyRow = Array.from({ length: 10 }, () => ["", ""]);
        const loading = this.relationsService.listIsLoading();
        if (list.length === 0 && loading) {
          list.concat(previous?.value || []);
        }
        return [...list, ...emptyRow].splice(0, 10);
      }
    }));
    this.editRec = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "editRec" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editRev = computed(
      () => {
        const id = this.editRec();
        const listItem = this.relationIds().find((r) => r[0] === id);
        return listItem ? listItem[1] : "_not_in_list_";
      },
      ...ngDevMode ? [{ debugName: "editRev" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dlgRef = viewChild.required("dlg");
    this.filter = this.relationsService.filter.asReadonly();
  }
  async edit(rel) {
    const dialog = this.dlgRef().nativeElement;
    this.editRec.set(rel);
    dialog.showModal();
  }
  static {
    this.\u0275fac = function CrudStuffComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CrudStuffComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrudStuffComponent, selectors: [["se-crud-stuff"]], viewQuery: function CrudStuffComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dlgRef, _c06, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275ProvidersFeature([RelationsService])], decls: 25, vars: 1, consts: [["dlg", ""], ["sortOn", "name"], ["sortOn", "username"], ["sortOn", "email"], [3, "highLight"], [3, "userId", "rev"], [3, "edit", "userId", "rev"], [3, "done", "id", "rev"]], template: function CrudStuffComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "CRUD - Signals Best practices");
        \u0275\u0275elementEnd();
        \u0275\u0275element(2, "crud-header");
        \u0275\u0275elementStart(3, "table")(4, "thead")(5, "tr")(6, "th");
        \u0275\u0275text(7, "Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "th");
        \u0275\u0275elementStart(9, "th", 1);
        \u0275\u0275text(10, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th", 2);
        \u0275\u0275text(12, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th", 3);
        \u0275\u0275text(14, "Email");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "tbody", 4);
        \u0275\u0275repeaterCreate(16, CrudStuffComponent_For_17_Template, 1, 2, "tr", 5, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "dialog", null, 0);
        \u0275\u0275domTemplate(20, CrudStuffComponent_Defer_20_Template, 1, 2)(21, CrudStuffComponent_DeferPlaceholder_21_Template, 2, 0);
        \u0275\u0275defer(22, 20, CrudStuffComponent_Defer_22_DepsFn, null, 21);
        \u0275\u0275deferOnViewport(0, -1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "se-notify-dialog");
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("highLight", ctx.filter());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.relationIds());
      }
    }, dependencies: [
      UserRowComponent,
      HighLightBodyComponent,
      NotifyDialogComponent,
      HeaderComponent,
      SortHeaderComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  padding: 16px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(CrudStuffComponent, () => [
    /* @ts-ignore */
    import("./relation-form.component-TKRLH6RL.js").then((m) => m.RelationForm)
  ], (RelationForm) => {
    setClassMetadata(CrudStuffComponent, [{
      type: Component,
      args: [{ selector: "se-crud-stuff", imports: [
        RelationForm,
        UserRowComponent,
        HighLightBodyComponent,
        NotifyDialogComponent,
        HeaderComponent,
        SortHeaderComponent
      ], template: `<h1>CRUD - Signals Best practices</h1>
    <crud-header />
    <table>
      <thead>
        <tr>
          <th>Actions</th>
          <th></th>
          <th sortOn="name">Name</th>
          <th sortOn="username">Username</th>
          <th sortOn="email">Email</th>
        </tr>
      </thead>
      <tbody [highLight]="filter()">
        @for (rel of relationIds(); track $index) {
          <tr [userId]="rel[0]" [rev]="rel[1]" (edit)="edit(rel[0])"></tr>
        }
      </tbody>
    </table>
    <dialog #dlg>
      @defer (on viewport) {
        <relation-form
          [id]="editRec()!"
          [rev]="editRev()"
          (done)="dlg.close()"
        />
      } @placeholder {
        <p>Loading...</p>
      }
    </dialog>
    <!--
      In a non-demo app, the se-notify-dialog should probably somewhere
      on a higher up component
    -->
    <se-notify-dialog /> `, changeDetection: ChangeDetectionStrategy.OnPush, providers: [RelationsService], styles: ["/* src/app/crud-stuff/crud-stuff.component.css */\n:host {\n  display: block;\n  padding: 16px;\n}\n"] }]
    }], null, { dlgRef: [{ type: ViewChild, args: ["dlg", { isSignal: true }] }] });
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrudStuffComponent, { className: "CrudStuffComponent", filePath: "src/app/crud-stuff/crud-stuff.component.ts", lineNumber: 68 });
})();
export {
  CrudStuffComponent
};
