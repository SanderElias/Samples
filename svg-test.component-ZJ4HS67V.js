import {
  DecimalPipe
} from "./chunk-V6OJJHGF.js";
import "./chunk-2KCW2NJN.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// src/app/svg-test/blocks/blocks.component.ts
function BlocksComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "rect");
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-id", b_r1.id)("x", b_r1.x)("y", b_r1.y)("width", ctx_r1.blockSize)("height", ctx_r1.blockSize)("fill", b_r1.fillColor);
  }
}
var BlocksComponent = class _BlocksComponent {
  /** input so e can do something */
  set recolor(x) {
    if (x) {
      this._recolor();
    }
  }
  constructor() {
    this.blockSize = 3;
    this.colCount = Math.floor(1e3 / this.blockSize);
    this.blocks = Array.from({ length: this.colCount * this.colCount }, (_, i) => ({
      fillColor: this.randomColor(),
      x: this.calcX(i),
      y: this.calcY(i),
      id: i
    }));
    this.rectClicked = new EventEmitter();
    this.cellCount = new EventEmitter();
    setTimeout(() => {
      this.cellCount.emit(this.blocks.length - 1);
    });
  }
  /** lick handler */
  sendRectNumber(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const rect = ev.target;
    if (!isNaN(Number(rect.dataset.id))) {
      this.rectClicked.emit(Number(rect.dataset.id));
    }
  }
  /** calculate column number */
  calcX(i) {
    const rowsDone = Math.floor(i / this.colCount) * this.colCount;
    return (i - rowsDone) * this.blockSize;
  }
  /** calculate row number */
  calcY(i) {
    return Math.floor(i / this.colCount) * this.blockSize;
  }
  /** give all the blocks a new color */
  _recolor() {
    this.blocks.forEach((block) => block.fillColor = this.randomColor());
    console.log(`Changed the color of ${this.blocks.length - 1} blocks`);
  }
  /** helper to generate a random color */
  randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  static {
    this.\u0275fac = function BlocksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlocksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlocksComponent, selectors: [["app-blocks"]], inputs: { recolor: "recolor" }, outputs: { rectClicked: "rectClicked", cellCount: "cellCount" }, decls: 4, vars: 0, consts: [["role", "img", "viewBox", "0 0 1000 1000", 3, "click"]], template: function BlocksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "svg", 0);
        \u0275\u0275domListener("click", function BlocksComponent_Template_svg_click_0_listener($event) {
          return ctx.sendRectNumber($event);
        });
        \u0275\u0275domElementStart(1, "g");
        \u0275\u0275repeaterCreate(2, BlocksComponent_For_3_Template, 1, 6, ":svg:rect", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.blocks);
      }
    }, styles: ["/* angular:styles/component:css;7f43ff1825ad05d68e14cc46aa4157d1978629e507df9ccdf9f54268a878a284;/home/runner/work/Samples/Samples/src/app/svg-test/blocks/blocks.component.ts */\n:host {\n  display: block;\n}\n"], encapsulation: 3 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlocksComponent, [{
    type: Component,
    args: [{ selector: "app-blocks", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.ShadowDom, template: '<svg\n  role="img"\n  viewBox="0 0 1000 1000" (click)="sendRectNumber($event)">\n  <g>\n    @for (b of blocks; track b; let i = $index) {\n      <rect [attr.data-id]=b.id [attr.x]="b.x" [attr.y]="b.y" [attr.width]="blockSize" [attr.height]="blockSize" [attr.fill]="b.fillColor"  />\n    }\n  </g>\n</svg>\n', styles: ["/* angular:styles/component:css;7f43ff1825ad05d68e14cc46aa4157d1978629e507df9ccdf9f54268a878a284;/home/runner/work/Samples/Samples/src/app/svg-test/blocks/blocks.component.ts */\n:host {\n  display: block;\n}\n"] }]
  }], () => [], { recolor: [{
    type: Input
  }], rectClicked: [{
    type: Output
  }], cellCount: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlocksComponent, { className: "BlocksComponent", filePath: "src/app/svg-test/blocks/blocks.component.ts", lineNumber: 23 });
})();

// src/app/svg-test/svg-test.component.ts
var SvgTestComponent = class _SvgTestComponent {
  constructor() {
    this.count = 0;
    this.cellCount = 0;
  }
  /** up the counter */
  reColor() {
    this.count += 1;
  }
  /** log out to console when a block is clicked. */
  bit(n) {
    console.log(`rectangle number ${n} is clicked`);
  }
  static {
    this.\u0275fac = function SvgTestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SvgTestComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SvgTestComponent, selectors: [["app-svg-test"]], decls: 9, vars: 4, consts: [[3, "rectClicked", "cellCount", "recolor"], [3, "click"]], template: function SvgTestComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Quick test with svg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "small");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "app-blocks", 0);
        \u0275\u0275listener("rectClicked", function SvgTestComponent_Template_app_blocks_rectClicked_5_listener($event) {
          return ctx.bit($event);
        })("cellCount", function SvgTestComponent_Template_app_blocks_cellCount_5_listener($event) {
          return ctx.cellCount = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "button", 1);
        \u0275\u0275listener("click", function SvgTestComponent_Template_button_click_7_listener() {
          return ctx.reColor();
        });
        \u0275\u0275text(8, "ReColor");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("this image contains over ", \u0275\u0275pipeBind1(4, 2, ctx.cellCount), " elements");
        \u0275\u0275advance(2);
        \u0275\u0275property("recolor", ctx.count);
      }
    }, dependencies: [BlocksComponent, DecimalPipe], styles: ["\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n}\nhr[_ngcontent-%COMP%] {\n  margin-inline: 0;\n  margin-block: 0.25rem;\n}\napp-blocks[_ngcontent-%COMP%] {\n  inline-size: min(77vw, 77vh);\n  block-size: min(77vw, 77vh);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgTestComponent, [{
    type: Component,
    args: [{ selector: "app-svg-test", changeDetection: ChangeDetectionStrategy.OnPush, imports: [BlocksComponent, DecimalPipe], template: '<h1>Quick test with svg</h1>\n<small>this image contains over {{ cellCount | number }} elements</small>\n\n<app-blocks\n  [recolor]="count"\n  (rectClicked)="bit($event)"\n  (cellCount)="cellCount = $event"\n></app-blocks>\n<hr />\n<button (click)="reColor()">ReColor</button>\n\n<style>\n  h1 {\n    margin: 0;\n    font-size: 1.2rem;\n  }\n\n  hr {\n    margin-inline: 0;\n    margin-block: 0.25rem;\n  }\n\n  app-blocks {\n    inline-size: min(77vw, 77vh);\n    block-size: min(77vw, 77vh);\n  }\n</style>\n', styles: ["/* angular:styles/component:css;1807679cdbc4809f56dd24e686d608b8f3d455546f906f4ece05a1f50fc12846;/home/runner/work/Samples/Samples/src/app/svg-test/svg-test.component.html */\nh1 {\n  margin: 0;\n  font-size: 1.2rem;\n}\nhr {\n  margin-inline: 0;\n  margin-block: 0.25rem;\n}\napp-blocks {\n  inline-size: min(77vw, 77vh);\n  block-size: min(77vw, 77vh);\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SvgTestComponent, { className: "SvgTestComponent", filePath: "src/app/svg-test/svg-test.component.ts", lineNumber: 13 });
})();
export {
  SvgTestComponent
};
