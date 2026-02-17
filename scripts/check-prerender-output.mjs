import { readFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';
import { resolve } from 'node:path';

const workspaceRoot = process.cwd();
const articleListPath = resolve(workspaceRoot, 'articles/articleList.json');
const distBrowserBlog = resolve(workspaceRoot, 'dist/samples/browser/blog');

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const raw = await readFile(articleListPath, 'utf8');
  const articles = JSON.parse(raw);
  const missing = [];

  for (const a of articles) {
    if (!a || !a.id) continue;
    const p = resolve(distBrowserBlog, a.id, 'index.html');
    if (!await exists(p)) missing.push(a.id);
  }

  if (missing.length) {
    console.error('Prerender verification failed — missing article pages for ids:');
    for (const m of missing) console.error('  -', m);
    process.exit(1);
  }

  console.log('Prerender verification OK — all article pages present (', articles.length, 'items ).');
}

main().catch(err => {
  console.error(err);
  process.exit(2);
});
