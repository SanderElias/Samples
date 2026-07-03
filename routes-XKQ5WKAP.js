import {
  __spreadValues
} from "./chunk-MJUTT27M.js";

// src/app/rvt/routes.ts
var routes = [
  __spreadValues({
    path: "template",
    loadComponent: () => import("./template.component-2J5KOIJI.js")
  }, false ? { \u0275entryName: "app/rvt/template/template.component.ts" } : {}),
  __spreadValues({
    path: "reactive",
    loadComponent: () => import("./reactive.component-NOMGPT7P.js")
  }, false ? { \u0275entryName: "app/rvt/reactive/reactive.component.ts" } : {}),
  __spreadValues({ path: "", loadComponent: () => import("./both.component-V3QLDJ4J.js") }, false ? { \u0275entryName: "app/rvt/both/both.component.ts" } : {}),
  { path: "**", redirectTo: "both" }
];
var routes_default = routes;
export {
  routes_default as default
};
