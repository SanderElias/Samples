import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/card/card.component.ts
function CardComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "section", 0)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "section", 1)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1);
  }
}
var CardComponent = class _CardComponent {
  constructor() {
    this.arr = [1, 2, 3, 4];
  }
  static {
    this.\u0275fac = function CardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["se-card"]], decls: 2, vars: 0, consts: [[1, "green"], [1, "red"]], template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, CardComponent_For_1_Template, 9, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.arr);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: grid;\n  gap: 1cm;\n  grid-template-columns: repeat(3, 1fr);\n  height: 100vh;\n  background-color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1cm;\n  width: 100vw;\n}\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 8cm;\n  height: 12cm;\n  border: 1px solid black;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  color: black;\n}\n.green[_ngcontent-%COMP%] {\n  background: green;\n  color: white;\n}\n.red[_ngcontent-%COMP%] {\n  background: red;\n  color: white;\n}\nsection[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  font-size: 132px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{ selector: "se-card", imports: [], template: `
    @for (i of arr; track i) {
      <section>
        <h2>{{ i }}</h2>
      </section>
      <section class="green">
        <h2>{{ i }}</h2>
      </section>
      <section class="red">
        <h2>{{ i }}</h2>
      </section>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/card/card.component.css */\n:host {\n  display: grid;\n  gap: 1cm;\n  grid-template-columns: repeat(3, 1fr);\n  height: 100vh;\n  background-color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1cm;\n  width: 100vw;\n}\nsection {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 8cm;\n  height: 12cm;\n  border: 1px solid black;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  color: black;\n}\n.green {\n  background: green;\n  color: white;\n}\n.red {\n  background: red;\n  color: white;\n}\nsection > h2 {\n  font-size: 132px;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/card/card.component.ts", lineNumber: 22 });
})();
export {
  CardComponent
};
