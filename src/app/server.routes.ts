import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
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
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ id: 'dry-kiss' }, { id: 'dry-kiss-2' }]
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
