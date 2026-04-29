import {
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/observable-state/observable-state.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./observable-state.component-P5MDSZ2C.js").then((m) => m.ObservableStateComponent)
  }, false ? { \u0275entryName: "app/observable-state/observable-sate/observable-state.component.ts" } : {}),
  __spreadValues({
    path: "hook",
    loadComponent: () => import("./lifeycle-hooks-sample.component-U3JXDDDG.js").then((m) => m.LifeycleHooksSampleComponent)
  }, false ? { \u0275entryName: "app/observable-state/lifeycle-hooks-sample/lifeycle-hooks-sample.component.ts" } : {}),
  { path: "**", redirectTo: "" }
];
export {
  routes
};
