import { project, action } from './util/parse-cmd-line.mjs';
import { buildAndPublish } from './util/build-and-publish.mjs';
import { readBases } from './util/bases.mjs';
import { hashFolder } from './util/hash-folder.mjs';

import  pkgJson  from '@npmcli/package-json';


// buildAndPublish(project, action)
if (project === undefined) {
  console.log(`⚠️ No project specified, publishing all projects`);
  const bases = await readBases();
  for (const p of Object.values(bases)) {
    await buildAndPublish(p, action);
    console.log(`🛈 Project: ${p.name}, action: ${action}`);
  }
} else {
  buildAndPublish(project, action);
}
