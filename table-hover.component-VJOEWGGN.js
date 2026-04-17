import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵinterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// src/app/table-hover/table-hover.component.ts
function TableHoverComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const $index_r1 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate($index_r1 + 1);
  }
}
function TableHoverComponent_For_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const cell_r2 = ctx.$implicit;
    \u0275\u0275domProperty("title", \u0275\u0275interpolate(cell_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r2);
  }
}
function TableHoverComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, TableHoverComponent_For_8_For_4_Template, 2, 3, "td", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3);
  }
}
var TableHoverComponent = class _TableHoverComponent {
  constructor() {
    this.table = Array.from({ length: 10 }, (_, i) => Array.from({ length: 10 }, (_2, j) => `${i + 1} x ${j + 1} = ${(i + 1) * (j + 1)}`));
  }
  static {
    this.\u0275fac = function TableHoverComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableHoverComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableHoverComponent, selectors: [["se-table-hover"]], decls: 9, vars: 0, consts: [[2, "--coll", "3"], [3, "title"]], template: function TableHoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Table Hover");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "table", 0)(3, "tr");
        \u0275\u0275domElement(4, "th");
        \u0275\u0275repeaterCreate(5, TableHoverComponent_For_6_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275domElementEnd();
        \u0275\u0275repeaterCreate(7, TableHoverComponent_For_8_Template, 5, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.table[0]);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.table);
      }
    }, styles: ['\n*[_ngcontent-%COMP%] {\n  all: unset;\n}\n@property --highlighted { syntax: "<color>"; initial-value: teal; }\n@property --coll { syntax: "<integer>"; initial-value: 3; }\ntable[_ngcontent-%COMP%] {\n  display: table;\n}\ntr[_ngcontent-%COMP%] {\n  display: table-row;\n}\nth[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: larger;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 0.5em;\n  border: 1px solid;\n}\n[_nghost-%COMP%] {\n  display: block;\n  --highlighted: hsl(180, 100%, 25%);\n  --highlighted1: hsl(180, 100%, 40%);\n  --coll: 3 color: rgb(208, 226, 226);\n}\nh1[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 3rem;\n  padding-inline-end: 0.5rem;\n}\ntd[_ngcontent-%COMP%]:has(~ td:hover) {\n  background: var(--highlighted);\n}\ntd[_ngcontent-%COMP%]:hover {\n  background: var(--highlighted1);\n  color: white;\n  font-weight: bolder;\n}\n@container style(--coll: 1) {\n  table[_ngcontent-%COMP%]:has(td:nth-of-type(1):hover)   tr[_ngcontent-%COMP%]:not(:first-of-type):has(~ tr:hover)   td[_ngcontent-%COMP%]:nth-of-type(1) {\n    background: var(--highlighted);\n  }\n}\n@container style(--coll: 2) {\n  table[_ngcontent-%COMP%]:has(td:nth-of-type(2):hover)   tr[_ngcontent-%COMP%]:not(:first-of-type):has(~ tr:hover)   td[_ngcontent-%COMP%]:nth-of-type(2) {\n    background: var(--highlighted);\n  }\n}\n@container style(--coll: 3) {\n  table[_ngcontent-%COMP%]:has(td:nth-of-type(3):hover)   tr[_ngcontent-%COMP%]:not(:first-of-type):has(~ tr:hover)   td[_ngcontent-%COMP%]:nth-of-type(3) {\n    background: var(--highlighted);\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHoverComponent, [{
    type: Component,
    args: [{ selector: "se-table-hover", imports: [], template: `
    <h1>Table Hover</h1>
    <table style="--coll:3">
      <tr>
        <th></th>
        @for (i of table[0]; track i) {
          <th>{{ $index + 1 }}</th>
        }
      </tr>
      @for (row of table; track row) {
        <tr>
          <th>{{ $index + 1 }}</th>
          @for (cell of row; track cell) {
            <td title="{{ cell }}">{{ cell }}</td>
          }
        </tr>
      }
    </table>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/table-hover/table-hover.component.css */\n* {\n  all: unset;\n}\n@property --highlighted { syntax: "<color>"; initial-value: teal; }\n@property --coll { syntax: "<integer>"; initial-value: 3; }\ntable {\n  display: table;\n}\ntr {\n  display: table-row;\n}\nth {\n  font-weight: bolder;\n  font-size: larger;\n}\nth,\ntd {\n  display: table-cell;\n  padding: 0.5em;\n  border: 1px solid;\n}\n:host {\n  display: block;\n  --highlighted: hsl(180, 100%, 25%);\n  --highlighted1: hsl(180, 100%, 40%);\n  --coll: 3 color: rgb(208, 226, 226);\n}\nh1 {\n  display: block;\n  font-size: 3rem;\n  padding-inline-end: 0.5rem;\n}\ntd:has(~ td:hover) {\n  background: var(--highlighted);\n}\ntd:hover {\n  background: var(--highlighted1);\n  color: white;\n  font-weight: bolder;\n}\n@container style(--coll: 1) {\n  table:has(td:nth-of-type(1):hover) tr:not(:first-of-type):has(~ tr:hover) td:nth-of-type(1) {\n    background: var(--highlighted);\n  }\n}\n@container style(--coll: 2) {\n  table:has(td:nth-of-type(2):hover) tr:not(:first-of-type):has(~ tr:hover) td:nth-of-type(2) {\n    background: var(--highlighted);\n  }\n}\n@container style(--coll: 3) {\n  table:has(td:nth-of-type(3):hover) tr:not(:first-of-type):has(~ tr:hover) td:nth-of-type(3) {\n    background: var(--highlighted);\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableHoverComponent, { className: "TableHoverComponent", filePath: "src/app/table-hover/table-hover.component.ts", lineNumber: 28 });
})();
export {
  TableHoverComponent
};
