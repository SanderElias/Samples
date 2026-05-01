import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/html-summary/html-summary.component.ts
var HtmlSummaryComponent = class _HtmlSummaryComponent {
  static {
    this.\u0275fac = function HtmlSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HtmlSummaryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HtmlSummaryComponent, selectors: [["se-html-summary"]], decls: 29, vars: 0, consts: [["type", "radio", "name", "sel"], ["type", "radio", "name", "sel", "checked", ""]], template: function HtmlSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Experiments with summary component");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(2, "hr");
        \u0275\u0275domElementStart(3, "h3");
        \u0275\u0275text(4, "Base case");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "details")(6, "summary")(7, "label");
        \u0275\u0275domElement(8, "input", 0);
        \u0275\u0275text(9, "click to expand");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(10, "main")(11, "h4");
        \u0275\u0275text(12, "test");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(13, "details")(14, "summary")(15, "label");
        \u0275\u0275domElement(16, "input", 1);
        \u0275\u0275text(17, "click to expand");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(18, "main")(19, "h4");
        \u0275\u0275text(20, "test");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(21, "details")(22, "summary")(23, "label");
        \u0275\u0275domElement(24, "input", 0);
        \u0275\u0275text(25, "click to expand");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(26, "main")(27, "h4");
        \u0275\u0275text(28, "test");
        \u0275\u0275domElementEnd()()();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}", "\ndetails[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 1rem;\n  width: 15rem;\n}\ndetails[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:has(input:checked) {\n  background: #ccc;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlSummaryComponent, [{
    type: Component,
    args: [{ selector: "se-html-summary", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1>Experiments with summary component</h1>

<hr />
<h3>Base case</h3>

<details>
  <summary>
    <label><input type="radio" name="sel" />click to expand</label>
  </summary>
  <main>
    <h4>test</h4>
  </main>
</details>
<details>
  <summary>
    <label><input type="radio" name="sel" checked />click to expand</label>
  </summary>
  <main>
    <h4>test</h4>
  </main>
</details>
<details>
  <summary>
    <label><input type="radio" name="sel" />click to expand</label>
  </summary>
  <main>
    <h4>test</h4>
  </main>
</details>

<style>
  details {
    border: 1px solid black;
    padding: 1rem;
    width: 15rem;
  }

  details :has(input:checked) {
    background: #ccc;
  }

  input[type='radio'] {
    display: none;
  }
</style>
`, styles: ["/* src/app/html-summary/html-summary.component.css */\n:host {\n  display: block;\n}\n", "/* angular:styles/component:css;dc6e424d6339eb48421ec49100fdf368113a815d25241a555242991be93d33a0;/home/runner/work/Samples/Samples/src/app/html-summary/html-summary.component.html */\ndetails {\n  border: 1px solid black;\n  padding: 1rem;\n  width: 15rem;\n}\ndetails :has(input:checked) {\n  background: #ccc;\n}\ninput[type=radio] {\n  display: none;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HtmlSummaryComponent, { className: "HtmlSummaryComponent", filePath: "src/app/html-summary/html-summary.component.ts", lineNumber: 10 });
})();
export {
  HtmlSummaryComponent
};
