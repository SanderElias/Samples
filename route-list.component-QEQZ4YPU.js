import {
  RouterLink
} from "./chunk-KJ62TFR2.js";
import "./chunk-MOADGNT5.js";
import {
  httpResource
} from "./chunk-KVEFCSSA.js";
import "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T5ZKQ47R.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/route-list/route-list.component.ts
function RouteListComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "a", 0);
    \u0275\u0275element(2, "img", 1);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1?.path);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r1?.largeImage, \u0275\u0275sanitizeUrl)("alt", item_r1?.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1?.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1?.description);
  }
}
function RouteListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RouteListComponent_For_1_Conditional_0_Template, 7, 5, "section");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(item_r1 != void 0 ? 0 : -1);
  }
}
var RouteListComponent = class _RouteListComponent {
  constructor() {
    this.routesRes = httpResource(() => "../../assets/routes.json", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "routesRes" } : (
      /* istanbul ignore next */
      {}
    )), { defaultValue: [] }));
    this.routes = computed(
      () => {
        if (!this.routesRes.hasValue())
          return [];
        return this.routesRes.value().filter((route) => !route.path.startsWith("/blog")).sort((a, b) => a.title.localeCompare(b.title));
      },
      ...ngDevMode ? [{ debugName: "routes" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function RouteListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouteListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RouteListComponent, selectors: [["se-route-list"]], decls: 2, vars: 0, consts: [[3, "routerLink"], [3, "src", "alt"]], template: function RouteListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, RouteListComponent_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.routes());
      }
    }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  --width: 40rem;\n  --heigth: 6rem;\n  display: grid;\n  max-height: 98vh;\n  overflow: auto;\n  justify-content: start;\n  grid-template-columns: repeat(auto-fit, minmax(var(--width), 1fr));\n  grid-template-rows: var(--height);\n  gap: 1rem;\n}\nsection[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: var(--heigth);\n  padding: 0rem;\n  border-radius: 1rem;\n  background-color: #1d171d;\n  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);\n  border: 1px solid #000;\n}\na[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: var(--heigth);\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  transition: all 0.3s ease-in-out;\n}\nh2[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\nimg[_ngcontent-%COMP%] {\n  height: var(--heigth);\n  aspect-ratio: 16/9;\n  border-radius: 1rem 0 0 1rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteListComponent, [{
    type: Component,
    args: [{ selector: "se-route-list", imports: [RouterLink], template: `
    @for (item of routes(); track $index) {
      @if (item != undefined) {
        <section>
          <a [routerLink]="item?.path">
            <img [src]="item?.largeImage" [alt]="item?.title" />
            <h2>{{ item?.title }}</h2>
            <p>{{ item?.description }}</p>
          </a>
        </section>
      }
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/route-list/route-list.component.css */\n:host {\n  --width: 40rem;\n  --heigth: 6rem;\n  display: grid;\n  max-height: 98vh;\n  overflow: auto;\n  justify-content: start;\n  grid-template-columns: repeat(auto-fit, minmax(var(--width), 1fr));\n  grid-template-rows: var(--height);\n  gap: 1rem;\n}\nsection {\n  display: block;\n  width: 100%;\n  height: var(--heigth);\n  padding: 0rem;\n  border-radius: 1rem;\n  background-color: #1d171d;\n  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);\n  border: 1px solid #000;\n}\na {\n  display: flex;\n  width: 100%;\n  height: var(--heigth);\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  transition: all 0.3s ease-in-out;\n}\nh2 {\n  padding: 0 1rem;\n}\nimg {\n  height: var(--heigth);\n  aspect-ratio: 16/9;\n  border-radius: 1rem 0 0 1rem;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RouteListComponent, { className: "RouteListComponent", filePath: "src/app/route-list/route-list.component.ts", lineNumber: 24 });
})();
export {
  RouteListComponent
};
