import { execSync } from 'child_process';
import { exit } from 'process';
import { getNpmVersion } from './get-npm-version.mjs';

// ⚠️   ✅   ❌ 🛈
export const buildAndPublish = (project, action) => {
  console.log(`🛈 Project: ${project.name}, action: ${action}`);
  console.log(`🛈 Going to publish with package name: "${project.packageName}"`);

  if (action === 'info') {
    console.log(`🛈 Current version in repo: ${project.version}, building`);
    try {
      execSync(`npx ng build ${project.name}`, { stdio: 'ignore' });
    } catch (err) {
      console.log('❌ error building the project');
      // console.error(err);
      exit(1);
    }
    console.log(`✅ Project built successfully`);
  } else {
    const version = getNpmVersion(project.packageName);
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
      // build the project
      execSync(`npx ng build ${project.name}`, { stdio: 'ignore' });
      console.log(`✅ Project built successfully`);
    } catch (err) {
      console.log('error building the project');
      console.error(err);
      exit(1);
    }
    try {
      // publish the project
      // execSync(`cd ${project.distLocation} && npm publish`, { stdio: 'ignore' });
      console.log(`✅ Project published successfully`);
    } catch (err) {
      console.log('❌ error publishing the project');
      // console.error(err);
      exit(1);
    }
  }
};
