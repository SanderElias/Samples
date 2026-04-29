import {
  GaugeComponent,
  StackedPerComponent
} from "./chunk-D456A2QH.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/metered-view/metered-view.component.ts
var MeteredViewComponent = class _MeteredViewComponent {
  constructor() {
    this.maxValue = signal(
      100,
      ...ngDevMode ? [{ debugName: "maxValue" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentValue = signal(
      100,
      ...ngDevMode ? [{ debugName: "currentValue" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cx = 100;
    this.cy = 100;
    this.r = 80;
    this.startX = 54.114;
    this.startY = 165.532;
    this.endX = 145.886;
    this.endY = 165.532;
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
    this.\u0275fac = function MeteredViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeteredViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeteredViewComponent, selectors: [["se-metered-view"]], decls: 15, vars: 6, consts: [[3, "value", "maxVal"], ["for", "currentValue"], ["id", "currentValue", "type", "range", "min", "0", 3, "input", "max", "value"], ["viewBox", "0 0 200 200", "width", "200", "height", "200", "xmlns", "http://www.w3.org/2000/svg", 1, "myGauge"], ["id", "arcMask", "maskUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "200", "height", "200", "fill", "white"], ["fill", "none", "stroke", "black", "stroke-width", "35", "stroke-linecap", "button"], ["width", "100%", "height", "100%", "fill", "var(--surface-1)", "mask", "url(#arcMask)"], ["fill", "none", "stroke", "gray", "stroke-width", "35", "stroke-linecap", "button"]], template: function MeteredViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Metered View");
        \u0275\u0275elementEnd();
        \u0275\u0275element(2, "se-gauge", 0)(3, "se-stacked-per");
        \u0275\u0275elementStart(4, "label", 1);
        \u0275\u0275text(5, "Current Value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "input", 2);
        \u0275\u0275listener("input", function MeteredViewComponent_Template_input_input_6_listener($event) {
          return ctx.currentValue.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "hr");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 3)(9, "defs")(10, "mask", 4);
        \u0275\u0275element(11, "rect", 5)(12, "path", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "rect", 7)(14, "path", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.currentValue())("maxVal", ctx.maxValue());
        \u0275\u0275advance(4);
        \u0275\u0275property("max", ctx.maxValue())("value", ctx.currentValue());
        \u0275\u0275advance(6);
        \u0275\u0275attribute("d", ctx.getArcPath(ctx.currentValue()));
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.getRemainderArcPath(ctx.currentValue()));
      }
    }, dependencies: [GaugeComponent, StackedPerComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  padding: var(--size-3);\n}\nsvg[_ngcontent-%COMP%] {\n  background:\n    conic-gradient(\n      from 202deg at center,\n      #00c853 0deg,\n      #ff0000 316deg,\n      transparent 316deg);\n  background-repeat: no-repeat;\n  background-position: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeteredViewComponent, [{
    type: Component,
    args: [{ selector: "se-metered-view", imports: [GaugeComponent, StackedPerComponent], template: `
    <h1>Metered View</h1>

    <se-gauge [value]="currentValue()" [maxVal]="maxValue()" />
    <se-stacked-per />
    <label for="currentValue">Current Value</label>
    <input
      id="currentValue"
      type="range"
      min="0"
      [max]="maxValue()"
      [value]="currentValue()"
      (input)="currentValue.set($any($event.target).value)"
    />
    <hr />
    <svg
      class="myGauge"
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- mask: white = opaque, black = transparent; the arc stroke (filled part) is black to cut a hole -->
        <mask id="arcMask" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="200" height="200" fill="white" />
          <path
            [attr.d]="getArcPath(currentValue())"
            fill="none"
            stroke="black"
            stroke-width="35"
            stroke-linecap="button"
          />
        </mask>
      </defs>

      <!-- fill the SVG with the surface color, but mask out the arc (filled part) so page background shows through -->
      <rect
        width="100%"
        height="100%"
        fill="var(--surface-1)"
        mask="url(#arcMask)"
      />

      <!-- gray remainder of the arc (unfilled part) -->
      <path
        [attr.d]="getRemainderArcPath(currentValue())"
        fill="none"
        stroke="gray"
        stroke-width="35"
        stroke-linecap="button"
      />
    </svg>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/metered-view/metered-view.component.css */\n:host {\n  display: block;\n  padding: var(--size-3);\n}\nsvg {\n  background:\n    conic-gradient(\n      from 202deg at center,\n      #00c853 0deg,\n      #ff0000 316deg,\n      transparent 316deg);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeteredViewComponent, { className: "MeteredViewComponent", filePath: "src/app/metered-view/metered-view.component.ts", lineNumber: 66 });
})();
export {
  MeteredViewComponent
};
