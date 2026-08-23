import {
  __spreadValues
} from "./chunk-MJUTT27M.js";

// src/app/test/test.routes.ts
var routes = [
  __spreadValues({
    path: "testob",
    loadComponent: () => import("./test.component-CP2XQD4N.js").then((m) => m.TestComponent)
  }, false ? { \u0275entryName: "app/test/test/test.component.ts" } : {}),
  { path: "**", redirectTo: "testob" }
];
export {
  routes
};
