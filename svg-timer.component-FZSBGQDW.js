import {
  AsyncPipe
} from "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  map,
  setClassMetadata,
  take,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/svg-timer/svg-timer.component.ts
function SvgTimerComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle");
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    const \u0275$index_8_r2 = ctx.$index;
    const time_r3 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("r", ctx_r3.radiusFromPosition(\u0275$index_8_r2))("stroke", color_r1)("stroke-dasharray", ctx_r3.dashArray(time_r3, ctx_r3.radiusFromPosition(\u0275$index_8_r2)));
  }
}
function SvgTimerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 0);
    \u0275\u0275repeaterCreate(1, SvgTimerComponent_Conditional_2_For_2_Template, 1, 3, ":svg:circle", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementStart(3, "text", 1);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.strokeColors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", 60 - ctx, " ");
  }
}
var twoPi = Math.PI * 2;
var circumference = (radius) => twoPi * radius;
var SvgTimerComponent = class _SvgTimerComponent {
  constructor() {
    this.strokeColors = [
      `rgb(132, 35, 156)`,
      "rgb(240, 26, 115)",
      `rgb(70, 166, 179)`,
      "#3dd656"
    ];
    this.timer$ = timer(0, 250).pipe(
      // mimic 60 minutes
      take(60),
      // Minutes start with 1, not zero.
      map((i) => i + 1)
    );
  }
  radiusFromPosition(pos) {
    return 44 - pos * 6;
  }
  minuteToAngle(minute, radius) {
    const per = minute / 60;
    return per * circumference(radius);
  }
  dashArray(minute, radius) {
    const covered = this.minuteToAngle(minute, radius);
    return `${covered} ${circumference(radius)}`;
  }
  static {
    this.\u0275fac = function SvgTimerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SvgTimerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SvgTimerComponent, selectors: [["app-svg-timer"]], decls: 4, vars: 3, consts: [["viewBox", "-50 -50 100 100"], ["dominant-baseline", "central", "text-anchor", "middle"]], template: function SvgTimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "SVG timer sample");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(2, SvgTimerComponent_Conditional_2_Template, 5, 1, ":svg:svg", 0);
        \u0275\u0275pipe(3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(3, 1, ctx.timer$)) ? 2 : -1, tmp_0_0);
      }
    }, dependencies: [AsyncPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nsvg[_ngcontent-%COMP%] {\n  transform: rotate(-0.25turn);\n  max-height: 90vh;\n}\ncircle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 6;\n}\ntext[_ngcontent-%COMP%] {\n  transform: rotate(0.25turn);\n  font-size: 2em;\n  font-weight: bold;\n  fill: #fff;\n}\ncircle[_ngcontent-%COMP%]:nth-child(2) {\n  transform: scaleY(-1);\n}\ncircle[_ngcontent-%COMP%]:nth-child(3) {\n  transform: scaleX(-1);\n}\ncircle[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(-0.25turn);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgTimerComponent, [{
    type: Component,
    args: [{ selector: "app-svg-timer", changeDetection: ChangeDetectionStrategy.OnPush, imports: [AsyncPipe], template: '<h1>SVG timer sample</h1>\n\n<!--\n  use viewBox trickery to get 0.0 in the center of the svg.\n  that way, we can skip the cX and CY attributes.\n-->\n@if (timer$ | async; as time) {\n  <svg viewBox="-50 -50 100 100">\n    @for (color of strokeColors; track color; let i = $index) {\n      <circle\n        [attr.r]="radiusFromPosition(i)"\n        [attr.stroke]="color"\n        [attr.stroke-dasharray]="dashArray(time, radiusFromPosition(i))"\n      />\n    }\n    <text dominant-baseline="central" text-anchor="middle">\n      {{ 60 - time }}\n    </text>\n  </svg>\n}\n\n<style>\n  :host {\n    display: block;\n  }\n\n  svg {\n    /** turn so 0,0 is at top */\n    transform: rotate(-0.25turn);\n    max-height: 90vh;\n  }\n\n  circle {\n    fill: none;\n    stroke-width: 6;\n  }\n\n  text {\n    transform: rotate(0.25turn);\n    /* put back right up */\n    font-size: 2em;\n    font-weight: bold;\n    fill: #fff;\n  }\n\n  /** reposition startingpoint of each circle. */\n  circle:nth-child(2) {\n    transform: scaleY(-1);\n  }\n\n  circle:nth-child(3) {\n    transform: scaleX(-1);\n  }\n\n  circle:nth-child(4) {\n    transform: rotate(-0.25turn);\n  }\n</style>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SvgTimerComponent, { className: "SvgTimerComponent", filePath: "src/app/svg-timer/svg-timer.component.ts", lineNumber: 15 });
})();
export {
  SvgTimerComponent
};
