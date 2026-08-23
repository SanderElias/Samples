import {
  DOCUMENT,
  inject
} from "./chunk-ZHU3EOU4.js";
import "./chunk-MJUTT27M.js";

// src/app/dyn-route/dyn-routes.routes.ts
var possibleComponents = {
  foo: () => import("./foo.component-GYPBDVAE.js").then((m) => m.FooComponent),
  bar: () => import("./bar.component-L6JWO7ID.js").then((m) => m.BarComponent),
  baz: () => import("./baz.component-KP4JUO3W.js").then((m) => m.BazComponent)
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
