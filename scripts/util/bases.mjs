import json from 'json5';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const projectRoot = process.cwd();

export const readBases = async () => {
  try {
    var ang = json.parse(await readFile('angular.json', 'utf8'));
  } catch (err) {
    console.log('❌ error reading the angular.json file');
    console.error(err);
    exit(1);
  }
  const { projects } = ang;
  const rawBases = Object.keys(projects).reduce((a, k) => ({ ...a, [k]: projects[k].root }), {});
  const bases = {};

  /**
   * loop over all projects in the angular.json file.
   *  get the ones that have a package.json file
   *  extract the version and locations of the package
   */
  for (const [name, base] of Object.entries(rawBases)) {
    const fullPath = join(projectRoot, base);
    const packageLocation = join(fullPath, 'package.json');
    const ngPackgrLocation = join(fullPath, 'ng-package.json');
    if (existsSync(packageLocation)) {
      // read the package.json file
      const pkg = json.parse(await readFile(packageLocation, 'utf8'));
      // read the ng-package.json file
      const ngpkg = existsSync(ngPackgrLocation) ? json.parse(await readFile(ngPackgrLocation, 'utf8')) : {};
      const { dest } = ngpkg;
      if (!dest) {
        console.log(`❌ project ${name} has no dist location in the ng-package.json file`);
        exit(1);
      }
      // get the dist location from the ng-package.json file
      const distLocation = join(projectRoot, base, dest ?? 'dist/unknown');
      const { version, name: packageName } = pkg;
      bases[name] = { name, packageName, base, version, fullPath, distLocation };
    } else {
      // console.log(`⚠️ project ${name} has no package.json file (skipping)`);
    }
  }
  return bases;
};
