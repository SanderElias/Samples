import {
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/rvt/routes.ts
var routes = [
  __spreadValues({
    path: "template",
    loadComponent: () => import("./template.component-YIJPHKVS.js")
  }, false ? { \u0275entryName: "app/rvt/template/template.component.ts" } : {}),
  __spreadValues({
    path: "reactive",
    loadComponent: () => import("./reactive.component-EYTZPOMR.js")
  }, false ? { \u0275entryName: "app/rvt/reactive/reactive.component.ts" } : {}),
  __spreadValues({ path: "", loadComponent: () => import("./both.component-OVZKS3KS.js") }, false ? { \u0275entryName: "app/rvt/both/both.component.ts" } : {}),
  { path: "**", redirectTo: "both" }
];
var routes_default = routes;
export {
  routes_default as default
};
