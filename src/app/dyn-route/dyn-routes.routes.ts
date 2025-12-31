import { DOCUMENT, inject } from '@angular/core';
import { Route } from '@angular/router';

const possibleComponents = {
  foo: () => import('./foo/foo.component').then(m => m.FooComponent),
  bar: () => import('./bar/bar.component').then(m => m.BarComponent),
  baz: () => import('./baz/baz.component').then(m => m.BazComponent)
};

export const dynRoutes: Route[] = [
  {
    path: '',
    loadComponent: async () => {
      const window = inject(DOCUMENT).defaultView!;
      const option = (new URL(window.location.href).searchParams.get("comp") ?? "baz") as keyof typeof possibleComponents;
      console.log('Dynamically loading component:', option);
      return possibleComponents[option]();
    }
  }
];





