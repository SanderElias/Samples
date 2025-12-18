import type { ServerRoute } from '@angular/ssr';
import { RenderMode } from '@angular/ssr';

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
    getPrerenderParams: getArticles
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

async function getArticles(): Promise<{ id: string }[]> {
  // throw new Error('Not implemented yet');
  try {
    const {  readFile } = await import('node:fs/promises');
    const { join } = await import('node:path');

    const curPath = import.meta.dirname;
    const articlesPath = join(curPath, '../../articles');
    const files = JSON.parse(await readFile(articlesPath, 'utf-8'));
    return files.map((f: { id: string }) => ({ id: f.id }));
  } catch (err) {
    console.error('Error reading articles:', err);
    return [{ id: 'error-during-reading-articles' }];
  }
}
