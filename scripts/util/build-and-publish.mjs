import { execSync } from 'child_process';
import { exit } from 'process';
import { getNpmVersion } from './get-npm-version.mjs';
import { error } from 'console';
import { getCurrentHash, syncMajorWithAngular, updateHash, getHashFromPkgJson } from './pkgjson.mjs';
import { get } from 'http';

// ⚠️   ✅   ❌ 🛈
export const buildAndPublish = async (project, action) => {
  console.log(`🛈 Project: ${project.name}, action: ${action}`);
  const hash = await getCurrentHash(project);
  let newHash = '';
  if (hash === await getHashFromPkgJson(project.name)) {
    console.log(`⚠️ Project ${project.name} has not changed, skipping publish`)
    return;
  }
  console.log(`🛈 Going to publish with package name: "${project.packageName}"`);

  const version = await syncMajorWithAngular(getNpmVersion(project.packageName));
  console.log(`🛈 Current version on npm ${version}`);
  try {
    // pull the current version from npm, and set it locally
    execSync(`cd ${project.fullPath} && npm version ${version} --force`, { stdio: 'ignore' });
  } catch (err) {
    console.log(`⚠️ error syncing the local version to ${version} (probably because it is the same)`);
  }
  try {
    // bump the version according to the action, and set it locally
    const res = execSync(`cd ${project.fullPath} && npm version ${action}`);
    console.log(`🛈 bumped local version to ${res.toString().trim()}, for the next ${action} version`);
  } catch (err) {
    console.log(`❌ error bumping the ${action} version.`);
    exit(1);
  }
  try {
    // re-build the project with the updated version, and create an updated hash
    newHash = await getCurrentHash(project);
  } catch (err) {
    console.log('error building the project');
    console.error(err);
    exit(1);
  }
  try {
    // publish the project
    execSync(`cd ${project.distLocation} && npm publish`, { stdio: 'ignore' });
    // console.log(`✅ Project published successfully`);
  } catch (err) {
    console.log('❌ error publishing the project');
    // console.error(err);
    exit(1);
  }
  try {
  await updateHash(project.name, newHash, version);
  }
  catch (err) {
    console.log('❌ error updating the hash in the package.json');
    exit(1);
  }
  console.log(`✅ Project ${project.name} published successfully`);
};
