#!/usr/bin/env node

const { createHash } = require('crypto');
const { appendFileSync } = require('fs');
const pkg = require('./package.json');
const { dependencies, devDependencies } = pkg;

const hash = createHash('sha256');
/** create a hash that is depending on _what_ depedencies are used, not on version or complete package.json */
hash.update(JSON.stringify({ dependencies, devDependencies }));
const digest = hash.digest('hex');

/** display it  */
console.log(`dependencyHash: ${digest}`);
/** append it to the GITHUB_OUTPUT file */
appendFileSync(process.env.GITHUB_OUTPUT, `dependencyHash=${digest}\n`);
