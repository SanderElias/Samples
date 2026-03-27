import { devices, expect, test } from '@playwright/test';

const BASE = 'http://localhost:4204';

const POSTS = [
  { id: 'list',              name: 'blog-list',           title: 'blog list page' },
  { id: 'vTjn3EjDgIcljkmM', name: '404',                 title: 'Article not found.' },
  { id: 'w2jw3vjIgFcpjrmo', name: 'about',               title: "What's this all 'bout?" },
  { id: 'wDje3njxg2cnjZmT', name: 'code-guidish',        title: 'Code/Style guidelines' },
  { id: 'wVjz34jxggcejlmR', name: 'dry-kiss',            title: 'Dry kiss Yagni ASAP.' },
  { id: 'wEjI3tjog1cdjjmE', name: 'enum',                title: "what about ENUM's" },
  { id: 'xOjX3IjHg5ckjImW', name: 'the-year-2038',      title: 'The year 2038 problem' },
  { id: 'xYj937jtgycHjWm1', name: 'welcome',             title: 'welcome' },
  { id: 'x2jb3xjzg6cgjEmn', name: 'what-is-data',       title: 'What is data' },
  { id: 'xCgWt94YrscijEmA', name: 'angular-signals-www',title: 'Angular Signals WWW' },
  { id: 'rtvui0r9ycgGjLmz', name: 'use-the-platform',   title: 'use the platform' },
  { id: 'bofLwbpvxlqejmml', name: 'component-styling',  title: 'Component Styling' },
  { id: '9Mgg7tw79EsOjvm8', name: 'css-specificity',    title: 'CSS specificity' },
  { id: 'eplS4feKm5whjZmY', name: 'todo',               title: 'List of things still to do' },
  { id: '8G8isa16rm3AkTmN', name: 'resource-do-and-donts', title: 'Let us resource all the things!' },
  { id: 'u89borhC8WqHl2ms', name: 'performance',        title: 'Performance' },
  { id: 'gs6RhX9W76tAlFmM', name: 'why-angular',        title: 'Why Angular?' },
  { id: 'wbc1c3mJqnuDlymf', name: 'icons',              title: 'Icons!' },
  { id: 'u75TnYk9lG5nnkmR', name: 'state-of-state',     title: 'Stating the state of state' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

// Collect all console errors per page
function collectErrors(page: any) {
  const errors: string[] = [];
  page.on('console', (msg: any) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err: any) => errors.push(`PAGE ERROR: ${err.message}`));
  return errors;
}

for (const vp of VIEWPORTS) {
  test.describe(`Blog – ${vp.name} (${vp.width}×${vp.height})`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    for (const post of POSTS) {
      test(`${post.name}`, async ({ page }, testInfo) => {
        const errors = collectErrors(page);
        const url = post.id === 'list' ? `${BASE}/blog` : `${BASE}/blog/${post.id}`;

        await page.goto(url, { waitUntil: 'networkidle' });

        // Wait for article content to appear (defer hydration means it may load async)
        await page.waitForSelector('article.rich-text, h1', { timeout: 10000 });

        // Extra wait for any deferred content / syntax highlighting
        await page.waitForTimeout(800);

        // Full-page screenshot
        const screenshotPath = `${testInfo.outputDir}/../screenshots/${vp.name}-${testInfo.project.name}-${post.name}.png`;
        await page.screenshot({
          path: screenshotPath,
          fullPage: true,
          animations: 'disabled'
        });

        // --- Assertions ---

        // Page should not be blank
        const h1 = await page.locator('h1').first().textContent();
        expect(h1?.trim().length, 'h1 should not be empty').toBeGreaterThan(0);

        // No JS errors
        expect(errors, `Console errors on ${post.name}`).toHaveLength(0);

        // Article should have rendered content (not empty)
        const articleText = await page.locator('article.rich-text').textContent().catch(() => '');
        expect(articleText?.trim().length ?? 0, 'Article content should not be empty').toBeGreaterThan(0);

        // No obvious horizontal overflow (scrollWidth > clientWidth indicates overflow)
        const hasHorizontalOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
        });
        expect(hasHorizontalOverflow, `Horizontal overflow on ${post.name} @ ${vp.name}`).toBe(false);

        // Code blocks should be visible if present
        const codeBlocks = await page.locator('pre code').count();
        if (codeBlocks > 0) {
          const firstCode = page.locator('pre code').first();
          await expect(firstCode).toBeVisible();
          // Check code block doesn't overflow its container
          const overflow = await firstCode.evaluate((el: Element) => {
            const pre = el.closest('pre')!;
            return pre.scrollHeight > pre.clientHeight + 2 && getComputedStyle(pre).overflow === 'hidden';
          });
          expect(overflow, `Code block clipped on ${post.name} @ ${vp.name}`).toBe(false);
        }

        // Images should load (no broken images)
        const imgCount = await page.locator('article img').count();
        if (imgCount > 0) {
          const brokenImages = await page.evaluate(() =>
            [...document.querySelectorAll('article img')]
              .filter((img: any) => !img.complete || img.naturalWidth === 0)
              .map((img: any) => img.src)
          );
          expect(brokenImages, `Broken images on ${post.name}`).toHaveLength(0);
        }
      });
    }
  });
}
