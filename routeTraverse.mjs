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
      if (r.path !== '**') {
        const folder = re.exec(imp)?.[1];
        if (!folder) {
          return;
        }
        const cleanFolder = join(cwd, './src/app/', folder).replace(cwd, '');
        // if (cleanFolder.endsWith('.module')) {
        //   await traverseRoutes(
        //     join(base, cleanFolder + '.js'),
        //     path + '/' + r.path,
        //     result
        //   );
        // }
        // console.log(r.path, cleanFolder);
        const barePart = cleanFolder.substring(0, cleanFolder.lastIndexOf('/'));
        result.push({
          path: `${path}/${r.path}`,
          modulePath: barePart,
        });
      }
    }
  } catch (e) {
    console.log(`error in ${startModulePart}`)
  }
  return result;
}

// const test = await traverseRoutes(join(base, '/src/app/routes.js'));
// console.table(test);
