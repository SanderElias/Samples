import {
  AsyncPipe
} from "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  map,
  setClassMetadata,
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
  ɵɵtextInterpolate3
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/svg-clock/svg-clock.component.ts
function SvgClockComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle", 1);
  }
  if (rf & 2) {
    const \u0275$index_8_r1 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("r", ctx_r1.radiusFromPosition(\u0275$index_8_r1));
  }
}
function SvgClockComponent_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle");
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const \u0275$index_11_r4 = ctx.$index;
    const time_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("r", ctx_r1.radiusFromPosition(\u0275$index_11_r4))("stroke", color_r3)("stroke-dasharray", ctx_r1.dashArray(time_r5[\u0275$index_11_r4], \u0275$index_11_r4));
  }
}
function SvgClockComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 0);
    \u0275\u0275repeaterCreate(1, SvgClockComponent_Conditional_2_For_2_Template, 1, 1, ":svg:circle", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(3, SvgClockComponent_Conditional_2_For_4_Template, 1, 3, ":svg:circle", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementStart(5, "text", 2);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const time_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.strokeColors);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.strokeColors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r1.zerod(time_r5[0]), ":", ctx_r1.zerod(time_r5[1]), ":", ctx_r1.zerod(time_r5[2]), " ");
  }
}
var twoPi = Math.PI * 2;
var circumference = (radius) => twoPi * radius;
var SvgClockComponent = class _SvgClockComponent {
  constructor() {
    this.strokeColors = [
      `rgb(132, 35, 156)`,
      "rgb(240, 26, 115)",
      `rgb(70, 166, 179)`
    ];
    this.time$ = timer(0, 500).pipe(
      // Minutes start with 1, not zero.
      map((i) => {
        const now = /* @__PURE__ */ new Date();
        return [now.getHours(), now.getMinutes(), now.getSeconds()];
      })
    );
  }
  radiusFromPosition(pos) {
    return 44 - pos * 6;
  }
  minuteToAngle(minute, radius) {
    const per = minute / 60;
    return per * circumference(radius);
  }
  dashArray(minute, position) {
    const radius = this.radiusFromPosition(position);
    const hoursToPer = (n) => n % 12 / 12 * circumference(radius);
    const covered = position === 0 ? hoursToPer(minute) : this.minuteToAngle(minute, radius);
    return `${covered} ${circumference(radius)}`;
  }
  zerod(n) {
    return n < 10 ? `0${n}` : n;
  }
  static {
    this.\u0275fac = function SvgClockComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SvgClockComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SvgClockComponent, selectors: [["app-svg-clock"]], decls: 4, vars: 3, consts: [["viewBox", "-50 -50 100 100"], ["stroke", "lightgray", 2, "stroke-width", "2"], ["dominant-baseline", "central", "text-anchor", "middle"]], template: function SvgClockComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "SVG Clock sample");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(2, SvgClockComponent_Conditional_2_Template, 7, 3, ":svg:svg", 0);
        \u0275\u0275pipe(3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(3, 1, ctx.time$)) ? 2 : -1, tmp_0_0);
      }
    }, dependencies: [AsyncPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nsvg[_ngcontent-%COMP%] {\n  transform: rotate(-0.25turn);\n  max-height: 90vh;\n}\ncircle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 6;\n}\ntext[_ngcontent-%COMP%] {\n  transform: rotate(0.25turn);\n  font-size: 0.5rem;\n  font-weight: bold;\n  fill: lightgray;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgClockComponent, [{
    type: Component,
    args: [{ selector: "app-svg-clock", changeDetection: ChangeDetectionStrategy.OnPush, imports: [AsyncPipe], template: '<h1>SVG Clock sample</h1>\n\n<!--\n  use viewBox trickery to get 0.0 in the center of the svg.\n  that way, we can skip the cX and CY attributes.\n-->\n@if (time$ | async; as time) {\n  <svg viewBox="-50 -50 100 100">\n    @for (color of strokeColors; track color; let i = $index) {\n      <circle\n        [attr.r]="radiusFromPosition(i)"\n        stroke="lightgray"\n        style="stroke-width: 2"\n      />\n    }\n    @for (color of strokeColors; track color; let i = $index) {\n      <circle\n        [attr.r]="radiusFromPosition(i)"\n        [attr.stroke]="color"\n        [attr.stroke-dasharray]="dashArray(time[i], i)"\n      />\n    }\n    <text dominant-baseline="central" text-anchor="middle">\n      {{ zerod(time[0]) }}:{{ zerod(time[1]) }}:{{ zerod(time[2]) }}\n    </text>\n  </svg>\n}\n\n<style>\n  :host {\n    display: block;\n  }\n\n  svg {\n    /** turn so 0,0 is at top */\n    transform: rotate(-0.25turn);\n    max-height: 90vh;\n  }\n\n  circle {\n    fill: none;\n    stroke-width: 6;\n  }\n\n  text {\n    transform: rotate(0.25turn);\n    /* put back right up */\n    font-size: 0.5rem;\n    font-weight: bold;\n    fill: lightgray;\n  }\n</style>\n', styles: ["/* angular:styles/component:css;99efe8ab7c564e9bf6630cd486b91f6a48110b416ca99339905cc343ab7c645a;/home/runner/work/Samples/Samples/src/app/svg-clock/svg-clock.component.html */\n:host {\n  display: block;\n}\nsvg {\n  transform: rotate(-0.25turn);\n  max-height: 90vh;\n}\ncircle {\n  fill: none;\n  stroke-width: 6;\n}\ntext {\n  transform: rotate(0.25turn);\n  font-size: 0.5rem;\n  font-weight: bold;\n  fill: lightgray;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SvgClockComponent, { className: "SvgClockComponent", filePath: "src/app/svg-clock/svg-clock.component.ts", lineNumber: 15 });
})();
export {
  SvgClockComponent
};
