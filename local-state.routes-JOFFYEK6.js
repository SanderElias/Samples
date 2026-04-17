import {
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/local-state/local-state.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./local-state.component-5RBMRSWM.js").then((m) => m.LocalStateComponent),
    children: [
      {
        path: ":id",
        loadComponent: () => import("./ls-home.component-4ETXTLDP.js").then((m) => m.LsHomeComponent)
      },
      { path: "", redirectTo: "./1", pathMatch: "full" }
    ]
  }, false ? { \u0275entryName: "app/local-state/local-state.component.ts" } : {})
];
export {
  routes
};
