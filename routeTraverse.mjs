import { readFileSync } from 'fs';
import { join } from 'path';
const re = /import\('(.*)'\)/;
const cwd = process.cwd();
const base = join(cwd, './out-tsc/app/');

export async function traverseRoutes(startModulePart, path = '', result = []) {
  try {
    const { routes } = await import(startModulePart);
    if (!routes) {
      // console.log(`no routes in ${startModulePart}`);
      return;
    }
    for (const r of routes) {
      const imp = r.loadChildren?.toString() ?? r.loadComponent?.toString();
      // console.log(await (r.loadChildren()));

      if (r.path !== '**') {
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
          const m = join(base, 'src/app', folder + '.js');
          const {routes} = await  import(m);
          console.log(`traversing ${m} , ${routes}`);
          // await traverseRoutes(
          //   join(base,'src/app', folder + '.js'),
          //   `${path}/${r.path}`,
          //   result
          // );
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

// const test = await traverseRoutes(join(base, '/src/app/routes.js'));
// console.table(test);
