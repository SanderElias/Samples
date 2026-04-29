import {
  ZigbeeService
} from "./chunk-POLD3GFA.js";
import "./chunk-OQL45LK2.js";
import "./chunk-VXMY7OGO.js";
import "./chunk-M2H64NNW.js";
import "./chunk-V5IPUR26.js";
import "./chunk-KQ7WRSUA.js";
import "./chunk-G7MDJQAV.js";
import "./chunk-XUVHIZKL.js";
import "./chunk-CL5T3IPD.js";
import "./chunk-6PJN4QOU.js";
import "./chunk-UNRJB5KN.js";
import "./chunk-4UOFC3SS.js";
import "./chunk-TWVYKLAR.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/mqtt/device-list.component.ts
function DeviceListComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const device_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r1.friendly_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r1.definition == null ? null : device_r1.definition.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.exposes(device_r1));
  }
}
var DeviceListComponent = class _DeviceListComponent {
  constructor() {
    this.zigbee = inject(ZigbeeService);
    this.devices = computed(
      () => this.zigbee.devices().filter((d) => d.definition?.options?.some((o) => o.name === "state_action")).sort((a, b) => a.friendly_name.localeCompare(b.friendly_name)),
      ...ngDevMode ? [{ debugName: "devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  exposes(d) {
    console.dir(d.definition?.options);
    return d.definition?.options?.map((e) => e.name ?? "unknown") || [];
  }
  static {
    this.\u0275fac = function DeviceListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeviceListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceListComponent, selectors: [["app-device-list"]], decls: 14, vars: 0, template: function DeviceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h2");
        \u0275\u0275text(1, "Zigbee Devices");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "table")(3, "thead")(4, "tr")(5, "th");
        \u0275\u0275text(6, "Friendly Name");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "th");
        \u0275\u0275text(8, "Description");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "th");
        \u0275\u0275text(10, "Options");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(11, "tbody");
        \u0275\u0275repeaterCreate(12, DeviceListComponent_For_13_Template, 7, 3, "tr", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.devices());
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceListComponent, [{
    type: Component,
    args: [{
      selector: "app-device-list",
      standalone: true,
      imports: [],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <h2>Zigbee Devices</h2>
    <table>
      <thead>
        <tr>
          <th>Friendly Name</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        @for (device of devices(); track device) {
          <tr>
            <td>{{ device.friendly_name }}</td>
            <td>{{ device.definition?.description }}</td>
            <td>{{ exposes(device) }}</td>
          </tr>
        }
      </tbody>
    </table>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceListComponent, { className: "DeviceListComponent", filePath: "src/app/mqtt/device-list.component.ts", lineNumber: 38 });
})();
export {
  DeviceListComponent
};
