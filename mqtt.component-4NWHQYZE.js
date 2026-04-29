import {
  AuthenticadedUserOnlyComponent
} from "./chunk-ZDQVOTNZ.js";
import {
  GaugeComponent,
  StackedPerComponent
} from "./chunk-D456A2QH.js";
import {
  FormField,
  FormRoot,
  form
} from "./chunk-MCIT5UBJ.js";
import {
  persistentSignal
} from "./chunk-ICECQ5XE.js";
import {
  MqttDeviceSettingsService,
  ZigbeeService,
  undefinedWhenEmpty
} from "./chunk-POLD3GFA.js";
import "./chunk-OQL45LK2.js";
import "./chunk-VXMY7OGO.js";
import "./chunk-M2H64NNW.js";
import "./chunk-V5IPUR26.js";
import {
  toObservable,
  toSignal
} from "./chunk-KQ7WRSUA.js";
import "./chunk-X4UDGVAN.js";
import "./chunk-G7MDJQAV.js";
import "./chunk-XUVHIZKL.js";
import "./chunk-CL5T3IPD.js";
import {
  debouncedComputed,
  deepEqual,
  proxySignal
} from "./chunk-6PJN4QOU.js";
import {
  httpResource
} from "./chunk-UNRJB5KN.js";
import "./chunk-4UOFC3SS.js";
import "./chunk-TWVYKLAR.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  Input,
  Output,
  ViewChild,
  afterNextRender,
  afterRenderEffect,
  computed,
  filter,
  inject,
  input,
  interval,
  linkedSignal,
  map,
  model,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeWhile,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-CYK2LKQE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/mqtt/zigbee-prefixes.types.ts
var zigbeePrefixes = ["e&m", "s&m", "zaak", "kamp", "Alles"];

// src/app/mqtt/mqtt-settings/mqtt-settings.component.ts
function MqttSettingsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 2);
    \u0275\u0275listener("change", function MqttSettingsComponent_For_5_Template_input_change_1_listener() {
      const pf_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePrefixSelection(pf_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pf_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedPrefixes().includes(pf_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pf_r2 ? pf_r2 : "Alles", " ");
  }
}
var MqttSettingsComponent = class _MqttSettingsComponent {
  constructor() {
    this.selectedPrefixes = model.required(
      ...ngDevMode ? [{ debugName: "selectedPrefixes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.powerUsage = input.required(
      ...ngDevMode ? [{ debugName: "powerUsage" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zigbeePrefixes = zigbeePrefixes;
    this.togglePrefixSelection = (prefix) => {
      this.selectedPrefixes.update((current) => current.includes(prefix) ? current.filter((p) => p !== prefix) : [...current, prefix]);
    };
  }
  static {
    this.\u0275fac = function MqttSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MqttSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MqttSettingsComponent, selectors: [["se-mqtt-settings"]], inputs: { selectedPrefixes: [1, "selectedPrefixes"], powerUsage: [1, "powerUsage"] }, outputs: { selectedPrefixes: "selectedPrefixesChange" }, decls: 7, vars: 1, consts: [[1, "zigbee-prefixes"], [3, "data"], ["type", "checkbox", 3, "change", "checked"]], template: function MqttSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "details")(1, "summary");
        \u0275\u0275text(2, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 0);
        \u0275\u0275repeaterCreate(4, MqttSettingsComponent_For_5_Template, 3, 2, "label", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "se-stacked-per", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.zigbeePrefixes);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.powerUsage());
      }
    }, dependencies: [StackedPerComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\ndiv.zigbee-prefixes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));\n  gap: 0.5rem;\n  padding-block: 0.5rem;\n}\ndiv.zigbee-prefixes[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 1rem;\n  overflow: auto;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MqttSettingsComponent, [{
    type: Component,
    args: [{ selector: "se-mqtt-settings", changeDetection: ChangeDetectionStrategy.OnPush, imports: [StackedPerComponent], template: `<details>
  <summary>Settings</summary>
  <div class="zigbee-prefixes">
    @for (pf of zigbeePrefixes; track $index) {
      <label>
        <input
          type="checkbox"
          [checked]="selectedPrefixes().includes(pf)"
          (change)="togglePrefixSelection(pf)"
        />
        {{ pf ? pf : 'Alles' }}
      </label>
    }
  </div>
  <se-stacked-per [data]="powerUsage()" />
</details>
`, styles: ["/* src/app/mqtt/mqtt-settings/mqtt-settings.component.css */\n:host {\n  display: block;\n}\nlabel {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\ndiv.zigbee-prefixes {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));\n  gap: 0.5rem;\n  padding-block: 0.5rem;\n}\ndiv.zigbee-prefixes * {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 1rem;\n  overflow: auto;\n}\n"] }]
  }], null, { selectedPrefixes: [{ type: Input, args: [{ isSignal: true, alias: "selectedPrefixes", required: true }] }, { type: Output, args: ["selectedPrefixesChange"] }], powerUsage: [{ type: Input, args: [{ isSignal: true, alias: "powerUsage", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MqttSettingsComponent, { className: "MqttSettingsComponent", filePath: "src/app/mqtt/mqtt-settings/mqtt-settings.component.ts", lineNumber: 18 });
})();

// src/app/mqtt/pair-button/pair-button.component.ts
var _c0 = ["dlg"];
var _forTrack0 = ($index, $item) => $item.ieee_address;
function PairButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h5");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Nog ", ctx_r0.countdown(), " seconden");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.joinAllowed().device);
  }
}
function PairButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h5");
    \u0275\u0275text(1, "klik hier om te pairen");
    \u0275\u0275domElementEnd();
  }
}
function PairButtonComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", opt_r2.friendly_name)("selected", opt_r2.friendly_name === ctx_r0.selectedRouter());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2.friendly_name, " ");
  }
}
var PairButtonComponent = class _PairButtonComponent {
  constructor() {
    this.z2m = inject(ZigbeeService);
    this.elm = inject(ElementRef).nativeElement;
    this.selectedPrefixes = input(
      [],
      ...ngDevMode ? [{ debugName: "selectedPrefixes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedRouter = signal(
      "",
      ...ngDevMode ? [{ debugName: "selectedRouter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.routerList = computed(
      () => this.z2m.devices().filter((d) => d.type === "Router").filter((d) => this.selectedPrefixes().some((prefix) => d.friendly_name?.startsWith(prefix))).map((d) => ({
        friendly_name: d.friendly_name,
        ieee_address: d.ieee_address
      })).sort((a, b) => a.friendly_name.localeCompare(b.friendly_name)),
      ...ngDevMode ? [{ debugName: "routerList" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dlg = viewChild.required("dlg");
    this._ = afterRenderEffect(() => {
      const selected = this.selectedRouter();
      const path = getPath(this.elm);
      const lsKey = "pairingRouter" + path;
      const storedRouter = localStorage.getItem(lsKey);
      if (!selected) {
        if (!storedRouter) {
          const routers = this.routerList();
          this.selectedRouter.set(routers[0]?.friendly_name || "");
        } else {
          this.selectedRouter.set(storedRouter);
        }
      } else {
        if (selected !== storedRouter) {
          console.log("store", selected, "as", lsKey);
          localStorage.setItem(lsKey, selected);
        }
      }
    });
    this.showDialog = (ev) => {
      const div = this.elm.querySelector("div.pbWrapper");
      if (this.elm !== ev.target && div !== ev.target && !div?.contains(ev.target)) {
        return;
      }
      console.log({ ev, div });
      this.joinAllowed().pairingAllowed ? this.switchJoin(false) : this.dlg().nativeElement.showModal();
    };
    this.joinAllowed = this.z2m.joinAllowed;
    this.countdown = toSignal(toObservable(this.joinAllowed).pipe(filter((joinAllowed) => joinAllowed.pairingAllowed), map((joinAllowed) => joinAllowed.time ?? 120), switchMap((time) => interval(1e3).pipe(map((i) => time - i), takeWhile((t) => t >= 1), startWith(time)))));
    this.closeDialog = () => {
      this.dlg().nativeElement.close();
    };
    this.startPairing = async () => {
      const router = this.selectedRouter();
      if (!router) {
        console.error("No router selected for pairing");
        return;
      }
      await this.switchJoin(true);
      console.log("Started pairing with router:", router);
      this.dlg().nativeElement.close();
    };
    this.switchJoin = async (allow) => {
      try {
        const result = await this.z2m.publish("zigbee2mqtt/bridge/request/permit_join", {
          value: allow,
          time: allow ? 120 : 0,
          device: this.selectedRouter()
        });
      } catch (error) {
        console.error("Error switching join:", error);
      }
    };
  }
  static {
    this.\u0275fac = function PairButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PairButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PairButtonComponent, selectors: [["se-pair-button"]], viewQuery: function PairButtonComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dlg, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostVars: 2, hostBindings: function PairButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function PairButtonComponent_click_HostBindingHandler($event) {
          return ctx.showDialog($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.joinAllowed().pairingAllowed ? "var(--color-success)" : "var(--color-error)");
      }
    }, inputs: { selectedPrefixes: [1, "selectedPrefixes"] }, decls: 15, vars: 1, consts: [["dlg", ""], [1, "pbWrapper"], [3, "change"], [3, "value", "selected"], [3, "click"]], template: function PairButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 1);
        \u0275\u0275conditionalCreate(1, PairButtonComponent_Conditional_1_Template, 4, 2)(2, PairButtonComponent_Conditional_2_Template, 2, 0, "h5");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "dialog", null, 0)(5, "div")(6, "h3");
        \u0275\u0275text(7, "Kies device om mee te pairen");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(8, "select", 2);
        \u0275\u0275domListener("change", function PairButtonComponent_Template_select_change_8_listener($event) {
          return ctx.selectedRouter.set($event.target.value);
        });
        \u0275\u0275repeaterCreate(9, PairButtonComponent_For_10_Template, 2, 3, "option", 3, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "button", 4);
        \u0275\u0275domListener("click", function PairButtonComponent_Template_button_click_11_listener() {
          return ctx.startPairing();
        });
        \u0275\u0275text(12, "Start pairen");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "button", 4);
        \u0275\u0275domListener("click", function PairButtonComponent_Template_button_click_13_listener() {
          return ctx.closeDialog();
        });
        \u0275\u0275text(14, "Afbreken");
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.joinAllowed().pairingAllowed ? 1 : 2);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.routerList());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\ndialog[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\ndialog[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%] {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 0.5rem;\n  overflow: auto;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PairButtonComponent, [{
    type: Component,
    args: [{ selector: "se-pair-button", imports: [], template: `
    <div class="pbWrapper">
      @if (joinAllowed().pairingAllowed) {
        <h5>Nog {{ countdown() }} seconden</h5>
        <h5>{{ joinAllowed().device }}</h5>
      } @else {
        <h5>klik hier om te pairen</h5>
      }
    </div>

    <dialog #dlg>
      <div>
        <h3>Kies device om mee te pairen</h3>
        <select (change)="selectedRouter.set($any($event.target).value)">
          @for (opt of routerList(); track opt.ieee_address) {
            <option
              [value]="opt.friendly_name"
              [selected]="opt.friendly_name === selectedRouter()"
            >
              {{ opt.friendly_name }}
            </option>
          }
        </select>
        <button (click)="startPairing()">Start pairen</button>
        <button (click)="closeDialog()">Afbreken</button>
      </div>
    </dialog>
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[style.backgroundColor]": 'joinAllowed().pairingAllowed ? "var(--color-success)" : "var(--color-error)"',
      "(click)": "showDialog($event)"
    }, styles: ["/* src/app/mqtt/pair-button/pair-button.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\ndialog > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\ndialog > div > select {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 0.5rem;\n  overflow: auto;\n}\n"] }]
  }], null, { selectedPrefixes: [{ type: Input, args: [{ isSignal: true, alias: "selectedPrefixes", required: false }] }], dlg: [{ type: ViewChild, args: ["dlg", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PairButtonComponent, { className: "PairButtonComponent", filePath: "src/app/mqtt/pair-button/pair-button.component.ts", lineNumber: 58 });
})();
function getPath(elm) {
  let path = "";
  while (elm && elm.tagName !== "BODY") {
    const idx = Array.from(elm.parentElement?.children ?? [])?.indexOf(elm) ?? 0;
    path = `${elm.tagName}[${idx}]${path ? "/" : ""}${path}`.trim();
    if (elm.tagName === "HTML")
      break;
    elm = elm.parentElement;
  }
  return path;
}

// src/app/mqtt/toggle/toggle.component.ts
var ToggleComponent = class _ToggleComponent {
  constructor() {
    this.toggleOnText = input(
      "Aan",
      ...ngDevMode ? [{ debugName: "toggleOnText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleOffText = input(
      "Uit",
      ...ngDevMode ? [{ debugName: "toggleOffText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = input.required(
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valueChange = output();
  }
  static {
    this.\u0275fac = function ToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToggleComponent, selectors: [["se-toggle"]], inputs: { toggleOnText: [1, "toggleOnText"], toggleOffText: [1, "toggleOffText"], value: [1, "value"] }, outputs: { valueChange: "valueChange" }, decls: 6, vars: 2, consts: [["type", "checkbox", 3, "change", "checked"], [1, "switch"]], template: function ToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "label")(1, "input", 0);
        \u0275\u0275domListener("change", function ToggleComponent_Template_input_change_1_listener() {
          return ctx.valueChange.emit(!ctx.value());
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "span", 1);
        \u0275\u0275domElement(3, "span");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "span");
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275domProperty("checked", ctx.value());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.value() ? ctx.toggleOnText() : ctx.toggleOffText());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding-block: 0.5rem;\n  gap: 0.25rem;\n}\ninput[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: 0fr 1.25rem 1fr;\n  align-items: center;\n  width: 3.5rem;\n  height: 1.5rem;\n  padding-inline: 0.25rem;\n  background-color: lightgreen;\n  border-radius: 0.75rem;\n  transition: 150ms;\n}\n.switch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  transition: 150ms;\n  display: inline-block;\n  grid-column: 2/3;\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: green;\n  border-radius: 50%;\n}\nlabel[_ngcontent-%COMP%]:has(input:not(:checked))   .switch[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.25rem 0fr;\n  background-color: lightsalmon;\n}\nlabel[_ngcontent-%COMP%]:has(input:not(:checked))   .switch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background-color: maroon;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleComponent, [{
    type: Component,
    args: [{ selector: "se-toggle", imports: [], template: `
    <label>
      <input
        type="checkbox"
        [checked]="value()"
        (change)="valueChange.emit(!value())"
      />
      <span class="switch"><span></span></span>
      <span>{{ value() ? toggleOnText() : toggleOffText() }}</span>
    </label>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/mqtt/toggle/toggle.component.css */\n:host {\n  display: block;\n}\nlabel {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding-block: 0.5rem;\n  gap: 0.25rem;\n}\ninput {\n  display: none;\n}\n.switch {\n  display: inline-grid;\n  grid-template-columns: 0fr 1.25rem 1fr;\n  align-items: center;\n  width: 3.5rem;\n  height: 1.5rem;\n  padding-inline: 0.25rem;\n  background-color: lightgreen;\n  border-radius: 0.75rem;\n  transition: 150ms;\n}\n.switch > span {\n  transition: 150ms;\n  display: inline-block;\n  grid-column: 2/3;\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: green;\n  border-radius: 50%;\n}\nlabel:has(input:not(:checked)) .switch {\n  grid-template-columns: 1fr 1.25rem 0fr;\n  background-color: lightsalmon;\n}\nlabel:has(input:not(:checked)) .switch > span {\n  background-color: maroon;\n}\n"] }]
  }], null, { toggleOnText: [{ type: Input, args: [{ isSignal: true, alias: "toggleOnText", required: false }] }], toggleOffText: [{ type: Input, args: [{ isSignal: true, alias: "toggleOffText", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], valueChange: [{ type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToggleComponent, { className: "ToggleComponent", filePath: "src/app/mqtt/toggle/toggle.component.ts", lineNumber: 25 });
})();

// src/app/mqtt/power-meter/dialog/split-name.ts
var splitName = (baseName) => {
  const parts = baseName.split("/");
  if (parts.length === 1) {
    return {
      prefix: "",
      subGroup: "",
      name: baseName
    };
  } else if (parts.length === 2) {
    return {
      prefix: parts[0],
      subGroup: "",
      name: parts[1]
    };
  } else {
    return {
      prefix: parts[0],
      subGroup: parts[1],
      name: parts.slice(2).join("/")
    };
  }
};

// src/app/mqtt/power-meter/dialog/power-meter-dialog.component.ts
var _c02 = ["dlg"];
var _c1 = () => [];
function PowerMeterDialogComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pf_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", \u0275\u0275interpolate(pf_r1))("selected", ctx_r1.model().prefix === pf_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pf_r1, " ");
  }
}
function PowerMeterDialogComponent_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sg_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", \u0275\u0275interpolate(sg_r4))("selected", ctx_r1.model().subGroup === sg_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sg_r4, " ");
  }
}
function PowerMeterDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 13)(1, "option", 4);
    \u0275\u0275text(2, "Geen");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PowerMeterDialogComponent_Conditional_16_For_4_Template, 2, 4, "option", 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 14);
    \u0275\u0275listener("click", function PowerMeterDialogComponent_Conditional_16_Template_svg_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.customGroup.set(!ctx_r1.customGroup()));
    });
    \u0275\u0275element(6, "use", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.fd.subGroup);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("selected", !ctx_r1.model().subGroup);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.subGroups()[ctx_r1.model().prefix] || \u0275\u0275pureFunction0(2, _c1));
  }
}
function PowerMeterDialogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 5);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.fd.subGroup);
    \u0275\u0275control();
  }
}
var PowerMeterDialogComponent = class _PowerMeterDialogComponent {
  constructor() {
    this.dialogRef = viewChild.required("dlg");
    this.z2m = inject(ZigbeeService);
    this.settings = inject(MqttDeviceSettingsService);
    this.ieeeAddress = input.required(
      ...ngDevMode ? [{ debugName: "ieeeAddress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deviceSettings = this.settings.read(this.ieeeAddress);
    this.deviceOptions = this.settings.optionsFromDevResource(this.deviceSettings);
    this.customGroup = signal(
      false,
      ...ngDevMode ? [{ debugName: "customGroup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zigbeePrefixes = zigbeePrefixes.filter((p) => p !== "Alles");
    this.subGroups = this.z2m.deviceSubgroups;
    this.model = linkedSignal(
      () => {
        return __spreadValues(__spreadValues({}, splitName(this.baseName())), this.deviceOptions());
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.newName = computed(
      () => {
        const prefix = this.model().prefix.toLocaleLowerCase().trim();
        const subGroup = this.model().subGroup.toLocaleLowerCase().trim();
        const name = this.model().name;
        return `${prefix}/${subGroup}/${name}`.replaceAll("//", "/");
      },
      ...ngDevMode ? [{ debugName: "newName" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fd = form(this.model, () => void 0, {
      submission: {
        action: async (value) => {
          const currentValue = this.model();
          if (this.baseName() !== this.newName()) {
            const result = await this.z2m.publish("zigbee2mqtt/bridge/request/device/rename", {
              from: this.baseName(),
              to: this.newName(),
              homeassistant_rename: true
            });
            console.log({ result });
          }
          await this.settings.update({
            id: this.ieeeAddress(),
            friendlyName: this.newName(),
            alertWhenLost: currentValue.alertWhenLost,
            alertWhenOff: currentValue.alertWhenOff,
            allowPowerControl: currentValue.allowPowerControl,
            isSubDevice: currentValue.isSubDevice,
            maxPower: this.deviceSettings.value()?.maxPower || 0
          });
          this.closeDialog();
        }
      }
    });
    this.#deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);
    this.baseName = computed(
      () => this.#deviceInfo()?.friendly_name || this.ieeeAddress(),
      ...ngDevMode ? [{ debugName: "baseName" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show = model(
      ...ngDevMode ? [void 0, { debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ = afterRenderEffect(() => this.show() ? this.openDialog() : this.closeDialog());
  }
  #deviceInfo;
  openDialog() {
    this.dialogRef().nativeElement?.showModal();
    this.show.set(true);
  }
  closeDialog() {
    this.dialogRef().nativeElement?.close();
    this.show.set(false);
  }
  static {
    this.\u0275fac = function PowerMeterDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerMeterDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PowerMeterDialogComponent, selectors: [["power-meter-dialog"]], viewQuery: function PowerMeterDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dialogRef, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { ieeeAddress: [1, "ieeeAddress"], show: [1, "show"] }, outputs: { show: "showChange" }, decls: 42, vars: 11, consts: [["dlg", ""], [3, "formRoot"], ["id", "prefix", 3, "formField"], [3, "value", "selected"], ["value", "", 3, "selected"], ["type", "text", "id", "subGroup", 3, "formField"], ["type", "text", "id", "name", 3, "formField"], ["type", "checkbox", "id", "isSubDevice", 3, "formField"], ["type", "checkbox", "id", "allowPowerControl", 3, "formField"], ["type", "checkbox", "id", "alertWhenLost", 3, "formField"], ["type", "checkbox", "id", "alertWhenOff", 3, "formField"], ["type", "submit"], ["type", "button", 3, "click"], ["id", "subGroup", 3, "formField"], ["role", "button", "aria-label", "Pencil", 3, "click"], ["href", "#icon-pencil"]], template: function PowerMeterDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "dialog", null, 0)(2, "h4");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "form", 1)(5, "label")(6, "span");
        \u0275\u0275text(7, "indelen bij:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "select", 2);
        \u0275\u0275repeaterCreate(9, PowerMeterDialogComponent_For_10_Template, 2, 4, "option", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(11, "option", 4);
        \u0275\u0275text(12, "Geen");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "label")(14, "span");
        \u0275\u0275text(15, "Subgroep:");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(16, PowerMeterDialogComponent_Conditional_16_Template, 7, 3)(17, PowerMeterDialogComponent_Conditional_17_Template, 1, 1, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "label")(19, "span");
        \u0275\u0275text(20, "Naam:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "label");
        \u0275\u0275element(23, "input", 7);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Is sub-apparaat (tel niet mee in totalen)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "label");
        \u0275\u0275element(27, "input", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "Sta aan/uit commando's toe");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "label");
        \u0275\u0275element(31, "input", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "Waarschuwen als apparaat niet meer bereikbaar is");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "label");
        \u0275\u0275element(35, "input", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37, "Waarschuwen als apparaat uit staat terwijl het aan zou moeten zijn");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "button", 11);
        \u0275\u0275text(39, "Opslaan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 12);
        \u0275\u0275listener("click", function PowerMeterDialogComponent_Template_button_click_40_listener() {
          return ctx.closeDialog();
        });
        \u0275\u0275text(41, "Annuleren");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.model().prefix, " ", ctx.model().name);
        \u0275\u0275advance();
        \u0275\u0275property("formRoot", ctx.fd);
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.prefix);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.zigbeePrefixes);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", !ctx.model().prefix);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.customGroup() ? 16 : 17);
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.fd.name);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.fd.isSubDevice);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.allowPowerControl);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.alertWhenLost);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.fd.alertWhenOff);
        \u0275\u0275control();
      }
    }, dependencies: [FormField, FormRoot], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-4);\n}\nlabel[_ngcontent-%COMP%] {\n  margin-block-start: 0.5rem;\n  display: grid;\n  grid-template-columns: 5rem 1fr auto;\n  align-items: center;\n  gap: var(--size-1);\n}\nlabel[_ngcontent-%COMP%]:has([type=checkbox]) {\n  grid-template-columns: auto 1fr auto;\n}\nlabel[_ngcontent-%COMP%]:has([type=checkbox])   input[_ngcontent-%COMP%] {\n  justify-self: end;\n}\nsvg[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  inline-size: 1.5rem;\n}\nbutton[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerMeterDialogComponent, [{
    type: Component,
    args: [{ selector: "power-meter-dialog", standalone: true, imports: [FormField, FormRoot], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <dialog #dlg>
      <h4>{{ model().prefix }} {{ model().name }}</h4>
      <form [formRoot]="fd">
        <label>
          <span>indelen bij:</span>
          <select id="prefix" [formField]="fd.prefix">
            @for (pf of zigbeePrefixes; track $index) {
              <option value="{{ pf }}" [selected]="model().prefix === pf">
                {{ pf }}
              </option>
            }
            <option value="" [selected]="!model().prefix">Geen</option>
          </select>
        </label>
        <label>
          <span>Subgroep:</span>
          @if (!customGroup()) {
            <select id="subGroup" [formField]="fd.subGroup">
              <option value="" [selected]="!model().subGroup">Geen</option>
              @for (sg of subGroups()[model().prefix] || []; track $index) {
                <option value="{{ sg }}" [selected]="model().subGroup === sg">
                  {{ sg }}
                </option>
              }
            </select>
            <svg
              role="button"
              aria-label="Pencil"
              (click)="customGroup.set(!customGroup())"
            >
              <use href="#icon-pencil"></use>
            </svg>
          } @else {
            <input type="text" id="subGroup" [formField]="fd.subGroup" />
          }
        </label>
        <label>
          <span>Naam:</span>
          <input type="text" id="name" [formField]="fd.name" />
        </label>
        <label>
          <input
            type="checkbox"
            id="isSubDevice"
            [formField]="fd.isSubDevice"
          />
          <span>Is sub-apparaat (tel niet mee in totalen)</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="allowPowerControl"
            [formField]="fd.allowPowerControl"
          />
          <span>Sta aan/uit commando's toe</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="alertWhenLost"
            [formField]="fd.alertWhenLost"
          />
          <span>Waarschuwen als apparaat niet meer bereikbaar is</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="alertWhenOff"
            [formField]="fd.alertWhenOff"
          />
          <span
            >Waarschuwen als apparaat uit staat terwijl het aan zou moeten
            zijn</span
          >
        </label>

        <button type="submit">Opslaan</button>
        <button type="button" (click)="closeDialog()">Annuleren</button>
      </form>
    </dialog>
  `, styles: ["/* src/app/mqtt/power-meter/dialog/power-meter-dialog.component.css */\n:host {\n  display: flex;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-4);\n}\nlabel {\n  margin-block-start: 0.5rem;\n  display: grid;\n  grid-template-columns: 5rem 1fr auto;\n  align-items: center;\n  gap: var(--size-1);\n}\nlabel:has([type=checkbox]) {\n  grid-template-columns: auto 1fr auto;\n}\nlabel:has([type=checkbox]) input {\n  justify-self: end;\n}\nsvg {\n  aspect-ratio: 1;\n  inline-size: 1.5rem;\n}\nbutton + button {\n  margin-left: 0.5rem;\n}\n"] }]
  }], null, { dialogRef: [{ type: ViewChild, args: ["dlg", { isSignal: true }] }], ieeeAddress: [{ type: Input, args: [{ isSignal: true, alias: "ieeeAddress", required: true }] }], show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }, { type: Output, args: ["showChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PowerMeterDialogComponent, { className: "PowerMeterDialogComponent", filePath: "src/app/mqtt/power-meter/dialog/power-meter-dialog.component.ts", lineNumber: 111 });
})();

// src/app/mqtt/power-meter/power-meter.component.ts
function PowerMeterComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2, "subgroup:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.splitName().subGroup);
  }
}
function PowerMeterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "se-gauge", 5);
    \u0275\u0275elementStart(1, "ul")(2, "li")(3, "span");
    \u0275\u0275text(4, "group:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, PowerMeterComponent_Conditional_4_Conditional_7_Template, 5, 1, "li");
    \u0275\u0275elementStart(8, "li")(9, "span");
    \u0275\u0275text(10, "power:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "span");
    \u0275\u0275text(15, "voltage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "span");
    \u0275\u0275text(20, "current:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li")(24, "span");
    \u0275\u0275text(25, "energy:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.currentPower())("maxVal", ctx_r0.maxUsedPower());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.splitName().prefix);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.splitName().subGroup ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.currentPower(), " W");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (tmp_6_0 = ctx_r0.deviceStatus()) == null ? null : tmp_6_0.voltage, " V");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (tmp_7_0 = ctx_r0.deviceStatus()) == null ? null : tmp_7_0.current, " A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (tmp_8_0 = ctx_r0.deviceStatus()) == null ? null : tmp_8_0.energy, " kWh");
  }
}
function PowerMeterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "button", 0);
    \u0275\u0275listener("click", function PowerMeterComponent_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.refresh());
    });
    \u0275\u0275text(4, "Refresh");
    \u0275\u0275elementEnd();
  }
}
function PowerMeterComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "se-toggle", 6);
    \u0275\u0275listener("valueChange", function PowerMeterComponent_Conditional_6_Template_se_toggle_valueChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.isPoweredOn());
  }
}
var PowerMeterComponent = class _PowerMeterComponent {
  constructor() {
    this.ieeeAddress = input.required(
      ...ngDevMode ? [{ debugName: "ieeeAddress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.z2m = inject(ZigbeeService);
    this.setting = inject(MqttDeviceSettingsService);
    this.dialogOpen = signal(false, { debugName: "PowerMeterDialogOpen" });
    this.optionsRef = this.setting.read(this.ieeeAddress);
    this.options = this.setting.optionsFromDevResource(this.optionsRef);
    this.__ = afterRenderEffect(async () => {
      if (this.ieeeAddress() === "unknown" || !this.ieeeAddress())
        return;
      const splitName2 = this.splitName();
      if (!splitName2.name)
        return;
      const notFound = this.optionsRef.error()?.["status"] === 404;
      if (notFound) {
        console.log("not found, creating default setting");
        await this.setting.create({
          id: this.ieeeAddress(),
          friendlyName: this.friendlyName(),
          maxPower: this.maxUsedPower()
        });
        return;
      }
      if (this.optionsRef.hasValue()) {
        const opt = this.optionsRef.value();
        if (!opt?.id)
          return;
        if (opt.friendlyName !== this.friendlyName() || // update friendly name if it has changed
        (opt.maxPower || 0) < this.maxUsedPower()) {
          await this.setting.update(__spreadProps(__spreadValues({}, opt), {
            friendlyName: this.friendlyName(),
            maxPower: this.maxUsedPower()
          }));
        }
      }
    });
    this.#deviceResource = this.z2m.getDeviceStatus(this.ieeeAddress);
    this.deviceLoading = this.#deviceResource.isLoading;
    this.deviceStatus = this.#deviceResource.value;
    this.#deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);
    this.currentPower = computed(() => this.deviceStatus()?.power || 0, {
      debugName: "CurrentPower"
    });
    this.maxUsedPower = linkedSignal(
      () => {
        const optionsMax = this.optionsRef.hasValue() ? this.optionsRef.value()?.maxPower || 0 : 0;
        return Math.max(optionsMax, this.currentPower() || 0);
      },
      ...ngDevMode ? [{ debugName: "maxUsedPower" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.friendlyName = computed(
      () => this.#deviceInfo()?.friendly_name || this.ieeeAddress(),
      ...ngDevMode ? [{ debugName: "friendlyName" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.splitName = computed(
      () => splitName(this.friendlyName()),
      ...ngDevMode ? [{ debugName: "splitName" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = computed(
      () => this.splitName().name,
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.prefix = computed(
      () => this.splitName().prefix,
      ...ngDevMode ? [{ debugName: "prefix" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isPoweredOn = computed(
      () => this.deviceStatus()?.state === "ON",
      ...ngDevMode ? [{ debugName: "isPoweredOn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refresh = () => {
      this.z2m.publish(`zigbee2mqtt/${this.ieeeAddress()}/get`, { state: "" });
    };
    this.toggle = () => {
      const state = this.isPoweredOn() ? "OFF" : "ON";
      this.z2m.publish(`zigbee2mqtt/${this.ieeeAddress()}/set`, { state });
    };
    this._ = afterNextRender(() => {
      let tries = 0;
      const randomDelay = () => Math.random() * 2e3 + 1500;
      const attemptRefresh = () => {
        if (tries >= 15) {
          console.log(`Max refresh attempts reached for ${this.name()}. Giving up.`);
          return;
        }
        if (!this.deviceLoading()) {
          return;
        }
        tries++;
        this.refresh();
        setTimeout(attemptRefresh, randomDelay());
      };
      attemptRefresh();
    });
  }
  #deviceResource;
  #deviceInfo;
  static {
    this.\u0275fac = function PowerMeterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerMeterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PowerMeterComponent, selectors: [["power-meter"]], inputs: { ieeeAddress: [1, "ieeeAddress"] }, decls: 8, vars: 5, consts: [[3, "click"], ["role", "img", "aria-label", "Pencil"], ["href", "#icon-pencil"], [3, "value"], [3, "showChange", "ieeeAddress", "show"], [3, "value", "maxVal"], [3, "valueChange", "value"]], template: function PowerMeterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5", 0);
        \u0275\u0275listener("click", function PowerMeterComponent_Template_h5_click_0_listener() {
          return ctx.dialogOpen.set(true);
        });
        \u0275\u0275text(1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 1);
        \u0275\u0275element(3, "use", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, PowerMeterComponent_Conditional_4_Template, 28, 8)(5, PowerMeterComponent_Conditional_5_Template, 5, 0);
        \u0275\u0275conditionalCreate(6, PowerMeterComponent_Conditional_6_Template, 1, 1, "se-toggle", 3);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "power-meter-dialog", 4);
        \u0275\u0275twoWayListener("showChange", function PowerMeterComponent_Template_power_meter_dialog_showChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dialogOpen, $event) || (ctx.dialogOpen = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.name(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.deviceLoading() ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.options().allowPowerControl ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ieeeAddress", ctx.ieeeAddress());
        \u0275\u0275twoWayProperty("show", ctx.dialogOpen);
      }
    }, dependencies: [ToggleComponent, PowerMeterDialogComponent, GaugeComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: var(--surface-4);\n  margin: 0.5rem;\n}\nh5[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-inline-start: 0.5rem;\n  aspect-ratio: 1;\n  inline-size: 1.25rem;\n}\nh4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 50%;\n  aspect-ratio: 1 / 1;\n  padding: 0.5rem;\n  transform: scale(0.75);\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.25rem 0.5rem;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column: 1 / -1;\n  grid-template-columns: subgrid;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerMeterComponent, [{
    type: Component,
    args: [{ selector: "power-meter", template: `
    <h5 (click)="dialogOpen.set(true)">
      {{ name() }}
      <svg role="img" aria-label="Pencil">
        <use href="#icon-pencil"></use>
      </svg>
    </h5>
    @if (!deviceLoading()) {
      <se-gauge [value]="currentPower()" [maxVal]="maxUsedPower()" />
      <ul>
        <li>
          <span>group:</span><span>{{ splitName().prefix }}</span>
        </li>
        @if (splitName().subGroup) {
          <li>
            <span>subgroup:</span><span>{{ splitName().subGroup }}</span>
          </li>
        }
        <li>
          <span>power:</span><span>{{ currentPower() }} W</span>
        </li>
        <li>
          <span>voltage:</span><span>{{ deviceStatus()?.voltage }} V</span>
        </li>
        <li>
          <span>current:</span><span>{{ deviceStatus()?.current }} A</span>
        </li>
        <li>
          <span>energy:</span><span>{{ deviceStatus()?.energy }} kWh</span>
        </li>
      </ul>
      <!-- <input type="checkbox" switch [checked]="isPoweredOn()" (change)="isPoweredOn() ? toggleOff() : toggleOn()" /> -->
    } @else {
      <span>Loading...</span><br />
      <button (click)="refresh()">Refresh</button>
    }
    @if (options().allowPowerControl) {
      <se-toggle [value]="isPoweredOn()" (valueChange)="toggle()" />
    }
    <power-meter-dialog [ieeeAddress]="ieeeAddress()" [(show)]="dialogOpen" />
  `, changeDetection: ChangeDetectionStrategy.OnPush, imports: [ToggleComponent, PowerMeterDialogComponent, GaugeComponent], styles: ["/* src/app/mqtt/power-meter/power-meter.component.css */\n:host {\n  display: block;\n}\nbutton {\n  background-color: var(--surface-4);\n  margin: 0.5rem;\n}\nh5 svg {\n  display: inline-block;\n  margin-inline-start: 0.5rem;\n  aspect-ratio: 1;\n  inline-size: 1.25rem;\n}\nh4 button {\n  margin: 0;\n  border-radius: 50%;\n  aspect-ratio: 1 / 1;\n  padding: 0.5rem;\n  transform: scale(0.75);\n}\nul {\n  list-style: none;\n  padding: 0;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.25rem 0.5rem;\n}\nul li {\n  display: grid;\n  grid-column: 1 / -1;\n  grid-template-columns: subgrid;\n}\n"] }]
  }], null, { ieeeAddress: [{ type: Input, args: [{ isSignal: true, alias: "ieeeAddress", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PowerMeterComponent, { className: "PowerMeterComponent", filePath: "src/app/mqtt/power-meter/power-meter.component.ts", lineNumber: 71 });
})();
function extractPrefix(name) {
  const match = name.match(new RegExp(`^(${zigbeePrefixes.join("|")})`));
  return match && match[0] ? match[0] : "";
}

// src/app/mqtt/mqtt.component.ts
var _forTrack02 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.ieeeAddress;
function MqttComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 7);
    \u0275\u0275listener("change", function MqttComponent_For_11_Template_input_change_1_listener($event) {
      const opt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setBooleanOption(opt_r2.name, $event.target.checked ? true : void 0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("checked", opt_r2.value === true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2.description || opt_r2.name, " ");
  }
}
function MqttComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "power-meter", 6);
  }
  if (rf & 2) {
    const device_r4 = ctx.$implicit;
    \u0275\u0275property("ieeeAddress", device_r4.ieeeAddress);
  }
}
var MqttComponent = class _MqttComponent {
  constructor() {
    this.#z2m = inject(ZigbeeService);
    this.#settings = inject(MqttDeviceSettingsService);
    this.search = persistentSignal("mqttSearchFilters", {
      searchText: "",
      selectedPrefixes: ["e&m", "kamp"],
      booleanOptions: [
        {
          name: "allowPowerControl",
          description: "aan-uit schakelaar",
          value: void 0
        },
        { name: "alertWhenOff", description: "alert when off", value: void 0 },
        {
          name: "alertWhenLost",
          description: "alert when lost",
          value: void 0
        },
        { name: "isSubDevice", description: "sub device", value: void 0 }
      ]
    });
    this.searchDebounced = debouncedComputed(this.search, {
      delay: 200
    });
    this.selectedPrefixes = proxySignal("selectedPrefixes", this.search);
    this.powerMeters = computed(
      () => this.#z2m.devices()?.filter((d) => d.definition?.exposes?.some((e) => e.property === "power" && e.type === "numeric")).filter((d) => !!d.ieee_address).sort((a, b) => a.friendly_name.localeCompare(b.friendly_name)) ?? [],
      ...ngDevMode ? [{ debugName: "powerMeters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.powerMetersFiltered = computed(
      () => {
        const devices = this.devicesWithSettings() ?? [];
        const searchState = this.searchDebounced();
        const selectedPrefixes = searchState.selectedPrefixes ?? [];
        const searchText = (searchState.searchText ?? "").toString().trim().toLowerCase();
        const requiredBooleanOptions = (searchState.booleanOptions ?? []).filter((o) => o.value === true).map((o) => o.name);
        return devices.filter((device) => {
          const friendlyNameLower = String(device.friendly_name ?? "").toLowerCase();
          const name = device.friendly_name;
          const matchesPrefix = selectedPrefixes.includes("Alles") || !name?.includes("/") || selectedPrefixes.some((prefix) => name.startsWith(prefix));
          if (!matchesPrefix)
            return false;
          if (requiredBooleanOptions.some((n) => device.settings[n] !== true))
            return false;
          if (!searchText)
            return true;
          return friendlyNameLower.includes(searchText);
        });
      },
      ...ngDevMode ? [{ debugName: "powerMetersFiltered" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deviceStatuses = this.#z2m.getMultipleStatuses(computed(() => this.powerMeters().map((d) => d.friendly_name || d.ieee_address)));
    this.deviceSettings = httpResource(() => {
      const keys = this.powerMeters().map((d) => d.ieee_address).filter(Boolean);
      if (undefinedWhenEmpty(keys) === void 0)
        return void 0;
      const list = this.#settings.list() ?? [];
      if (undefinedWhenEmpty(list) === void 0)
        return void 0;
      const docs = keys.map((k) => {
        const rev = list.find((i) => i[0] === k)?.[1];
        return rev ? { id: k, rev } : { id: k };
      });
      return {
        url: `${this.#settings.baseUrl()}/_bulk_get`,
        method: "POST",
        body: { docs },
        credentials: "include",
        mode: "cors"
      };
    }, {
      injector: inject(Injector),
      debugName: "powerMetersBulkGet",
      defaultValue: {},
      parse: (value) => {
        const response = value;
        const map2 = {};
        for (const r of response?.results ?? []) {
          const id = r.id?.toString().toLowerCase();
          const ok = r.docs?.[0]?.ok;
          if (!id || !ok)
            continue;
          map2[id] = this.#settings.extractedOptions(ok);
        }
        return map2;
      }
    });
    this.devicesWithSettings = computed(() => {
      const devices = this.powerMeters();
      const statuses = this.deviceStatuses.value() ?? [];
      const settingsById = this.deviceSettings.value() ?? {};
      const statusMapByFriendlyName = /* @__PURE__ */ new Map();
      for (const s of statuses) {
        const name = s.friendly_name?.toLowerCase();
        if (name)
          statusMapByFriendlyName.set(name, s);
      }
      return devices.map((device) => {
        const ieee = device.ieee_address.toLowerCase();
        const status = statusMapByFriendlyName.get(device.friendly_name?.toLowerCase());
        const settings = settingsById[ieee] ?? this.#settings.defaultOptions;
        return {
          friendly_name: status?.friendly_name ?? device.friendly_name ?? device.ieee_address,
          ieeeAddress: device.ieee_address,
          power: status?.power ?? 0,
          energy: status?.energy ?? 0,
          current: status?.current ?? 0,
          settings
        };
      });
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "devicesWithSettings" } : (
      /* istanbul ignore next */
      {}
    )), { equal: deepEqual }));
    this.powerUseByPrefix = computed(() => {
      const selectedDevices = this.devicesWithSettings() ?? [];
      const result = {};
      for (const state of selectedDevices) {
        if (state.settings?.isSubDevice)
          continue;
        const prefix = extractPrefix(state.friendly_name);
        result[prefix] ??= { power: 0, energy: 0, current: 0 };
        result[prefix].power += Math.round(state.power) || 0;
        result[prefix].energy += Math.round(state.energy) || 0;
        result[prefix].current += Math.round(state.current) || 0;
      }
      return result;
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "powerUseByPrefix" } : (
      /* istanbul ignore next */
      {}
    )), { equal: deepEqual }));
    this.powerUsage = computed(
      () => Object.entries(this.powerUseByPrefix()).map(([prefix, usage]) => ({
        name: prefix,
        value: usage.power
      })),
      ...ngDevMode ? [{ debugName: "powerUsage" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #z2m;
  #settings;
  setSearchText(v) {
    this.search.update((current) => __spreadProps(__spreadValues({}, current), { searchText: v }));
  }
  setBooleanOption(name, val) {
    this.search.update((current) => __spreadProps(__spreadValues({}, current), {
      booleanOptions: current.booleanOptions.map((o) => o.name === name ? __spreadProps(__spreadValues({}, o), { value: val }) : o)
    }));
  }
  static {
    this.\u0275fac = function MqttComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MqttComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MqttComponent, selectors: [["se-mqtt"]], features: [\u0275\u0275ProvidersFeature([ZigbeeService])], decls: 16, vars: 4, consts: [[3, "selectedPrefixesChange", "selectedPrefixes", "powerUsage"], [1, "searchBar"], ["type", "search", "placeholder", "Search name", "aria-label", "Search devices", 1, "search", 3, "input", "value"], ["type", "button", "title", "Clear search", 3, "click"], [1, "devGrid"], [3, "selectedPrefixes"], [3, "ieeeAddress"], ["type", "checkbox", 3, "change", "checked"]], template: function MqttComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "authenticated-user-only")(1, "se-mqtt-settings", 0);
        \u0275\u0275twoWayListener("selectedPrefixesChange", function MqttComponent_Template_se_mqtt_settings_selectedPrefixesChange_1_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPrefixes, $event) || (ctx.selectedPrefixes = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "details", 1)(3, "summary");
        \u0275\u0275text(4, "Filter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "main")(6, "label")(7, "input", 2);
        \u0275\u0275listener("input", function MqttComponent_Template_input_input_7_listener($event) {
          return ctx.setSearchText($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function MqttComponent_Template_button_click_8_listener() {
          return ctx.setSearchText("");
        });
        \u0275\u0275text(9, " \u2715 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(10, MqttComponent_For_11_Template, 3, 2, "label", null, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 4);
        \u0275\u0275element(13, "se-pair-button", 5);
        \u0275\u0275repeaterCreate(14, MqttComponent_For_15_Template, 1, 1, "power-meter", 6, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("selectedPrefixes", ctx.selectedPrefixes);
        \u0275\u0275property("powerUsage", ctx.powerUsage());
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.search().searchText);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.search().booleanOptions);
        \u0275\u0275advance(3);
        \u0275\u0275property("selectedPrefixes", ctx.selectedPrefixes());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.powerMetersFiltered());
      }
    }, dependencies: [
      PowerMeterComponent,
      PairButtonComponent,
      MqttSettingsComponent,
      AuthenticadedUserOnlyComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  padding: 1rem;\n  --color-success: #1b3003;\n  --color-error: #351411;\n}\ndiv.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));\n  gap: 10px;\n  --meter-backgroundColor: var(--surface-3);\n}\ndiv.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  min-inline-size: 10rem;\n  min-block-size: 30lh;\n  padding: 1rem;\n  overflow: auto;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\ndiv.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-block-end: 1rem;\n}\ndiv.toolbar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 0.5rem;\n  overflow: auto;\n}\n.searchBar[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.searchBar[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: transparent;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.5rem;\n}\n.searchBar[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:has(button) {\n  background: var(--surface-3);\n  gap: 0;\n  padding: 0;\n  margin: 0;\n}\n@media (max-width: 700px) {\n  .searchBar[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\ndiv.devGrid[_ngcontent-%COMP%] {\n  margin-block-start: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  gap: 0.5rem;\n}\ndiv.devGrid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 1rem;\n  overflow: auto;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MqttComponent, [{
    type: Component,
    args: [{ selector: "se-mqtt", imports: [
      PowerMeterComponent,
      PairButtonComponent,
      MqttSettingsComponent,
      AuthenticadedUserOnlyComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [ZigbeeService], template: `<authenticated-user-only>
  <se-mqtt-settings [(selectedPrefixes)]="selectedPrefixes" [powerUsage]="powerUsage()" />
  <details class="searchBar">
    <summary>Filter</summary>
    <main>
      <label>
        <input
          type="search"
          class="search"
          placeholder="Search name"
          aria-label="Search devices"
          [value]="search().searchText"
          (input)="setSearchText($any($event.target).value)"
        />
        <button type="button" title="Clear search" (click)="setSearchText('')">
          \u2715
        </button>
      </label>
      @for (opt of search().booleanOptions; track opt.name) {
        <label>
          <input
            type="checkbox"
            [checked]="opt.value === true"
            (change)="
              setBooleanOption(
                opt.name,
                $any($event.target).checked ? true : undefined
              )
            "
          />
          {{ opt.description || opt.name }}
        </label>
      }
    </main>
  </details>
  <div class="devGrid">
    <se-pair-button [selectedPrefixes]="selectedPrefixes()" />

    @for (device of powerMetersFiltered(); track device.ieeeAddress) {
      <power-meter [ieeeAddress]="device.ieeeAddress" />
    }
  </div>
</authenticated-user-only>
`, styles: ["/* src/app/mqtt/mqtt.component.css */\n:host {\n  display: block;\n  padding: 1rem;\n  --color-success: #1b3003;\n  --color-error: #351411;\n}\ndiv.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));\n  gap: 10px;\n  --meter-backgroundColor: var(--surface-3);\n}\ndiv.grid * {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  min-inline-size: 10rem;\n  min-block-size: 30lh;\n  padding: 1rem;\n  overflow: auto;\n}\nlabel {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\ndiv.toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-block-end: 1rem;\n}\ndiv.toolbar > * {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 0.5rem;\n  overflow: auto;\n}\n.searchBar main {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.searchBar main label {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: transparent;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.5rem;\n}\n.searchBar main label:has(button) {\n  background: var(--surface-3);\n  gap: 0;\n  padding: 0;\n  margin: 0;\n}\n@media (max-width: 700px) {\n  .searchBar main {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\ndiv.devGrid {\n  margin-block-start: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  gap: 0.5rem;\n}\ndiv.devGrid * {\n  background: var(--surface-3);\n  border-radius: 1rem;\n  padding: 1rem;\n  overflow: auto;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MqttComponent, { className: "MqttComponent", filePath: "src/app/mqtt/mqtt.component.ts", lineNumber: 46 });
})();
export {
  MqttComponent
};
