import { readFileSync, writeFileSync } from 'fs';
import { parseAngularRoutes } from 'guess-parser';
import { join } from 'path';

const folder = process.cwd();
const routesFile = join(folder, 'src/assets/routes.json');
const tsconfig = join(folder, './src/tsconfig.app.json');
const gitBase = 'https://github.com/SanderElias/Samples/tree/main'
let oldRoutes;
try {
  oldRoutes =
    JSON.parse(readFileSync(routesFile, 'utf8').toString('utf8') || '') || [];
} catch {
  oldRoutes = [];
}

console.log({ oldRoutes });

const routes = parseAngularRoutes(tsconfig, []).map(r => {
  const lastSlash = r.modulePath.lastIndexOf('/');
  const modulePath = r.modulePath.substring(0, lastSlash).replace(folder, '');
  return {
    path: r.path,
    modulePath,
    gitFolder: `${gitBase}${modulePath}`,
  };
});

for (const route of routes) {
  const pos = route.path.indexOf(':');
  const path = pos === -1 ? route.path : route.path.substring(0, pos - 1);
  console.log({ pos, path });
  const found = oldRoutes.find(r => r.path === path);
  if (found) {
    if (found.modulePath !== route.modulePath) {
      console.log(`${route.path} has changed`);
      found.modulePath = route.modulePath;
    }
  } else {
    console.log(`${path} has been added`);
    oldRoutes.push({...route, path});
  }
}

writeFileSync(routesFile, JSON.stringify(oldRoutes, null, 2));
