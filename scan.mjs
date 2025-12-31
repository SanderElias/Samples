import { constants, readFileSync, writeFileSync } from 'fs';
import { access } from 'fs/promises';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'path';
import { cwd } from 'process';
import { traverseRoutes } from './routeTraverse.mjs';
import { closeBrowser, createSnapshotFor } from './snapshots.mjs';

/** this is all for internal use, so the hardcoded paths and urls are not a problem */
const folder = process.cwd();
const routesFile = join(folder, 'src/assets/routes.json');
const tsconfig = join(folder, './src/tsconfig.app.json');
const gitBase = 'https://github.com/SanderElias/Samples/tree/main';
const articleListPath = join(folder, 'articles/articleList.json');
const srcFolder = join(folder, 'src');

/** load and parse the old routes file */
let oldRoutes;
try {
  oldRoutes = JSON.parse(readFileSync(routesFile, 'utf8').toString('utf8') || '') || [];
} catch {
  // resort to an empty array if the file is not found or cant be parsed
  oldRoutes = [];
}

const manualTraverse = [];
// traverse the routes in the app
try {
  await traverseRoutes(join(cwd(), './src/app/routes.ts'), '', manualTraverse);
  manualTraverse.forEach(r => {
    r.gitFolder = `${gitBase}${r.modulePath}`;
  });
} finally {
  // console.dir(manualTraverse.sort((a, b) => a.path.localeCompare(b.path)))
  //.map(r => r.path));
}

// add the blog articles manually
const articles = [];

if (await stat(articleListPath).catch(() => false)) {
  try {
    const existingData = JSON.parse(await readFile(articleListPath, 'utf-8'));
    existingData.forEach(art => {
      if (art.published) {
        manualTraverse.push({
          path: `/blog/${art.name}`,
          modulePath: `/articles/${art.name}.md`,
          gitFolder: `${gitBase}/articles/`,
          title: art.title
        });
        console.log(`Added article route for /blog/${art.name}`);
      }
    });
  } catch {
    console.log('Error reading existing articleList.json. exiting.');
    process.exit(1);
  }
} else {
  console.log('No existing articleList.json found!');
  process.exit(1);
}

// process.exit(0);

const startRoutes = [...oldRoutes, ...manualTraverse]
  .reduce((acc, route) => {
    const found = acc.find(r => r.path === route.path);
    if (!found) {
      acc.push(route);
    }
    return acc;
  }, [])
  .sort((a, b) => a.path.localeCompare(b.path));

// console.dir(startRoutes);
// process.exit(0);

const newRoutes = [];

/** update the existing routes if needed */
for (const route of startRoutes) {
  try {
    // console.log(`processing ${route.path}`);
    const pos = route.path.indexOf(':');
    const path = pos === -1 ? route.path : route.path.substring(0, pos - 1);
    const found = oldRoutes.find(r => r.path === path);
    if (found) {
      if (found.modulePath !== route.modulePath) {
        console.log(`${route.path} has changed`);
        found.modulePath = route.modulePath;
        found.gitFolder = `${gitBase}${route.modulePath}`;
      } else {
        newRoutes.push(found);
        if (found.largeImage && (await fileExists(join(srcFolder, found.largeImage)))) {
          console.log(`${path} already has a large image, skipping snapshot creation`);
          continue; // no need to create a new snapshot
        }
      }
    } else {
      console.log(`${path} has been added`);
      oldRoutes.push({ ...route, path });
    }
    const newRouteInfo = await createSnapshotFor(route);
    newRoutes.push(newRouteInfo);
    /** give the CLI a bit of time */
    await new Promise(r => setTimeout(r, 200));
  } catch (e) {
    console.error(e);
  }
}

/** write the result back into the assets folder */
writeFileSync(routesFile, JSON.stringify(newRoutes, null, 2));
closeBrowser();

async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}
