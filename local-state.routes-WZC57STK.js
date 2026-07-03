import {
  __spreadValues
} from "./chunk-MJUTT27M.js";

// src/app/local-state/local-state.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./local-state.component-PJIDM6PB.js").then((m) => m.LocalStateComponent),
    children: [
      {
        path: ":id",
        loadComponent: () => import("./ls-home.component-P3XGP4IK.js").then((m) => m.LsHomeComponent)
      },
      { path: "", redirectTo: "./1", pathMatch: "full" }
    ]
  }, false ? { \u0275entryName: "app/local-state/local-state.component.ts" } : {})
];
export {
  routes
};
