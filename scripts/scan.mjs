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
  console.log('No existing routes.json found, or error during JSON parsing. exiting');
  process.exit(1);
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
  console.log(`Finished traversing routes.ts, found ${manualTraverse.length} routes.`);
}

// merge in the articles from the articleList.json
if (await stat(articleListPath).catch(() => false)) {
  try {
    const existingData = JSON.parse(await readFile(articleListPath, 'utf-8'));
    existingData.forEach(art => {
      manualTraverse.push({
        path: `/blog/${art.id}`,
        modulePath: `/articles/${art.id}.md`,
        gitFolder: `${gitBase}/articles/`,
        title: art.title
      });
      if (art.published) {
        manualTraverse.push({
          path: `/blog/${art.name}`,
          modulePath: `/articles/${art.name}.md`,
          gitFolder: `${gitBase}/articles/`,
          title: art.title
        });
        // console.log(`Added article route for /blog/${art.name}`);
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

const newRoutes = [];
// loop over the manually traversed routes and add them to the new routes list
for (const route of manualTraverse) {
  const old = oldRoutes.find(r => r.path === route.path);
  if (old) {
    // merge the old route with the new route
    const newRoute ={
      ...old,
      modulePath: route.modulePath,
      gitFolder: `${gitBase}${route.modulePath}`
    }
    if (route.path.startsWith('/blog/') ) {
      // if its an article route, update the title
      if (route.title !== old.title) {
        newRoute.title = route.title;
        newRoute.largeImage = undefined; // force new snapshot
      }
      newRoute.gitFolder = `${gitBase}/articles/`;
    }
    newRoutes.push(newRoute);
  } else {
    // shiny new thing
    newRoutes.push(route);
  }
}

// loop over the old routes to find any that are missing in the new routes
for (const oldRoute of oldRoutes) {
  const found = newRoutes.find(r => r.path === oldRoute.path);
  if (!found) {
    newRoutes.push(oldRoute);
  }
}

// console.table(newRoutes.map(row => ({ path: row.path, title: row.title, largeImage: row.largeImage ? 'yes' : 'no' })));
// process.exit(0);


// We now have all routes, new and old, merged into newRoutes
const sortedResult = newRoutes.sort((a, b) => a.path.localeCompare(b.path));
for (const route of sortedResult) {
  route.description ??= '';
  if (!route.largeImage || !(await fileExists(join(srcFolder, route.largeImage)))) {
    console.log(`No large image for ${route.path}, creating snapshot...`);
    const newRouteInfo = await createSnapshotFor(route);
    route.largeImage = newRouteInfo.largeImage;
    /** give the CLI a bit of time */
    await new Promise(r => setTimeout(r, 200));
  }
}

// console.table(sortedRoutes.map(row => ({ path: row.path, title: row.title, largeImage: row.largeImage ? 'yes' : 'no' })));

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
