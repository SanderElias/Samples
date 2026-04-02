import {
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/test/test.routes.ts
var routes = [
  __spreadValues({
    path: "testob",
    loadComponent: () => import("./test.component-6NTQKLKA.js").then((m) => m.TestComponent)
  }, false ? { \u0275entryName: "app/test/test/test.component.ts" } : {}),
  { path: "**", redirectTo: "testob" }
];
export {
  routes
};
