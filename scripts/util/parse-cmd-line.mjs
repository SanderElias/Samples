import { exit } from 'node:process';
import { readBases } from './bases.mjs';

const [nodePath, scriptName, rawAction, projectName] = process.argv;

const bases = await readBases();
const project = bases[projectName];
if (projectName && !project) {
  console.log(`❌ Project not found!
    Available projects:
      ${Object.keys(bases).join('\n      ')}`);

  exit(1);
}

if (!rawAction) {
  console.log('⚠️ No action specified, using `patch`');
}
const action = rawAction?.toLowerCase() || 'patch';

if (!['info', 'minor', 'patch'].includes(action)) {
  console.log('❌ invalid action specified');
  exit(1);
}

export { project, action };
