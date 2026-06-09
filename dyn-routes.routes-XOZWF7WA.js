import {
  DOCUMENT,
  inject
} from "./chunk-ZOLZPPMV.js";
import "./chunk-I7IR7MPC.js";

// src/app/dyn-route/dyn-routes.routes.ts
var possibleComponents = {
  foo: () => import("./foo.component-IEFV24VA.js").then((m) => m.FooComponent),
  bar: () => import("./bar.component-RIYMG6DD.js").then((m) => m.BarComponent),
  baz: () => import("./baz.component-A3RVPIZQ.js").then((m) => m.BazComponent)
};
var dynRoutes = [
  {
    path: "",
    loadComponent: async () => {
      const window = inject(DOCUMENT).defaultView;
      const option = new URL(window.location.href).searchParams.get("comp") ?? "baz";
      console.log("Dynamically loading component:", option);
      return possibleComponents[option]();
    }
  }
];
export {
  dynRoutes
};
