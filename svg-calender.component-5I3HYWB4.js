import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// src/app/util/daysandmonthsnames.ts
var weekDayNames = weekDays();
var monthNames = months();
function weekDays(countryCode) {
  const date = /* @__PURE__ */ new Date();
  const day = date.getDate();
  if (typeof navigator === "undefined") {
    return [];
  }
  countryCode ??= navigator.language;
  return Array.from({ length: 7 }).map((e, i) => {
    const workDate = new Date(date.setDate(day + i));
    return [
      new Intl.DateTimeFormat(countryCode, {
        weekday: "long"
      }).format(workDate),
      workDate.getDay()
    ];
  }).sort((a, b) => a[1] < b[1] ? -1 : 1).map((d) => d[0]);
}
function months(countryCode) {
  if (typeof navigator === "undefined") {
    return [];
  }
  countryCode ??= navigator.language;
  return Array.from({ length: 12 }).map((e, i) => {
    return new Intl.DateTimeFormat(countryCode, {
      month: "short"
    }).format(new Date(2e3, i, 2)).substr(0, 3);
  });
}

// src/app/svg-calendar/svg-calender/svg-calender.component.ts
var SvgCalenderComponent = class _SvgCalenderComponent {
  set date(x) {
    this.splitDate(x);
  }
  constructor() {
    this.month = "";
    this.day = "";
    this.dim = 0;
    this.splitDate();
  }
  splitDate(d = /* @__PURE__ */ new Date()) {
    if (typeof document === "undefined")
      return;
    this.month = monthNames[d.getMonth()].toUpperCase();
    this.dim = d.getDate();
    this.day = weekDayNames[d.getDay()];
  }
  static {
    this.\u0275fac = function SvgCalenderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SvgCalenderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SvgCalenderComponent, selectors: [["app-svg-calender"]], inputs: { date: "date" }, decls: 20, vars: 3, consts: [["aria-label", "Calendar", "role", "img", "viewBox", "0 0 512 512"], ["id", "c"], ["width", "512", "height", "512", "rx", "15%"], ["clip-path", "url(#c)"], ["width", "512", "height", "512", "fill", "#dee"], ["width", "512", "height", "180", "fill", "#d34"], ["id", "b"], ["fill", "#eab", "cx", "384", "cy", "100", "r", "14", "id", "a"], ["fill", "#eab", "cx", "428", "cy", "100", "r", "14", "id", "a"], ["fill", "#eab", "cx", "470", "cy", "100", "r", "14", "id", "a"], ["fill", "#eab", "cx", "384", "cy", "143", "r", "14", "id", "a"], ["fill", "#eab", "cx", "428", "cy", "143", "r", "14", "id", "a"], ["fill", "#eab", "cx", "470", "cy", "143", "r", "14", "id", "a"], ["font-size", "64", "x", "256", "y", "480", "id", "w"], ["fill", "#fff", "font-size", "140", "x", "140", "y", "164", "id", "m"], ["font-size", "256", "x", "256", "y", "400", "id", "d"]], template: function SvgCalenderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "svg", 0)(1, "defs")(2, "clipPath", 1);
        \u0275\u0275domElement(3, "rect", 2);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(4, "g", 3);
        \u0275\u0275domElement(5, "rect", 4)(6, "rect", 5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "g", 6);
        \u0275\u0275domElement(8, "circle", 7)(9, "circle", 8)(10, "circle", 9)(11, "circle", 10)(12, "circle", 11)(13, "circle", 12);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(14, "text", 13);
        \u0275\u0275text(15);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(16, "text", 14);
        \u0275\u0275text(17);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(18, "text", 15);
        \u0275\u0275text(19);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate(ctx.day);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.month);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dim);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: auto;\n  width: 100px;\n}\nsvg[_ngcontent-%COMP%] {\n  font-family: monospace;\n  text-anchor: middle;\n  fill: #667777;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgCalenderComponent, [{
    type: Component,
    args: [{ selector: "app-svg-calender", changeDetection: ChangeDetectionStrategy.OnPush, template: '<svg\n  aria-label="Calendar"\n  role="img"\n  viewBox="0 0 512 512"\n>\n  <defs>\n    <clipPath id="c">\n      <rect\n        width="512"\n        height="512"\n        rx="15%"\n      />\n    </clipPath>\n  </defs>\n  <g clip-path="url(#c)">\n    <rect\n      width="512"\n      height="512"\n      fill="#dee"\n    />\n    <rect\n      width="512"\n      height="180"\n      fill="#d34"\n    />\n  </g>\n  <g id="b">\n    <circle\n      fill="#eab"\n      cx="384"\n      cy="100"\n      r="14"\n      id="a"\n    />\n        <circle\n      fill="#eab"\n      cx="428"\n      cy="100"\n      r="14"\n      id="a"\n    />\n    <circle\n      fill="#eab"\n      cx="470"\n      cy="100"\n      r="14"\n      id="a"\n    />\n    <circle\n      fill="#eab"\n      cx="384"\n      cy="143"\n      r="14"\n      id="a"\n    />\n        <circle\n      fill="#eab"\n      cx="428"\n      cy="143"\n      r="14"\n      id="a"\n    />\n    <circle\n      fill="#eab"\n      cx="470"\n      cy="143"\n      r="14"\n      id="a"\n    />\n  </g>\n<text\n    font-size="64"\n    x="256"\n    y="480"\n    id="w"\n  >{{day}}</text><text\n    fill="#fff"\n    font-size="140"\n    x="140"\n    y="164"\n    id="m"\n  >{{month}}</text><text\n    font-size="256"\n    x="256"\n    y="400"\n    id="d"\n  >{{dim}}</text>\n</svg>\n', styles: ["/* angular:styles/component:css;ddf235d82785e695493fbca877e762408c1f297af8aac7e0089fa4b663a78757;/home/runner/work/Samples/Samples/src/app/svg-calendar/svg-calender/svg-calender.component.ts */\n:host {\n  display: block;\n  height: auto;\n  width: 100px;\n}\nsvg {\n  font-family: monospace;\n  text-anchor: middle;\n  fill: #667777;\n}\n"] }]
  }], () => [], { date: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SvgCalenderComponent, { className: "SvgCalenderComponent", filePath: "src/app/svg-calendar/svg-calender/svg-calender.component.ts", lineNumber: 23 });
})();
export {
  SvgCalenderComponent
};
