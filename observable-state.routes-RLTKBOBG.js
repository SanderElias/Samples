import {
  __spreadValues
} from "./chunk-I7IR7MPC.js";

// src/app/observable-state/observable-state.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./observable-state.component-OWXR7MF6.js").then((m) => m.ObservableStateComponent)
  }, false ? { \u0275entryName: "app/observable-state/observable-sate/observable-state.component.ts" } : {}),
  __spreadValues({
    path: "hook",
    loadComponent: () => import("./lifeycle-hooks-sample.component-XSPPSV5Q.js").then((m) => m.LifeycleHooksSampleComponent)
  }, false ? { \u0275entryName: "app/observable-state/lifeycle-hooks-sample/lifeycle-hooks-sample.component.ts" } : {}),
  { path: "**", redirectTo: "" }
];
export {
  routes
};
