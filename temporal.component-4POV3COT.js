import {
  FormField,
  form
} from "./chunk-BYJ4BFQR.js";
import "./chunk-RUC3MGHW.js";
import "./chunk-NMBS7RAC.js";
import "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  afterRenderEffect,
  computed,
  linkedSignal,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LHOZ36SL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/temporal/temporal.component.ts
function TemporalComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", region_r1, " ");
  }
}
function TemporalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r2 = ctx.$implicit;
    \u0275\u0275property("value", city_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", city_r2, " ");
  }
}
function TemporalComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.time());
  }
}
var TemporalComponent = class _TemporalComponent {
  constructor() {
    this.temporal = injectTemporal();
    this.now = signal(this.temporal().Now, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "now" } : (
      /* istanbul ignore next */
      {}
    )), { equal: () => false }));
    this.timeZones = timeZones();
    this.browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/");
    this.table = signal(
      [
        {
          region: this.browserTimeZone[0],
          city: this.browserTimeZone[1],
          time: computed(() => this.now().plainTimeISO(this.browserTimeZone.join("/")))
        }
      ],
      ...ngDevMode ? [{ debugName: "table" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.regions = Object.keys(this.timeZones);
    this.region = linkedSignal(
      () => this.browserTimeZone[0],
      ...ngDevMode ? [{ debugName: "region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cities = computed(
      () => this.timeZones[this.region()].map(({ city }) => city),
      ...ngDevMode ? [{ debugName: "cities" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.city = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "city" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.region,
      computation: (region, previous) => {
        const cities = untracked(this.cities);
        if (region !== previous?.source) {
          if (region === this.browserTimeZone[0]) {
            return this.browserTimeZone[1];
          } else if (cities.length > 0) {
            return cities[0];
          }
        }
        return previous?.value || cities[0] || "";
      }
    }));
    this.model = linkedSignal(
      () => ({
        region: this.region(),
        city: this.city()
      }),
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model);
    this._ = afterRenderEffect((clean) => {
      const int = setInterval(() => {
        this.now.set(this.temporal().Now);
      }, 1e3);
      clean(() => clearInterval(int));
      console.log(Intl.getCanonicalLocales("NL-NL"));
    });
    this.add = () => {
      const region = this.form.region().value();
      const city = this.form.city().value();
      this.table.update((table) => [
        ...table,
        {
          region,
          city,
          time: computed(() => this.now().plainTimeISO(`${region}/${city}`)),
          date: computed(() => this.now().plainDateISO(`${region}/${city}`))
        }
      ]);
    };
  }
  static {
    this.\u0275fac = function TemporalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemporalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemporalComponent, selectors: [["se-temporal"]], decls: 31, vars: 2, consts: [[3, "change", "formField"], [3, "value"], ["list", "cities", 3, "formField"], ["id", "cities"], ["type", "button", 3, "click"]], template: function TemporalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "H1");
        \u0275\u0275text(1, "Playing with Temporal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form")(3, "label")(4, "span");
        \u0275\u0275text(5, "Region");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "select", 0);
        \u0275\u0275listener("change", function TemporalComponent_Template_select_change_6_listener() {
          return ctx.region.set(ctx.form.region().value());
        });
        \u0275\u0275repeaterCreate(7, TemporalComponent_For_8_Template, 2, 2, "option", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "label")(10, "span");
        \u0275\u0275text(11, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 2);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "datalist", 3);
        \u0275\u0275repeaterCreate(14, TemporalComponent_For_15_Template, 2, 2, "option", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "label")(17, "button", 4);
        \u0275\u0275listener("click", function TemporalComponent_Template_button_click_17_listener() {
          return ctx.add();
        });
        \u0275\u0275text(18, "Add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "table")(20, "thead")(21, "tr")(22, "th");
        \u0275\u0275text(23, "Region");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Current Time");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "tbody");
        \u0275\u0275repeaterCreate(29, TemporalComponent_For_30_Template, 7, 3, "tr", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.region);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.regions);
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.city);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.cities());
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.table());
      }
    }, dependencies: [FormField], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemporalComponent, [{
    type: Component,
    args: [{ selector: "se-temporal", imports: [FormField], template: `
    <H1>Playing with Temporal</H1>
    <form>
      <label>
        <span>Region</span>
        <select
          [formField]="form.region"
          (change)="region.set(form.region().value())"
        >
          @for (region of regions; track region) {
            <option [value]="region">
              {{ region }}
            </option>
          }
        </select></label
      >
      <label>
        <span>City</span>
        <input list="cities" [formField]="form.city" />
        <datalist id="cities">
          @for (city of cities(); track city) {
            <option [value]="city">
              {{ city }}
            </option>
          }
        </datalist>
      </label>
      <label><button type="button" (click)="add()">Add</button></label>
    </form>
    <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>City</th>
          <th>Current Time</th>
        </tr>
      </thead>
      <tbody>
        @for (row of table(); track row) {
          <tr>
            <td>{{ row.region }}</td>
            <td>{{ row.city }}</td>
            <td>{{ row.time() }}</td>
          </tr>
        }
      </tbody>
    </table>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/temporal/temporal.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemporalComponent, { className: "TemporalComponent", filePath: "src/app/temporal/temporal.component.ts", lineNumber: 66 });
})();
function injectTemporal() {
  const res = signal(
    {},
    ...ngDevMode ? [{ debugName: "res" }] : (
      /* istanbul ignore next */
      []
    )
  );
  if (typeof globalThis.Temporal !== "undefined") {
    res.set(globalThis.Temporal);
  } else {
    console.log("Loading Temporal polyfill...");
    import("./temporal-polyfill-IDRFZ4F7.js").then((mod) => {
      res.set(mod.Temporal);
      globalThis.Temporal = mod.Temporal;
    });
  }
  return res;
}
var timeZones = () => {
  const zones = Intl.supportedValuesOf("timeZone").map((timeZone) => {
    const parts = timeZone.split("/");
    return { timeZone, region: parts[0], city: parts[1] };
  });
  const groupedZones = Map.groupBy(zones, (zone) => zone.region).entries();
  return Object.fromEntries(groupedZones);
};
export {
  TemporalComponent
};
