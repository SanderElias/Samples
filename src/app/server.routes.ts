import { inject } from '@angular/core';
import type { ServerRoute } from '@angular/ssr';
import { RenderMode } from '@angular/ssr';
import { Bloglist } from './blogs/bloglist';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => inject(Bloglist).idList()
  },
  {
    path: 'localState/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'crudStuff',
    renderMode: RenderMode.Client
  },
  {
    path: 'unsubSample/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'mqtt',
    renderMode: RenderMode.Client
  },
  {
    path: 'mqtt/list',
    renderMode: RenderMode.Client
  },
  {
    path: 'svgTest',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
