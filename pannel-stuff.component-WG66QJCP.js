import {
  AsyncPipe,
  DatePipe
} from "./chunk-V6OJJHGF.js";
import "./chunk-2KCW2NJN.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  inject,
  interval,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// src/app/pannel-stuff/pannel/pannel.component.ts
var _c0 = ["*"];
var PannelComponent = class _PannelComponent {
  constructor() {
    this.elmRef = inject(ElementRef);
    this.shadowRoot = this.elmRef.nativeElement?.shadowRoot;
  }
  static {
    this.\u0275fac = function PannelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PannelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PannelComponent, selectors: [["app-pannel"]], ngContentSelectors: _c0, decls: 5, vars: 0, consts: [[1, "pannel"]], template: function PannelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "header");
        \u0275\u0275domElementStart(2, "main");
        \u0275\u0275projection(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(4, "footer");
        \u0275\u0275domElementEnd();
      }
    }, styles: ['/* angular:styles/component:css;b310ac55414583931afa68b9475ac66d769186625e166fff89e52a175959f2b1;/home/runner/work/Samples/Samples/src/app/pannel-stuff/pannel/pannel.component.html */\n.pannel {\n  display: grid;\n  grid-template-rows: 0 1fr 0;\n  position: relative;\n  width: 40vw;\n  background-color: dimgray;\n  height: 200px;\n  border-radius: 10px;\n  padding: 10px;\n  margin-top: 5px;\n}\n.pannel.footer {\n  grid-template-rows: 0 1fr 40px;\n}\n.pannel.header {\n  grid-template-rows: 40px 1fr 0;\n}\n.pannel.header.footer {\n  grid-template-rows: 40px 1fr 40px;\n}\n.pannel.header > header,\n.pannel.footer > footer {\n  border-top: 1px solid white;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n}\n#closeButton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n  width: 20px;\n  height: 20px;\n  opacity: 0.3;\n}\n#closeButton:hover {\n  opacity: 1;\n}\n#closeButton:before,\n#closeButton:after {\n  position: absolute;\n  left: 15px;\n  content: " ";\n  height: 20px;\n  width: 2px;\n  background-color: rgb(243, 238, 238);\n}\n#closeButton:before {\n  transform: rotate(45deg);\n}\n#closeButton:after {\n  transform: rotate(-45deg);\n}\n'], encapsulation: 3 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PannelComponent, [{
    type: Component,
    args: [{ selector: "app-pannel", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.ShadowDom, template: `<div class="pannel">
  <header></header>
  <main>
    <ng-content></ng-content>
  </main>
  <footer></footer>
</div>
<style>
  .pannel {
    display: grid;
    grid-template-rows: 0 1fr 0;
    position: relative;
    width: 40vw;
    background-color: dimgray;
    height: 200px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 5px;
  }

  .pannel.footer {
    grid-template-rows: 0 1fr 40px;
  }
  .pannel.header {
    grid-template-rows: 40px 1fr 0;
  }
  .pannel.header.footer {
    grid-template-rows: 40px 1fr 40px;
  }

  .pannel.header > header,
  .pannel.footer > footer {
    border-top: 1px solid white;
    display: grid;
    align-content: center;
    justify-content: center;
  }

  /** css trickery to create a cross, removes all style from the button first.*/
  #closeButton {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    position: absolute;
    right: 10px;
    top: -5px;
    width: 20px;
    height: 20px;
    opacity: 0.3;
  }
  #closeButton:hover {
    opacity: 1;
  }
  #closeButton:before,
  #closeButton:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: rgb(243, 238, 238);
  }
  #closeButton:before {
    transform: rotate(45deg);
  }
  #closeButton:after {
    transform: rotate(-45deg);
  }
</style>
`, styles: ['/* angular:styles/component:css;b310ac55414583931afa68b9475ac66d769186625e166fff89e52a175959f2b1;/home/runner/work/Samples/Samples/src/app/pannel-stuff/pannel/pannel.component.html */\n.pannel {\n  display: grid;\n  grid-template-rows: 0 1fr 0;\n  position: relative;\n  width: 40vw;\n  background-color: dimgray;\n  height: 200px;\n  border-radius: 10px;\n  padding: 10px;\n  margin-top: 5px;\n}\n.pannel.footer {\n  grid-template-rows: 0 1fr 40px;\n}\n.pannel.header {\n  grid-template-rows: 40px 1fr 0;\n}\n.pannel.header.footer {\n  grid-template-rows: 40px 1fr 40px;\n}\n.pannel.header > header,\n.pannel.footer > footer {\n  border-top: 1px solid white;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n}\n#closeButton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n  width: 20px;\n  height: 20px;\n  opacity: 0.3;\n}\n#closeButton:hover {\n  opacity: 1;\n}\n#closeButton:before,\n#closeButton:after {\n  position: absolute;\n  left: 15px;\n  content: " ";\n  height: 20px;\n  width: 2px;\n  background-color: rgb(243, 238, 238);\n}\n#closeButton:before {\n  transform: rotate(45deg);\n}\n#closeButton:after {\n  transform: rotate(-45deg);\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PannelComponent, { className: "PannelComponent", filePath: "src/app/pannel-stuff/pannel/pannel.component.ts", lineNumber: 21 });
})();
var PannelCloseDirective = class _PannelCloseDirective {
  constructor() {
    this.pannel = inject(PannelComponent, { host: true });
    this.root = this.pannel.shadowRoot;
    this.close = new EventEmitter();
  }
  ngOnInit() {
    if (typeof document === "undefined")
      return;
    if (this.root) {
      const pannel = this.root.querySelector(".pannel");
      const main = this.root.querySelector("main");
      const closeButton = document.createElement("button");
      const closeIt = () => {
        pannel.style.display = "none";
        this.close.emit();
        closeButton.removeEventListener("click", closeIt);
      };
      closeButton.id = "closeButton";
      closeButton.addEventListener("click", closeIt);
      main.appendChild(closeButton);
    }
  }
  static {
    this.\u0275fac = function PannelCloseDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PannelCloseDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PannelCloseDirective, selectors: [["app-pannel", "close", ""]], outputs: { close: "close" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PannelCloseDirective, [{
    type: Directive,
    args: [{
      selector: "app-pannel[close]"
    }]
  }], null, { close: [{
    type: Output
  }] });
})();
var PannelFooterDirective = class _PannelFooterDirective {
  constructor() {
    this.panel = inject(PannelComponent, { host: true });
    this.root = this.panel.shadowRoot;
    this.footer = new EventEmitter();
  }
  set footerContent(x) {
    if (typeof x === "string") {
      if (typeof document === "undefined")
        return;
      const footer = this.root.querySelector("footer");
      footer.innerText = x;
    }
  }
  ngOnInit() {
    if (typeof document === "undefined")
      return;
    if (this.root) {
      const pannel = this.root.querySelector(".pannel");
      pannel.classList.add("footer");
    }
  }
  static {
    this.\u0275fac = function PannelFooterDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PannelFooterDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PannelFooterDirective, selectors: [["app-pannel", "footer", ""]], inputs: { footerContent: [0, "footer", "footerContent"] }, outputs: { footer: "footer" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PannelFooterDirective, [{
    type: Directive,
    args: [{
      selector: "app-pannel[footer]"
    }]
  }], null, { footerContent: [{
    type: Input,
    args: ["footer"]
  }], footer: [{
    type: Output
  }] });
})();

// src/app/pannel-stuff/pannel-stuff.component.ts
var PannelStuffComponent = class _PannelStuffComponent {
  constructor() {
    this.time$ = interval(1e3).pipe(map(() => /* @__PURE__ */ new Date()));
  }
  ngOnInit() {
  }
  alert(s) {
    alert(s);
  }
  static {
    this.\u0275fac = function PannelStuffComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PannelStuffComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PannelStuffComponent, selectors: [["app-pannel-stuff"]], decls: 19, vars: 6, consts: [[3, "close"], [3, "close", "footer"]], template: function PannelStuffComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Pannel composition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "app-pannel")(3, "h1");
        \u0275\u0275text(4, "Basic no frills pannel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "You might want to add some styling to the base pannel.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "app-pannel", 0);
        \u0275\u0275listener("close", function PannelStuffComponent_Template_app_pannel_close_7_listener() {
          return ctx.alert("bye");
        });
        \u0275\u0275elementStart(8, "h1");
        \u0275\u0275text(9, "Closable pannel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11, "the directive adds a close emitter, so you can react on close.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "app-pannel", 1);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275pipe(14, "date");
        \u0275\u0275listener("close", function PannelStuffComponent_Template_app_pannel_close_12_listener() {
          return ctx.alert("bye");
        });
        \u0275\u0275elementStart(15, "h1");
        \u0275\u0275text(16, "Closable pannel with footer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, "the directive adds a close emitter, so you can react on close.");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("footer", \u0275\u0275pipeBind2(14, 3, \u0275\u0275pipeBind1(13, 1, ctx.time$), "HH:mm:ss"));
      }
    }, dependencies: [
      PannelComponent,
      PannelCloseDirective,
      PannelFooterDirective,
      AsyncPipe,
      DatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PannelStuffComponent, [{
    type: Component,
    args: [{ selector: "app-pannel-stuff", changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      PannelComponent,
      PannelCloseDirective,
      PannelFooterDirective,
      AsyncPipe,
      DatePipe
    ], template: `<h1>Pannel composition</h1>

<app-pannel>
  <h1>Basic no frills pannel</h1>
  <p>You might want to add some styling to the base pannel.</p>
</app-pannel>

<app-pannel (close)="alert('bye')">
  <h1>Closable pannel</h1>
  <p>the directive adds a close emitter, so you can react on close.</p>
</app-pannel>

<app-pannel (close)="alert('bye')" [footer]="time$ | async | date: 'HH:mm:ss'">
  <h1>Closable pannel with footer</h1>
  <p>the directive adds a close emitter, so you can react on close.</p>
</app-pannel>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PannelStuffComponent, { className: "PannelStuffComponent", filePath: "src/app/pannel-stuff/pannel-stuff.component.ts", lineNumber: 26 });
})();
export {
  PannelStuffComponent
};
