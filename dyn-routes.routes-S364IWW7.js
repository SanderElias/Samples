import {
  DOCUMENT,
  inject
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/dyn-route/dyn-routes.routes.ts
var possibleComponents = {
  foo: () => import("./foo.component-RX6NKR5P.js").then((m) => m.FooComponent),
  bar: () => import("./bar.component-ZT3JEETG.js").then((m) => m.BarComponent),
  baz: () => import("./baz.component-RY22T3XN.js").then((m) => m.BazComponent)
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
