import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injectable,
  delay,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/html-load/bogus-load.service.ts
var BogusLoadService = class _BogusLoadService {
  constructor() {
  }
  /**
   * Normally you use some async loaded,
   * here I just mimic that by returning an
   * delayed observable
   */
  load(url) {
    const html = `
    <h1> loaded from ${url}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;
    return of(html).pipe(delay(1e3));
  }
  static {
    this.\u0275fac = function BogusLoadService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BogusLoadService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BogusLoadService, factory: _BogusLoadService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BogusLoadService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/html-load/htmlload/htmlload.component.ts
var HtmlloadComponent = class _HtmlloadComponent {
  constructor() {
    this.html = inject(BogusLoadService);
    this.elm = inject(ElementRef).nativeElement;
    this.sub = this.html.load("Some url provided").subscribe((html) => {
      if (typeof document === "undefined")
        return;
      const frag = document.createRange().createContextualFragment(html);
      this.elm.innerHTML = "";
      this.elm.appendChild(frag);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  static {
    this.\u0275fac = function HtmlloadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HtmlloadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HtmlloadComponent, selectors: [["app-htmlload"]], decls: 2, vars: 0, template: function HtmlloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "Loading");
        \u0275\u0275domElementEnd();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlloadComponent, [{
    type: Component,
    args: [{ selector: "app-htmlload", changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>Loading</p>\n", styles: ["/* angular:styles/component:css;7f43ff1825ad05d68e14cc46aa4157d1978629e507df9ccdf9f54268a878a284;/home/runner/work/Samples/Samples/src/app/html-load/htmlload/htmlload.component.ts */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HtmlloadComponent, { className: "HtmlloadComponent", filePath: "src/app/html-load/htmlload/htmlload.component.ts", lineNumber: 23 });
})();
export {
  HtmlloadComponent
};
