import {
  ChangeDetectionStrategy,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/anchor-pos/anchor-pos.component.ts
var AnchorPosComponent = class _AnchorPosComponent {
  constructor() {
    this.posOptions = [
      "start start",
      "start center",
      "start end",
      "center end",
      "end end",
      "end center",
      "end start",
      "center start"
    ];
    this.currentPos = signal(
      0,
      ...ngDevMode ? [{ debugName: "currentPos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pos = computed(
      () => {
        const p = `position-area: ${this.posOptions[this.currentPos()]}`;
        console.log(p);
        return p;
      },
      ...ngDevMode ? [{ debugName: "pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function AnchorPosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnchorPosComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnchorPosComponent, selectors: [["se-anchor-pos"]], decls: 16, vars: 5, consts: [["type", "range", "min", "0", "step", "1", 3, "input", "max", "value"], [1, "anchored"], [1, "infobox"]], template: function AnchorPosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Anchor Position");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "label")(3, "span");
        \u0275\u0275text(4, "move the slider to select the position");
        \u0275\u0275domElement(5, "br");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "input", 0);
        \u0275\u0275domListener("input", function AnchorPosComponent_Template_input_input_6_listener($event) {
          return ctx.currentPos.set($event.target.value);
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "section")(8, "div", 1)(9, "p");
        \u0275\u0275text(10, "\u2693\uFE0E The anchored content");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(11, "div", 2)(12, "p");
        \u0275\u0275text(13, "this is the box we are going to anchor to");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275domElementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275domProperty("max", ctx.posOptions.length - 1)("value", ctx.currentPos());
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(ctx.pos());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("Current Position: ", ctx.posOptions[ctx.currentPos()]);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.anchored[_ngcontent-%COMP%] {\n  position: absolute;\n  position-anchor: --myAnchor;\n  background:\n    linear-gradient(\n      45deg,\n      blueviolet,\n      blue);\n  font-size: 1rem;\n  display: grid;\n  place-items: center;\n  border-radius: 0.5ch;\n  padding: 0.5ch;\n  width: fit-content;\n  margin: 0.5ch;\n}\n.infobox[_ngcontent-%COMP%] {\n  anchor-name: --myAnchor;\n  width: fit-content;\n  background-color: #0a0a0a;\n  padding: 0.6ch;\n  border-radius: 0.6ch;\n}\nsection[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  border: 1px solid #000;\n  width: 60rem;\n  height: 30rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnchorPosComponent, [{
    type: Component,
    args: [{ selector: "se-anchor-pos", imports: [], template: `
    <h1>Anchor Position</h1>

    <label>
      <span>move the slider to select the position<br /></span>
      <input
        type="range"
        min="0"
        [max]="posOptions.length - 1"
        step="1"
        (input)="currentPos.set($any($event.target).value)"
        [value]="currentPos()"
      />

      <section>
        <div class="anchored" [style]="pos()">
          <p>\u2693\uFE0E The anchored content</p>
        </div>

        <div class="infobox">
          <p>this is the box we are going to anchor to</p>
          <p>Current Position: {{ posOptions[currentPos()] }}</p>
        </div>
      </section>
    </label>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/anchor-pos/anchor-pos.component.css */\n:host {\n  display: block;\n  position: relative;\n}\n.anchored {\n  position: absolute;\n  position-anchor: --myAnchor;\n  background:\n    linear-gradient(\n      45deg,\n      blueviolet,\n      blue);\n  font-size: 1rem;\n  display: grid;\n  place-items: center;\n  border-radius: 0.5ch;\n  padding: 0.5ch;\n  width: fit-content;\n  margin: 0.5ch;\n}\n.infobox {\n  anchor-name: --myAnchor;\n  width: fit-content;\n  background-color: #0a0a0a;\n  padding: 0.6ch;\n  border-radius: 0.6ch;\n}\nsection {\n  display: grid;\n  place-items: center;\n  border: 1px solid #000;\n  width: 60rem;\n  height: 30rem;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnchorPosComponent, { className: "AnchorPosComponent", filePath: "src/app/anchor-pos/anchor-pos.component.ts", lineNumber: 40 });
})();
export {
  AnchorPosComponent
};
