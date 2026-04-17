import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// src/app/grid-calender/day-cell/day-cell.component.ts
var DayCellComponent = class _DayCellComponent {
  constructor() {
    this.day = input.required(
      ...ngDevMode ? [{ debugName: "day" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function DayCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayCellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayCellComponent, selectors: [["se-day-cell"]], hostVars: 8, hostBindings: function DayCellComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mute", !ctx.day().isCurrentMonth)("special", ctx.day().isSpecial)("first", ctx.day().isFirstSelected)("last", ctx.day().isLastSelected);
      }
    }, inputs: { day: [1, "day"] }, decls: 1, vars: 1, template: function DayCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0);
      }
      if (rf & 2) {
        \u0275\u0275textInterpolate1(" ", ctx.day().day, " ");
      }
    }, styles: ["\n@layer se_calendar.day {\n  [_nghost-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  .mute[_nghost-%COMP%], \n   .mute[_nghost-%COMP%]:hover {\n    opacity: 0.3;\n    border-radius: 50%;\n    cursor: not-allowed;\n    background-color: inherit;\n    margin: inherit;\n    font-weight: inherit;\n    font-size: inherit;\n  }\n  [_nghost-%COMP%]:hover {\n    font-weight: bolder;\n    font-size: 1.2em;\n  }\n  .first[_nghost-%COMP%], \n   .last[_nghost-%COMP%] {\n    background-color: hsla(271, 93%, 11%, 0.8);\n  }\n  .first[_nghost-%COMP%], \n   .first[_nghost-%COMP%]:hover {\n    border-top-left-radius: 25%;\n    border-bottom-left-radius: 25%;\n    margin-right: -0.25rem;\n    border-right: 0;\n  }\n  .last[_nghost-%COMP%], \n   .last[_nghost-%COMP%]:hover {\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    border-left: 0;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayCellComponent, [{
    type: Component,
    args: [{ selector: "se-day-cell", imports: [], template: ` {{ day().day }} `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[class.mute]": "!day().isCurrentMonth",
      "[class.special]": "day().isSpecial",
      "[class.first]": "day().isFirstSelected",
      "[class.last]": "day().isLastSelected"
    }, styles: ["/* src/app/grid-calender/day-cell/day-cell.component.css */\n@layer se_calendar.day {\n  :host {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  :host.mute,\n  :host.mute:hover {\n    opacity: 0.3;\n    border-radius: 50%;\n    cursor: not-allowed;\n    background-color: inherit;\n    margin: inherit;\n    font-weight: inherit;\n    font-size: inherit;\n  }\n  :host:hover {\n    font-weight: bolder;\n    font-size: 1.2em;\n  }\n  :host.first,\n  :host.last {\n    background-color: hsla(271, 93%, 11%, 0.8);\n  }\n  :host.first,\n  :host.first:hover {\n    border-top-left-radius: 25%;\n    border-bottom-left-radius: 25%;\n    margin-right: -0.25rem;\n    border-right: 0;\n  }\n  :host.last,\n  :host.last:hover {\n    border-top-right-radius: 25%;\n    border-bottom-right-radius: 25%;\n    border-left: 0;\n  }\n}\n"] }]
  }], null, { day: [{ type: Input, args: [{ isSignal: true, alias: "day", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayCellComponent, { className: "DayCellComponent", filePath: "src/app/grid-calender/day-cell/day-cell.component.ts", lineNumber: 17 });
})();

// src/app/grid-calender/month/month.component.ts
var _forTrack0 = ($index, $item) => $item.date;
function MonthComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "se-day-cell", 1);
    \u0275\u0275listener("click", function MonthComponent_For_17_Template_se_day_cell_click_0_listener() {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(day_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    \u0275\u0275property("day", day_r2);
  }
}
var MonthComponent = class _MonthComponent {
  constructor() {
    this.date = input.required(
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.days = computed(
      () => createMonthArray(this.date()),
      ...ngDevMode ? [{ debugName: "days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.monthName = computed(
      () => {
        return this.days()[10].date.toLocaleString("default", { month: "long" });
      },
      ...ngDevMode ? [{ debugName: "monthName" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  select(day) {
    const days = this.days();
    if (day.isCurrentMonth === false) {
      return;
    }
    const first = days.find((day2) => day2.isFirstSelected);
    const last = days.find((day2) => day2.isLastSelected);
    console.log({ day, first, last });
    if (!first) {
      day.isFirstSelected = true;
      return;
    }
    if (!last) {
      day.isLastSelected = true;
      return;
    }
    if (first.date === day.date && last.date === day.date) {
      day.isFirstSelected = false;
      day.isLastSelected = false;
      return;
    }
    if (day.date < first.date) {
      first.isFirstSelected = false;
      day.isFirstSelected = true;
      return;
    }
    if (last) {
      last.isLastSelected = false;
    }
    day.isLastSelected = true;
  }
  static {
    this.\u0275fac = function MonthComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MonthComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MonthComponent, selectors: [["se-month"]], inputs: { date: [1, "date"] }, decls: 18, vars: 1, consts: [[3, "day"], [3, "click", "day"]], template: function MonthComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2");
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "span");
        \u0275\u0275text(3, "S");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "T");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "W");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "T");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "S");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(16, MonthComponent_For_17_Template, 1, 1, "se-day-cell", 0, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.monthName());
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.days());
      }
    }, dependencies: [DayCellComponent], styles: ["\n@layer se_calendar.month {\n  [_nghost-%COMP%] {\n    display: grid;\n    height: fit-content;\n    width: fit-content;\n    grid-template-columns: repeat(7, 40px);\n    grid-auto-rows: 40px;\n    gap: 0.25rem;\n  }\n  h2[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    text-align: center;\n    padding: 7px;\n    margin: 0;\n  }\n  se-day-cell[_ngcontent-%COMP%] {\n    border: 1px solid black;\n  }\n  span[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n    font-weight: bolder;\n    padding: 0;\n  }\n  .first[_ngcontent-%COMP%]    ~ [_ngcontent-%COMP%]:has(~ .last) {\n    background-color: hsla(271, 93%, 11%, 0.45);\n    margin-right: -0.25rem;\n    border-left: 0;\n    border-right: 0;\n  }\n  se-day-cell[_ngcontent-%COMP%]:hover {\n    background-color: hsl(49, 61%, 45%);\n  }\n  se-day-cell[_ngcontent-%COMP%]:hover:were(:has(~ .first)) {\n    border-radius: 25% 0 0 25%;\n  }\n  se-day-cell[_ngcontent-%COMP%]:hover    ~ [_ngcontent-%COMP%]:has(~ .first) {\n    background-color: hsl(49, 61%, 45%);\n    border-left: 0;\n    border-right: 0;\n    margin-right: -0.5rem;\n  }\n  se-day-cell[_ngcontent-%COMP%]:hover:has(~ .first) {\n    background-color: hsla(49, 61%, 45%, 0.768);\n    border-right: 0;\n    border-radius: 25% 0 0 25%;\n    margin-right: -0.5rem;\n  }\n  .last[_ngcontent-%COMP%]    ~ [_ngcontent-%COMP%]:has(~ se-day-cell:hover) {\n    background-color: hsl(49, 61%, 45%);\n    border-left: 0;\n    border-right: 0;\n    margin-left: -0.5rem;\n  }\n  .last[_ngcontent-%COMP%]    ~ se-day-cell[_ngcontent-%COMP%]:hover {\n    background-color: hsla(49, 61%, 45%, 0.768);\n    border-left: 0;\n    border-radius: 0 25% 25% 0;\n    margin-left: -0.5rem;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthComponent, [{
    type: Component,
    args: [{ selector: "se-month", imports: [DayCellComponent], template: `
    <h2>{{ monthName() }}</h2>
    <span>S</span>
    <span>M</span>
    <span>T</span>
    <span>W</span>
    <span>T</span>
    <span>F</span>
    <span>S</span>
    @for (day of days(); track day.date) {
      <se-day-cell [day]="day" (click)="select(day)"></se-day-cell>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/grid-calender/month/month.component.css */\n@layer se_calendar.month {\n  :host {\n    display: grid;\n    height: fit-content;\n    width: fit-content;\n    grid-template-columns: repeat(7, 40px);\n    grid-auto-rows: 40px;\n    gap: 0.25rem;\n  }\n  h2 {\n    grid-column: 1 / -1;\n    text-align: center;\n    padding: 7px;\n    margin: 0;\n  }\n  se-day-cell {\n    border: 1px solid black;\n  }\n  span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n    font-weight: bolder;\n    padding: 0;\n  }\n  .first ~ :has(~ .last) {\n    background-color: hsla(271, 93%, 11%, 0.45);\n    margin-right: -0.25rem;\n    border-left: 0;\n    border-right: 0;\n  }\n  se-day-cell:hover {\n    background-color: hsl(49, 61%, 45%);\n  }\n  se-day-cell:hover:were(:has(~ .first)) {\n    border-radius: 25% 0 0 25%;\n  }\n  se-day-cell:hover ~ :has(~ .first) {\n    background-color: hsl(49, 61%, 45%);\n    border-left: 0;\n    border-right: 0;\n    margin-right: -0.5rem;\n  }\n  se-day-cell:hover:has(~ .first) {\n    background-color: hsla(49, 61%, 45%, 0.768);\n    border-right: 0;\n    border-radius: 25% 0 0 25%;\n    margin-right: -0.5rem;\n  }\n  .last ~ :has(~ se-day-cell:hover) {\n    background-color: hsl(49, 61%, 45%);\n    border-left: 0;\n    border-right: 0;\n    margin-left: -0.5rem;\n  }\n  .last ~ se-day-cell:hover {\n    background-color: hsla(49, 61%, 45%, 0.768);\n    border-left: 0;\n    border-radius: 0 25% 25% 0;\n    margin-left: -0.5rem;\n  }\n}\n"] }]
  }], null, { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MonthComponent, { className: "MonthComponent", filePath: "src/app/grid-calender/month/month.component.ts", lineNumber: 30 });
})();
function createMonthArray(date) {
  const day = 24 * 60 * 60 * 1e3;
  const nextDay = (date2) => new Date(date2.getTime() + day);
  const dateFromDay = (day2) => new Date(date.getFullYear(), date.getMonth(), day2);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const dayArray = [];
  for (let i = 0; i < firstDay.getDay(); i++) {
    const prevDate = date.getTime() - (firstDay.getDay() - i) * day;
    dayArray.push(createDay(new Date(prevDate), false));
  }
  for (let i = 1; i <= lastDay.getDate(); i++) {
    dayArray.push(createDay(dateFromDay(i)));
  }
  let next = nextDay(lastDay);
  while (next.getDay() !== 0) {
    dayArray.push(createDay(next, false));
    next = nextDay(next);
  }
  return dayArray;
}
function createDay(date, isCurrentMonth = true) {
  return {
    date,
    day: date.getDate(),
    isCurrentMonth,
    isFirstSelected: false,
    isLastSelected: false,
    isSpecial: false
  };
}

// src/app/grid-calender/grid-calender.component.ts
function GridCalenderComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "se-month", 0);
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("date", m_r1);
  }
}
var GridCalenderComponent = class _GridCalenderComponent {
  constructor() {
    this.date = /* @__PURE__ */ new Date("2026-06-01");
    this.months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => new Date(this.date.getFullYear(), month, 1));
  }
  static {
    this.\u0275fac = function GridCalenderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridCalenderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridCalenderComponent, selectors: [["se-grid-calender"]], decls: 5, vars: 0, consts: [[3, "date"]], template: function GridCalenderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Grid Calender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div");
        \u0275\u0275repeaterCreate(3, GridCalenderComponent_For_4_Template, 1, 1, "se-month", 0, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.months);
      }
    }, dependencies: [MonthComponent], styles: ["\n@layer se_calendar.overview, se_calendar.month, se_calendar.day;\n@layer se_calendar.overview {\n  [_nghost-%COMP%] {\n    display: block;\n  }\n  div[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 352px);\n    grid-template-rows: auto 1fr;\n    gap: 2rem;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridCalenderComponent, [{
    type: Component,
    args: [{ selector: "se-grid-calender", imports: [MonthComponent], template: `<h1>Grid Calender</h1>
    <div>
      @for (m of months; track m) {
        <se-month [date]="m"></se-month>
      }
    </div> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/grid-calender/grid-calender.component.css */\n@layer se_calendar.overview, se_calendar.month, se_calendar.day;\n@layer se_calendar.overview {\n  :host {\n    display: block;\n  }\n  div {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 352px);\n    grid-template-rows: auto 1fr;\n    gap: 2rem;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridCalenderComponent, { className: "GridCalenderComponent", filePath: "src/app/grid-calender/grid-calender.component.ts", lineNumber: 17 });
})();
export {
  GridCalenderComponent
};
