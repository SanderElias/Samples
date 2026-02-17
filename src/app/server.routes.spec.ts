import { describe, it, expect } from 'vitest';
import { serverRoutes } from './server.routes';

describe('server.routes', () => {
  it('has getPrerenderParams for /blog/:id', () => {
    const r = serverRoutes.find(r => r.path === 'blog/:id');
    expect(r).toBeTruthy();
    expect((r as any).getPrerenderParams).toBeInstanceOf(Function);
  });
});
