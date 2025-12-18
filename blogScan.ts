import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Id } from './src/app/in-mem-sample/in-mem.model';
import { createUniqueId } from './src/app/util/random-things.ts';

export const createId = () => createUniqueId() as Id


const curPath = import.meta.dirname;
const articlesPath = join(curPath, './articles');
const files = await readdir(articlesPath, { withFileTypes: true });
const articleListPath = join(articlesPath, 'articleList.json');

interface Article {
  id: Id;
  name: string;
  title: string;
  description: string;
  tags: string[];
  published?: boolean;
  dateAdded: string;
}

const articles: Article[] = [];

try {
  const existingData = JSON.parse(await readFile(articleListPath, 'utf-8'));
  console.log('Existing article list found:', existingData);
  existingData.forEach((art: Article) => {});
} catch {
  console.log('No existing article list found, generating new one.');
}

for (const file of files) {
  if (file.isFile() && file.name.endsWith('.md')) {
    try {
      const name = file.name.substring(0, file.name.length - 3);
      const path = join(articlesPath, file.name);
      const contents = await readFile(path, 'utf-8');
      const title = contents.match(/# (.*)/);
      const idx = articles.findIndex(a => a.name === name);
      if (idx === -1) {
        articles.push({
          id: createId(),
          description: '',
          tags: [],
          name,
          title: title ? title[1] : 'Untitled',
          published: false,
          dateAdded: new Date().toISOString()
        });
      } else {
        articles[idx].title = title ? title[1] : articles[idx].title;
      }
    } catch (err) {
      console.error(`Error reading file ${file.name}:`, err);
    }
  }
}

if (articles.length === 0) {
  console.warn('No articles found to write to articleList.json');
} else {
  await writeFile(articleListPath, JSON.stringify(articles, null, 2), 'utf-8');
  console.log(`Wrote ${articles.length} articles to articleList.json`);
}
