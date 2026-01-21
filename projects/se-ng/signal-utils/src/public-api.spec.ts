import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';

describe('API.json / public-api consistency', () => {
  // Resolve paths relative to the repository workspace root to avoid
  // bundler/runtime differences in __dirname when tests are executed.
  const pkgRoot = resolve(process.cwd(), 'projects/se-ng/signal-utils');
  const publicApiPath = resolve(pkgRoot, 'src/public-api.ts');
  const apiJsonPath = resolve(pkgRoot, 'API.json');

  it('API.json exists and is valid JSON', () => {
    expect(existsSync(apiJsonPath)).toBe(true);
    const content = readFileSync(apiJsonPath, 'utf8');
    expect(() => JSON.parse(content)).not.toThrow();
  });

  it('public-api exports correspond to API.json entries', () => {
    const apiJson = JSON.parse(readFileSync(apiJsonPath, 'utf8')) as any;
    const apiNames: string[] = (apiJson.exports ?? []).map((e: any) => e.name).sort();

    const publicApi = readFileSync(publicApiPath, 'utf8');
    const exportRegex = /export\s*{\s*([^}]+)\s*}\s*from\s*['"][^'\"]+['"]/g;
    const found: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = exportRegex.exec(publicApi)) !== null) {
      const inner = m[1];
      inner.split(',').forEach(s => {
        const token = s.trim().split(/\s+as\s+/)[0].trim();
        if (token) found.push(token);
      });
    }
    const publicApiNames = Array.from(new Set(found)).sort();

    const missingInApiJson = publicApiNames.filter(n => !apiNames.includes(n));
    const missingInPublicApi = apiNames.filter(n => !publicApiNames.includes(n));

    expect(missingInApiJson).toEqual([]);
    expect(missingInPublicApi).toEqual([]);
  });

  it('all source files referenced by API.json exist', () => {
    const apiJson = JSON.parse(readFileSync(apiJsonPath, 'utf8')) as any;
    const missingSources: string[] = [];
    for (const e of apiJson.exports ?? []) {
      const sourcePath = resolve(pkgRoot, e.source);
      if (!existsSync(sourcePath)) missingSources.push(e.source);
    }
    expect(missingSources).toEqual([]);
  });

  it('all source files referenced by API.json are linked in README.md', () => {
    const apiJson = JSON.parse(readFileSync(apiJsonPath, 'utf8')) as any;
    const readme = readFileSync(resolve(pkgRoot, 'README.md'), 'utf8');
    const missingLinks: string[] = [];

    for (const e of apiJson.exports ?? []) {
      // Expect a markdown link pointing to the relative source file, e.g. `](./src/path/file.ts)`
      const linkPattern = `](./${e.source})`;
      if (!readme.includes(linkPattern)) missingLinks.push(e.source);
    }

    expect(missingLinks).toEqual([]);
  });

  it('all exports are mentioned in README.md using backticks', () => {
    const apiJson = JSON.parse(readFileSync(apiJsonPath, 'utf8')) as any;
    const readme = readFileSync(resolve(pkgRoot, 'README.md'), 'utf8');
    const missingInReadme: string[] = [];

    for (const e of apiJson.exports ?? []) {
      const name = e.name;
      // Require backticked mention for consistent formatting
      const backtickRegex = new RegExp('`' + name + '`', 'm');
      if (!backtickRegex.test(readme)) {
        missingInReadme.push(name);
      }
    }

    expect(missingInReadme).toEqual([]);
  });
});
