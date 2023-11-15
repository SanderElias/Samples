import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import pkg from 'typescript';
const { transpile } = pkg;
const re = /import\('(.*)'\)/;
const cwd = process.cwd();

export async function traverseRoutes(startModulePart, path = '', result = []) {
  try {
    // const { routes } = await import(startModulePart);
    const routes = await extractRoutes(startModulePart);
    if (!routes) {
      // console.log(`no routes in ${startModulePart}`);
      return;
    }
    for (const r of routes) {
      const imp = r.loadChildren?.toString() ?? r.loadComponent?.toString();
      // console.log(await (r.loadChildren()));

      if (r.path !== '**' && !r.path.includes(':')) {
        const folder = re.exec(imp)?.[1];
        if (!folder) {
          return;
        }
        const cleanFolder = join(cwd, './src/app/', folder).replace(cwd, '');
        const barePart = cleanFolder.substring(0, cleanFolder.lastIndexOf('/'));
        result.push({
          path: `${path}/${r.path}`,
          modulePath: barePart,
        });
        if (r.loadChildren !== undefined) {
          const modulePath = join(cwd, 'src/app/', folder + '.ts');
          // console.log('travesing', modulePath);
          await traverseRoutes(modulePath, `${path}/${r.path}`, result);
        }
      }
    }
  } catch (e) {
    console.log(`error in ${startModulePart}`);
    console.error(e);
  }
  // console.table(result);
  return result;
}

async function extractRoutes(path) {
  if (!existsSync(path)) {
    console.log(`file not found ${path}`);
    return [];
  }
  const content = readFileSync(path, 'utf8'); // load ts fike into memory
  const code = transpile(content, {
    module: pkg.ModuleKind.ES2022,
  }); // transpile to es2022 using typescript compiler
  try {
    const mod = await import(`data:application/javascript;base64,${btoa(code)}`); // import the transpiled code from a string
    const routes = mod.routes || mod.default || []; // get the routes from the module (use default if routes is not found)
    console.log(`found ${routes.length} routes in ${path}`);
    return routes;
  } catch (e) {
    // console.error(e);
    console.log(`error in ${path}`);
  }
  return [];
}
