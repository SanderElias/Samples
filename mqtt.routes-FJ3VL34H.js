import {
  __spreadValues
} from "./chunk-MJUTT27M.js";

// src/app/mqtt/mqtt.routes.ts
var routes = [
  __spreadValues({
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./menu.component-67VKZNNL.js").then((m) => m.MenuComponent)
  }, false ? { \u0275entryName: "app/mqtt/menu/menu.component.ts" } : {}),
  __spreadValues({
    path: "list",
    loadComponent: () => import("./device-list.component-VYIO7JVE.js").then((m) => m.DeviceListComponent)
  }, false ? { \u0275entryName: "app/mqtt/device-list.component.ts" } : {}),
  __spreadValues({
    path: "power",
    loadComponent: () => import("./mqtt.component-ULYBRLNK.js").then((m) => m.MqttComponent)
  }, false ? { \u0275entryName: "app/mqtt/mqtt.component.ts" } : {})
];
export {
  routes
};
