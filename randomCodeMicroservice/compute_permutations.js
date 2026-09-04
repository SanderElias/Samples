const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'codeWordGenerator.ts');
const src = fs.readFileSync(file, 'utf8');

function extractArray(name) {
  const re = new RegExp(`const\\s+${name}\\s*=\\s*\\[((?:.|\\n)*?)\\];`, 'm');
  const m = src.match(re);
  if (!m) throw new Error('Array '+name+' not found');
  const block = m[1];
  const entries = [];
  const itemRe = /'([^']+)'/g;
  let it;
  while ((it = itemRe.exec(block)) !== null) entries.push(it[1]);
  return entries;
}

const prefixes = extractArray('prefixes');
const infixes = extractArray('infixes');
const suffixes = extractArray('suffixes');

console.log('counts: prefixes=', prefixes.length, 'infixes=', infixes.length, 'suffixes=', suffixes.length);

let totalBase = BigInt(prefixes.length) * BigInt(infixes.length) * BigInt(suffixes.length);
console.log('base combinations:', totalBase.toString());

let totalVariants = 0n;
let maxEligible = 0;
let minEligible = Number.POSITIVE_INFINITY;

for (let p of prefixes) {
  for (let i of infixes) {
    for (let s of suffixes) {
      const eligible = p.length + i.length + s.length; // excludes hyphens
      if (eligible > maxEligible) maxEligible = eligible;
      if (eligible < minEligible) minEligible = eligible;
      // variants = 2^eligible - 1
      const variants = (1n << BigInt(eligible)) - 1n;
      totalVariants += variants;
    }
  }
}

console.log('eligible chars per base string: min=', minEligible, 'max=', maxEligible);
console.log('total permutations (including mixed-case variants):', totalVariants.toString());

// compute bit-length (floor(log2(totalVariants)) + 1)
const bin = totalVariants.toString(2);
const bitlen = bin.length;
console.log('entropy (bits) ~=', bitlen);

// also print approximate decimal digits
const decLen = totalVariants.toString().length;
console.log('decimal digits ~=', decLen);

// human readable approximate using scientific notation
function human(nStr) {
  const len = nStr.length;
  if (len <= 15) return nStr;
  const mant = nStr.slice(0, 6);
  return mant + 'e+' + (len-6);
}
console.log('approx total (short):', human(totalVariants.toString()));

console.log('done');
