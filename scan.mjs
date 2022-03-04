import { readFileSync, writeFileSync } from 'fs';
import { parseAngularRoutes } from 'guess-parser';
import { join } from 'path';
import { closeBrowser, createSnapshotFor } from './snapshots.mjs';

/** this is all for internal use, so the hardcoded paths and urls are not a problem */
const folder = process.cwd();
const routesFile = join(folder, 'src/assets/routes.json');
const tsconfig = join(folder, './src/tsconfig.app.json');
const gitBase = 'https://github.com/SanderElias/Samples/tree/main';
/** load and parse the old routes file */
let oldRoutes;
try {
  oldRoutes =
    JSON.parse(readFileSync(routesFile, 'utf8').toString('utf8') || '') || [];
} catch {
  // resort to an empty array if the file is not found or cant be parsed
  oldRoutes = [];
}

/** use the guess-parser to extract all the routes of my app */
const routes = parseAngularRoutes(tsconfig, []).map(r => {
  const lastSlash = r.modulePath.lastIndexOf('/');
  const modulePath = r.modulePath.substring(0, lastSlash).replace(folder, '');
  return {
    path: r.path.replace('/**', ''),
    modulePath,
    gitFolder: `${gitBase}${modulePath}`,
  };
});

const newRoutes = [];

/** update the existing routes if needed */
for (const route of routes) {
  const pos = route.path.indexOf(':');
  const path = pos === -1 ? route.path : route.path.substring(0, pos - 1);
  const found = oldRoutes.find(r => r.path === path);
  if (found) {
    if (found.modulePath !== route.modulePath) {
      console.log(`${route.path} has changed`);
      found.modulePath = route.modulePath;
      found.gitFolder = `${gitBase}${route.modulePath}`;
    }
  } else {
    console.log(`${path} has been added`);
    oldRoutes.push({ ...route, path });
  }
  const newRouteInfo = await createSnapshotFor(route);
  newRoutes.push(newRouteInfo);
  /** give the CLI a bit of time */
  await new Promise(r => setTimeout(r, 500));
}

/** write the result back into the assets folder */
writeFileSync(routesFile, JSON.stringify(newRoutes, null, 2));
closeBrowser();
