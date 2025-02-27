import pkgJson from '@npmcli/package-json';

import { projectRoot } from './bases.mjs';
import { hashFolder } from './hash-folder.mjs';
import { execSync } from 'child_process';

const pj = await pkgJson.load(projectRoot);

export const getAngularVersion = async () => {
  return pj.content.dependencies['@angular/core'];
};

export const syncMajorWithAngular = async version => {
  const angularVersion = await getAngularVersion();
  const [major] = angularVersion.split('.');
  const [_Major, vMinor, vPatch] = version.split('.');
  return +major > +_Major ? `${major}.0.0` : `${major}.${vMinor}.${vPatch}`;
};

export const getCurrentHash = async project => {
  try {
    // build the project
    execSync(`npx ng build ${project.name}`, { stdio: 'ignore' });
    console.log(`✅ Project built successfully`);
  } catch (err) {
    console.log('error building the project');
    console.error(err);
    exit(1);
  }
  try {
    const hash = await hashFolder(project.distLocation);
    console.log(`🛈 hashed project: ${project.name}`);
    return hash;
  } catch (error) {
    console.log('❌ error hashing the dist folder', error);
  }
};

export const updateHash = async (name, hash, version) => {
  pj.content.published = pj.content.published || {};
  pj.content.published[name] = {hash, version};
  await pj.save();
}

export const getHashFromPkgJson = async name => {
  return pj.content.published?.[name]?.hash ?? '';
}
