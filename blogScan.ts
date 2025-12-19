import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Id } from './src/app/in-mem-sample/in-mem.model';
import { createUniqueId } from './src/app/util/random-things.ts';

export const createId = () => createUniqueId() as Id;

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

if (await stat(articleListPath).catch(() => false)) {
  try {
    const existingData = JSON.parse(await readFile(articleListPath, 'utf-8'));
    existingData.forEach((art: Article) => {
      articles.push(art);
    });
  } catch {
    console.log('Error reading existing articleList.json. exiting.');
    process.exit(1);
  }
} else {
  console.log('No existing articleList.json found. A new one will be created.');
}

let changes = 0;

for (const file of files) {
  if (file.isFile() && file.name.endsWith('.md')) {
    try {
      const name = file.name.substring(0, file.name.length - 3);
      const path = join(articlesPath, file.name);
      const contents = await readFile(path, 'utf-8');
      const titleSearch = contents.match(/# (.*)/);
      const title = titleSearch ? titleSearch[1] : 'Untitled';
      const idx = articles.findIndex(a => a.name === name);
      if (idx === -1) {
        articles.push({
          id: createId(),
          description: '',
          tags: [],
          name,
          title,
          published: false,
          dateAdded: new Date().toISOString()
        });
        changes += 1;
      } else {
        if (articles[idx].title !== title) {
          articles[idx].title = title;
          changes += 1;
        }
      }
    } catch (err) {
      console.error(`Error reading file ${file.name}:`, err);
    }
  }
}

if (changes === 0) {
  console.warn('No updated articles found to write to articleList.json');
} else {
  await writeFile(articleListPath, JSON.stringify(articles, null, 2), 'utf-8');
  console.log(`Wrote ${articles.length} articles to articleList.json`);
}
