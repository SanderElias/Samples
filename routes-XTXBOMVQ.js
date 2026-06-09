import {
  __spreadValues
} from "./chunk-I7IR7MPC.js";

// src/app/rvt/routes.ts
var routes = [
  __spreadValues({
    path: "template",
    loadComponent: () => import("./template.component-WLPXERWK.js")
  }, false ? { \u0275entryName: "app/rvt/template/template.component.ts" } : {}),
  __spreadValues({
    path: "reactive",
    loadComponent: () => import("./reactive.component-F62O5Y5C.js")
  }, false ? { \u0275entryName: "app/rvt/reactive/reactive.component.ts" } : {}),
  __spreadValues({ path: "", loadComponent: () => import("./both.component-RLJ63XYT.js") }, false ? { \u0275entryName: "app/rvt/both/both.component.ts" } : {}),
  { path: "**", redirectTo: "both" }
];
var routes_default = routes;
export {
  routes_default as default
};
