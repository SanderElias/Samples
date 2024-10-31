import { project, action } from './util/parse-cmd-line.mjs';
import { buildAndPublish } from './util/build-and-publish.mjs';

buildAndPublish(project, action)
