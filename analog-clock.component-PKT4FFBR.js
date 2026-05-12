import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/analog-clock/analog-clock.component.ts
var AnalogClockComponent = class _AnalogClockComponent {
  constructor() {
    this.zone = inject(NgZone);
  }
  ngOnInit() {
    if (typeof document === "undefined")
      return;
    this.zone.runOutsideAngular(() => {
      analogClock(getCanvasCtx());
      function getCanvasCtx() {
        let canvas = document.querySelector(".canvas");
        return canvas.getContext("2d");
      }
    });
  }
  static {
    this.\u0275fac = function AnalogClockComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalogClockComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalogClockComponent, selectors: [["app-analog-clock"]], decls: 1, vars: 0, consts: [["width", "400", "height", "400", 1, "canvas"]], template: function AnalogClockComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalogClockComponent, [{
    type: Component,
    args: [{ selector: "app-analog-clock", template: ` <canvas width="400" height="400" class="canvas"></canvas> `, changeDetection: ChangeDetectionStrategy.OnPush }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalogClockComponent, { className: "AnalogClockComponent", filePath: "src/app/analog-clock/analog-clock.component.ts", lineNumber: 15 });
})();
function analogClock(ctx) {
  function curry(fn, ...args) {
    let _curry = (args2) => args2.length < fn.length ? (..._args) => _curry([...args2, ..._args]) : fn(...args2);
    return _curry(args);
  }
  const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
  const map = curry((fn, value) => value.map(fn));
  const reduce = curry((fn, value) => value.reduce(fn));
  const unCurry = (fn) => (...args) => args.reduce((ret, cur) => ret(cur), fn);
  const unary = (fn) => (arg) => fn(arg);
  const identity = (x) => x;
  const constant = (x) => () => x;
  function sum(a, b, c) {
    return a + b + c;
  }
  const cSum = curry(sum);
  console.log(unCurry(cSum)(1, 2, 3));
  const pallette = [
    "#041010",
    "#082121",
    "#0c3131",
    "#104141",
    "#145252",
    "#186262",
    "#1d7272",
    "#218383",
    "#259393",
    "#29a3a3",
    "#2db4b4",
    "#31c4c4",
    "#3bcece",
    "#4ed3d3",
    "#5cd6d6",
    "#6cdada",
    "#7cdede",
    "#8de2e2",
    "#9de7e7",
    "#adebeb",
    "#beefef",
    "#cef3f3",
    "#def7f7",
    "#effbfb"
  ];
  function* nextColor() {
    let i = 0;
    while (true) {
      yield pallette[i];
      i += 1;
      if (i === pallette.length) {
        i = 0;
      }
    }
  }
  let color = nextColor();
  const clockLine = curry(xxLine)(ctx, [200, 200]);
  const toDirfrom60 = compose(toDirection, toAngleFrom(60));
  const secWand = compose(clockLine(4, 146), toDirfrom60);
  const minWand = compose(clockLine(4, 130), toDirfrom60);
  const hourWand = compose(clockLine(4, 100), toDirection, toAngleFrom(12));
  const putText = curry(xxText)(ctx, [200, 200], 180);
  function clock(time) {
    drawClock(time);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => clock(/* @__PURE__ */ new Date()));
    }
  }
  function drawClock(time) {
    let secs = time.getSeconds() + time.getMilliseconds() / 1e3;
    let mins = time.getMinutes() + secs / 60;
    let hour = time.getHours() + mins / 60;
    hour = hour > 12 ? hour - 12 : hour;
    clearCtx(ctx);
    drawPlate();
    secWand(secs);
    minWand(mins);
    hourWand(hour);
  }
  function drawPlate() {
    let len = 0;
    let drawTack = clockLine(153);
    for (let x = 1; x < 61; x += 1) {
      if (x % 5 === 0) {
        len = 15;
        putText(toDirfrom60(x), "" + x / 5);
      } else {
        len = 10;
      }
      drawTack(len, toDirfrom60(x));
    }
  }
  function xxLine(ctx2, origin, offset, length, direction) {
    let start = [
      origin[0] + direction[0] * offset,
      origin[1] + direction[1] * offset
    ];
    let end = [
      origin[0] + direction[0] * (offset + length),
      origin[1] + direction[1] * (offset + length)
    ];
    line(ctx2, start, end);
  }
  function xxText(ctx2, origin, offset, direction, text) {
    let x = origin[0] + direction[0] * offset;
    let y = origin[1] + direction[1] * offset;
    ctx2.font = "bold 18px Times";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "#fff";
    ctx2.fillText(text, x, y);
  }
  function toAngleFrom(p) {
    return function(sec) {
      let res = sec * (360 / p) - 90;
      return res < 0 ? res + 360 : res;
    };
  }
  function toDirection(angle) {
    let radian = Math.PI / 180 * angle;
    return [Math.cos(radian), Math.sin(radian)];
  }
  function clearCtx(context) {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.restore();
  }
  function point(ctx2, x, y) {
    ctx2.fillRect(x, y, 1, 1);
  }
  function line(ctx2, start, end) {
    ctx2.beginPath();
    ctx2.strokeStyle = "#ffffff";
    ctx2.moveTo(start[0], start[1]);
    ctx2.lineTo(end[0], end[1]);
    ctx2.stroke();
  }
  clock(/* @__PURE__ */ new Date());
}
export {
  AnalogClockComponent
};
