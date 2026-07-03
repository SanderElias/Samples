import {
  DOCUMENT,
  inject
} from "./chunk-WRH363D4.js";
import "./chunk-MJUTT27M.js";

// src/app/dyn-route/dyn-routes.routes.ts
var possibleComponents = {
  foo: () => import("./foo.component-7KOIBGG6.js").then((m) => m.FooComponent),
  bar: () => import("./bar.component-DWGL5IRD.js").then((m) => m.BarComponent),
  baz: () => import("./baz.component-MBFR3CBK.js").then((m) => m.BazComponent)
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
