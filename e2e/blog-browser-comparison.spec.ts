import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { chromium, expect, firefox, test, webkit } from '@playwright/test';
import type { BrowserType, ConsoleMessage, Page, Request } from '@playwright/test';

interface ArticleEntry {
  id: string;
}

interface PageSummary {
  title: string;
  h1: string | null;
  articleTextLength: number;
  svgCount: number;
  mermaidCount: number;
  mermaidSvgCount: number;
  imgCount: number;
  preCount: number;
  blockquoteCount: number;
  hasMermaidSvg: boolean;
}

const BASE = 'http://localhost:4204';
const VIEWPORT = { width: 900, height: 720 };
const TRACKING_ORIGIN = 'https://track.eliasweb.nl/track';

const articleList: ArticleEntry[] = JSON.parse(
  readFileSync(resolve(process.cwd(), 'articles/articleList.json'), 'utf8')
);
const routes = ['blog', ...articleList.map(article => article.id)] as const;
type BrowserName = 'chromium' | 'firefox' | 'webkit';
const browsers: ReadonlyArray<readonly [BrowserName, BrowserType]> = [
  ['chromium', chromium],
  ['firefox', firefox],
  ['webkit', webkit]
] as const;

function collectRouteErrors(page: Page) {
  const errors: string[] = [];

  const onConsole = (message: ConsoleMessage) => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  };

  const onPageError = (error: Error) => {
    errors.push(`PAGE: ${error.message}`);
  };

  const onRequestFailed = (request: Request) => {
    if (
      request.url() === TRACKING_ORIGIN ||
      request.url().startsWith(`${TRACKING_ORIGIN}?`)
    ) {
      return;
    }

    const failure = request.failure();
    errors.push(`REQ: ${request.url()} :: ${failure?.errorText ?? 'unknown'}`);
  };

  page.on('console', onConsole);
  page.on('pageerror', onPageError);
  page.on('requestfailed', onRequestFailed);

  return {
    errors,
    dispose() {
      page.off('console', onConsole);
      page.off('pageerror', onPageError);
      page.off('requestfailed', onRequestFailed);
    }
  };
}

async function summarizePage(page: Page): Promise<PageSummary> {
  return page.evaluate(() => {
    const article = document.querySelector('article');
    const diagram = document.querySelector('mermaid-diagram');

    return {
      title: document.title,
      h1: document.querySelector('h1')?.textContent?.trim() ?? null,
      articleTextLength: article?.textContent?.trim().length ?? 0,
      svgCount: document.querySelectorAll('svg').length,
      mermaidCount: document.querySelectorAll('mermaid-diagram').length,
      mermaidSvgCount: document.querySelectorAll('mermaid-diagram svg').length,
      imgCount: document.querySelectorAll('img').length,
      preCount: document.querySelectorAll('pre').length,
      blockquoteCount: document.querySelectorAll('blockquote').length,
      hasMermaidSvg: !!diagram?.querySelector('svg')
    };
  });
}

function compareSummaries(
  baseline: Record<string, PageSummary>,
  current: Record<string, PageSummary>
) {
  const comparableKeys = [
    'title',
    'h1',
    'articleTextLength',
    'svgCount',
    'mermaidCount',
    'mermaidSvgCount',
    'imgCount',
    'preCount',
    'blockquoteCount',
    'hasMermaidSvg'
  ] as const;
  const diffs: Array<{
    route: string;
    key: (typeof comparableKeys)[number];
    baseline: PageSummary[(typeof comparableKeys)[number]];
    current: PageSummary[(typeof comparableKeys)[number]];
  }> = [];

  for (const route of routes) {
    const base = baseline[route];
    const next = current[route];

    for (const key of comparableKeys) {
      if (base[key] === next[key]) {
        continue;
      }

      diffs.push({
        route,
        key,
        baseline: base[key],
        current: next[key]
      });
    }
  }

  return diffs;
}

test.describe('blog article cross-browser rendering', () => {
  test.skip(
    ({ browserName }) => browserName !== 'chromium',
    'This spec launches Chromium, Firefox, and WebKit manually, so it only needs one project run.'
  );

  test.setTimeout(120_000);

  test('matches the browser comparison sweep', async () => {
    const output: Partial<Record<BrowserName, Record<string, PageSummary>>> = {};
    const problems: Array<{ browser: BrowserName; route: string; errors: string[] }> = [];

    for (const [browserName, browserType] of browsers) {
      const browser = await browserType.launch({ headless: true });
      const page = await browser.newPage({
        viewport: VIEWPORT,
        colorScheme: 'dark'
      });

      const summaries: Record<string, PageSummary> = {};

      for (const route of routes) {
        const url = route === 'blog' ? `${BASE}/blog` : `${BASE}/blog/${route}`;
        const routeErrors = collectRouteErrors(page);

        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('h1', { timeout: 15_000 });
        await page.waitForFunction(
          () => {
            const diagram = document.querySelector('mermaid-diagram');
            return !diagram || !!diagram.querySelector('svg');
          },
          { timeout: 15_000 }
        );
        await page.waitForTimeout(500);

        summaries[route] = await summarizePage(page);

        if (routeErrors.errors.length > 0) {
          problems.push({
            browser: browserName,
            route,
            errors: routeErrors.errors
          });
        }

        routeErrors.dispose();
      }

      output[browserName] = summaries;
      await browser.close();
    }

    const baseline = output.chromium;
    expect(baseline).toBeDefined();

    const diffs = [
      ...compareSummaries(baseline!, output.firefox!),
      ...compareSummaries(baseline!, output.webkit!)
    ];

    expect(problems, JSON.stringify(problems, null, 2)).toEqual([]);
    expect(diffs, JSON.stringify(diffs, null, 2)).toEqual([]);
  });
});
