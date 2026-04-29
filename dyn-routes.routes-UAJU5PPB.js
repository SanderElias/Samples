import {
  DOCUMENT,
  inject
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/dyn-route/dyn-routes.routes.ts
var possibleComponents = {
  foo: () => import("./foo.component-EF3IR2V2.js").then((m) => m.FooComponent),
  bar: () => import("./bar.component-CQ2TSLLR.js").then((m) => m.BarComponent),
  baz: () => import("./baz.component-FFMPQXGG.js").then((m) => m.BazComponent)
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
