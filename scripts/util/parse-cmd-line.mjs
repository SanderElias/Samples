import { exit } from 'node:process';
import { readBases } from './bases.mjs';



const [nodePath, scriptName, projectName, rawAction] = process.argv;

const bases = await readBases();
const project = bases[projectName];
if (!project) {
  console.log(`❌ Project not found!
    Available projects:
      ${Object.keys(bases).join('\n      ')}`);

  exit(1);
}

if (!rawAction) {
  console.log('⚠️ No action specified, using `info`');
}
const action = rawAction?.toLowerCase() || 'info';

if (!['info', 'minor', 'major', 'patch'].includes(action)) {
  console.log('❌ invalid action specified');
  exit(1);
}

export { project, action };
