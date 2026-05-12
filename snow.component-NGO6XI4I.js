import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/snow/snow.component.ts
var SnowComponent = class _SnowComponent {
  constructor() {
    this._ = afterNextRender(() => {
      if (typeof document === "undefined")
        return;
      makeItSnow();
    });
  }
  static {
    this.\u0275fac = function SnowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SnowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SnowComponent, selectors: [["app-snow"]], decls: 2, vars: 0, template: function SnowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "snow works!");
        \u0275\u0275domElementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SnowComponent, [{
    type: Component,
    args: [{ selector: "app-snow", changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>snow works!</p>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SnowComponent, { className: "SnowComponent", filePath: "src/app/snow/snow.component.ts", lineNumber: 15 });
})();
function makeItSnow() {
  const snowCanvas = createSnowCanvas();
  const ctx = snowCanvas.getContext("2d");
  const height = snowCanvas.height;
  const width = snowCanvas.width;
  const makeColor = () => Number.parseInt((9 + getRandomInt(6)).toString(16).repeat(6), 16);
  const makeFlake = () => [
    width - getRandomInt(width),
    // x
    getRandomInt(5),
    // y
    -2 + getRandomInt(4),
    // speedX
    1 + getRandomInt(4),
    // speedY
    1 + getRandomInt(1),
    // size (1 or 2 pixels)
    makeColor()
    // color
  ];
  const makeFlakes = (num) => Array.from({ length: num }, makeFlake);
  const drawFlake = ([x, y, speedX, speedY, radius, color]) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `#${color.toString(16)}`;
    ctx.fill();
    return y + speedY > height - 2 ? [x, y + 0.03, speedX, speedY, radius, color] : [x + speedX, y + speedY, speedX, speedY, radius, color];
  };
  const animate = (flakes) => requestAnimationFrame(() => {
    const needFlakeCount = 150 + getRandomInt(25);
    ctx.clearRect(0, 0, width, height);
    animate(
      flakes.concat(flakes.length < needFlakeCount ? makeFlakes(1 + getRandomInt(7)) : []).map(drawFlake).filter(([x, y]) => x > 0 && x < width && y < height)
      // remove flakes that are out of the view
    );
  });
  animate(makeFlakes(getRandomInt(20)));
}
function getRandomInt(max) {
  if (typeof window === "undefined")
    throw new Error("window is not defined");
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  let randomNumber = randomBuffer[0] / (4294967295 + 1);
  return Math.floor(randomNumber * (Math.floor(max) + 1));
}
function createSnowCanvas() {
  if (typeof window === "undefined")
    throw new Error("window is not defined");
  if (typeof document === "undefined")
    throw new Error("document is not defined");
  const snowFlakesCanvas = document.createElement("canvas");
  snowFlakesCanvas.width = window.innerWidth;
  snowFlakesCanvas.height = window.innerHeight;
  snowFlakesCanvas.style.position = "fixed";
  snowFlakesCanvas.style.top = "0";
  snowFlakesCanvas.style.left = "0";
  snowFlakesCanvas.style.zIndex = "1001";
  snowFlakesCanvas.style.pointerEvents = "none";
  document.body.appendChild(snowFlakesCanvas);
  return snowFlakesCanvas;
}
export {
  SnowComponent
};
