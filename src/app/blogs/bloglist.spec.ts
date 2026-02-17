import { TestBed } from '@angular/core/testing';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Bloglist } from './bloglist';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const articleListPath = resolve(process.cwd(), 'articles/articleList.json');
const articleListJson = JSON.parse(readFileSync(articleListPath, 'utf8')) as any[];

describe('Bloglist (prerender guard)', () => {
  beforeEach(() => {
    // stub global fetch so httpResource can read the articles list during tests
    vi.stubGlobal('fetch', (input: RequestInfo) => {
      const url = typeof input === 'string' ? input : String(input);
      if (url.endsWith('/assets/articles/articleList.json')) {
        return Promise.resolve(new Response(JSON.stringify(articleListJson), { status: 200 }));
      }
      return Promise.resolve(new Response(null, { status: 404 }));
    });

    TestBed.configureTestingModule({
      providers: [Bloglist, provideHttpClient(withFetch())]
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('idList returns a non-empty set of route params', async () => {
    const svc = TestBed.inject(Bloglist);
    const ids = await svc.idList();
    expect(ids.length).toBeGreaterThan(0);
    // should include at least one published-by-name route and an id-based route
    expect(ids.some(i => typeof i.id === 'string')).toBeTruthy();
  });

  it('idList matches articles/articleList.json', async () => {
    const svc = TestBed.inject(Bloglist);
    const ids = await svc.idList();

    const actual = ids.map(i => i.id).sort();
    const expected = articleListJson.flatMap((a: any) => (a.published ? [a.id, a.name] : [a.id])).sort();

    expect(actual).toEqual(expected);
  });
});
