import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LHOZ36SL.js";

// src/app/metered-view/stacked-per/stacked-per.component.ts
function StackedPerComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElement(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const per_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275styleProp("width", per_r1.value, "%")("background-color", "var(--metered-color-" + $index_r2 + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", per_r1.value.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", per_r1.name, " ");
  }
}
var StackedPerComponent = class _StackedPerComponent {
  constructor() {
    this.data = input(
      [
        { value: 4, name: "A" },
        { value: 8, name: "B" },
        { value: 12, name: "C" },
        { value: 5, name: "D" },
        { value: 10, name: "E" },
        { value: 9, name: "F" },
        { value: 20, name: "blah" },
        { value: 0.2, name: "G" }
      ],
      ...ngDevMode ? [{ debugName: "data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total = computed(
      () => this.data().reduce((acc, val) => acc + val.value, 0),
      ...ngDevMode ? [{ debugName: "total" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.percentages = computed(
      () => this.data().map((num) => ({
        value: num.value / this.total() * 100,
        name: num.name
      })),
      ...ngDevMode ? [{ debugName: "percentages" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function StackedPerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StackedPerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StackedPerComponent, selectors: [["se-stacked-per"]], inputs: { data: [1, "data"] }, decls: 2, vars: 0, consts: [[1, "bar", 3, "width", "backgroundColor"], [1, "bar"]], template: function StackedPerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, StackedPerComponent_For_1_Template, 4, 6, "div", 0, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.percentages());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  margin-block-start: 1rem;\n  --metered-color-0: #5f7331;\n  --metered-color-1: #5f4690;\n  --metered-color-2: #1d6996;\n  --metered-color-3: #38a6a5;\n  --metered-color-4: #0f8554;\n  --metered-color-5: #73af48;\n  --metered-color-6: #edad08;\n  --metered-color-7: #e17c05;\n  --metered-color-8: #cc503e;\n  --metered-color-9: #94346e;\n  --metered-color-10: #6f2c91;\n  border: #79c1c9 solid 1px;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: var(--size-2);\n  writing-mode: vertical-lr;\n  overflow: hidden;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackedPerComponent, [{
    type: Component,
    args: [{ selector: "se-stacked-per", imports: [], template: `
    @for (per of percentages(); track $index) {
      <div
        class="bar"
        [style.width.%]="per.value"
        [style.backgroundColor]="'var(--metered-color-' + $index + ')'"
      >
        {{ per.value.toFixed(1) }}%<br />
        {{ per.name }}
      </div>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/metered-view/stacked-per/stacked-per.component.css */\n:host {\n  display: flex;\n  margin-block-start: 1rem;\n  --metered-color-0: #5f7331;\n  --metered-color-1: #5f4690;\n  --metered-color-2: #1d6996;\n  --metered-color-3: #38a6a5;\n  --metered-color-4: #0f8554;\n  --metered-color-5: #73af48;\n  --metered-color-6: #edad08;\n  --metered-color-7: #e17c05;\n  --metered-color-8: #cc503e;\n  --metered-color-9: #94346e;\n  --metered-color-10: #6f2c91;\n  border: #79c1c9 solid 1px;\n}\n:host div {\n  padding: var(--size-2);\n  writing-mode: vertical-lr;\n  overflow: hidden;\n}\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StackedPerComponent, { className: "StackedPerComponent", filePath: "src/app/metered-view/stacked-per/stacked-per.component.ts", lineNumber: 26 });
})();

// src/app/metered-view/gauge/gauge.component.ts
var GaugeComponent = class _GaugeComponent {
  constructor() {
    this.value = input(
      15,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.maxVal = input(
      100,
      ...ngDevMode ? [{ debugName: "maxVal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.maskId = `arcMask-${Math.random().toString(36).slice(2, 9)}`;
    this.per = computed(
      () => {
        return Math.max(0, Math.min(1, Number(this.value() || 0) / Number(this.maxVal() || 1)));
      },
      ...ngDevMode ? [{ debugName: "per" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cx = 100;
    this.cy = 100;
    this.r = 80;
    this.bottomGapDegrees = 44;
  }
  toDeg(rad) {
    return rad * 180 / Math.PI;
  }
  toRad(deg) {
    return deg * Math.PI / 180;
  }
  getStartAngle() {
    return 90 + this.bottomGapDegrees / 2;
  }
  getEndAngle() {
    return 90 - this.bottomGapDegrees / 2;
  }
  normalizeSweep(start, end) {
    let sweep = end - start;
    if (sweep <= 0)
      sweep += 360;
    return sweep;
  }
  pointAt(angleDeg) {
    const a = this.toRad(angleDeg);
    return {
      x: this.cx + this.r * Math.cos(a),
      y: this.cy + this.r * Math.sin(a)
    };
  }
  // returns an SVG arc path from the original arc's start to the point at `percent` (0-100)
  getArcPath(percent) {
    const p = Math.max(0, Math.min(100, Number(percent) || 0));
    if (p === 0)
      return "";
    const startA = this.getStartAngle();
    const endA = this.getEndAngle();
    const totalSweep = this.normalizeSweep(startA, endA);
    const sweep = totalSweep * p / 100;
    const midA = startA + sweep;
    const startPt = this.pointAt(startA);
    const endPoint = this.pointAt(midA);
    const largeArc = Math.abs(sweep) > 180 ? 1 : 0;
    return `M${startPt.x} ${startPt.y} A${this.r} ${this.r} 0 ${largeArc} 1 ${endPoint.x} ${endPoint.y}`;
  }
  // returns an SVG arc path for the remainder (from percent to 100)
  getRemainderArcPath(percent) {
    const p = Math.max(0, Math.min(100, Number(percent) || 0));
    if (p >= 100)
      return "";
    const startA = this.getStartAngle();
    const endA = this.getEndAngle();
    const totalSweep = this.normalizeSweep(startA, endA);
    const sweep1 = totalSweep * p / 100;
    const midA = startA + sweep1;
    const remainingSweep = totalSweep - sweep1;
    const startPt = this.pointAt(midA);
    const endPt = this.pointAt(startA + totalSweep);
    const largeArc = Math.abs(remainingSweep) > 180 ? 1 : 0;
    return `M${startPt.x} ${startPt.y} A${this.r} ${this.r} 0 ${largeArc} 1 ${endPt.x} ${endPt.y}`;
  }
  static {
    this.\u0275fac = function GaugeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GaugeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GaugeComponent, selectors: [["se-gauge"]], inputs: { value: [1, "value"], maxVal: [1, "maxVal"] }, decls: 11, vars: 6, consts: [["viewBox", "0 0 200 200", "xmlns", "http://www.w3.org/2000/svg", 1, "myGauge"], ["maskUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "200", "height", "200", "fill", "white"], ["fill", "none", "stroke", "black", "stroke-width", "35", "stroke-linecap", "butt"], ["width", "204", "height", "204", "fill", "var(--_meter-backgroundColor, #f0f0f0)"], ["fill", "none", "stroke", "gray", "stroke-width", "35", "stroke-linecap", "butt"], [1, "text"]], template: function GaugeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "svg", 0)(1, "defs")(2, "mask", 1);
        \u0275\u0275domElement(3, "rect", 2)(4, "path", 3);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElement(5, "rect", 4)(6, "path", 5);
        \u0275\u0275domElementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275domElementStart(7, "div", 6);
        \u0275\u0275text(8);
        \u0275\u0275domElement(9, "br");
        \u0275\u0275text(10);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275attribute("id", ctx.maskId);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.getArcPath(ctx.per() * 100));
        \u0275\u0275advance();
        \u0275\u0275attribute("mask", "url(#" + ctx.maskId + ")");
        \u0275\u0275advance();
        \u0275\u0275attribute("d", ctx.getRemainderArcPath(ctx.per() * 100));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", (ctx.per() * 100).toFixed(1), "% ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  --_inline-size: 100px;\n  --_block-size: 100px;\n  display: inline-block;\n  position: relative;\n  inline-size: var(--_inline-size);\n  block-size: var(--_block-size);\n}\nsvg.myGauge[_ngcontent-%COMP%] {\n  inline-size: var(--_inline-size);\n  block-size: var(--_block-size);\n  --_meter-backgroundColor: var(--meter-backgroundColor, var(--surface-3));\n  background-repeat: no-repeat;\n  background-position: center;\n  background:\n    conic-gradient(\n      from 202deg at center,\n      #00c853 0deg,\n      #ff0000 316deg,\n      transparent 316deg);\n}\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  font-size: 0.8rem;\n  color: white;\n  text-align: center;\n  pointer-events: none;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugeComponent, [{
    type: Component,
    args: [{ selector: "se-gauge", imports: [], template: `
    <svg
      class="myGauge"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask [attr.id]="maskId" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="200" height="200" fill="white" />
          <path
            [attr.d]="getArcPath(per() * 100)"
            fill="none"
            stroke="black"
            stroke-width="35"
            stroke-linecap="butt"
          />
        </mask>
      </defs>

      <!-- Fill with surface color and let the SVG element background (conic-gradient) show through the masked arc -->
      <rect
        width="204"
        height="204"
        fill="var(--_meter-backgroundColor, #f0f0f0)"
        [attr.mask]="'url(#' + maskId + ')'"
      />

      <path
        [attr.d]="getRemainderArcPath(per() * 100)"
        fill="none"
        stroke="gray"
        stroke-width="35"
        stroke-linecap="butt"
      />
    </svg>

    <div class="text">{{ (per() * 100).toFixed(1) }}% <br />{{ value() }}</div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/metered-view/gauge/gauge.component.css */\n:host {\n  --_inline-size: 100px;\n  --_block-size: 100px;\n  display: inline-block;\n  position: relative;\n  inline-size: var(--_inline-size);\n  block-size: var(--_block-size);\n}\nsvg.myGauge {\n  inline-size: var(--_inline-size);\n  block-size: var(--_block-size);\n  --_meter-backgroundColor: var(--meter-backgroundColor, var(--surface-3));\n  background-repeat: no-repeat;\n  background-position: center;\n  background:\n    conic-gradient(\n      from 202deg at center,\n      #00c853 0deg,\n      #ff0000 316deg,\n      transparent 316deg);\n}\n.text {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  font-size: 0.8rem;\n  color: white;\n  text-align: center;\n  pointer-events: none;\n}\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], maxVal: [{ type: Input, args: [{ isSignal: true, alias: "maxVal", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GaugeComponent, { className: "GaugeComponent", filePath: "src/app/metered-view/gauge/gauge.component.ts", lineNumber: 52 });
})();

export {
  StackedPerComponent,
  GaugeComponent
};
