import * as Replicator from 'replicator';

const replicator = new Replicator();

const s = Symbol('blah');
const test = {
  name: 'sander',
  dob: new Date(1968, 4, 14),
  bah: new Map<any, any>([[1, 2], ['blah', false]]),
  doh: new Set(['a', 'b', 'dd']),
  s
};
const enc = replicator.encode(test);

console.log(enc);

const seed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const radix = seed.length;
export function fromBase(hash: string): number {
  hash = String(hash);

  const l = hash.length - 1;

  const ret = hash
    .split('')
    .reduce(
      (tot, car, i) => (tot += seed.indexOf(car) * Math.pow(radix, l - i)),
      0
    );

  if (isNaN(ret)) {
    throw new Error(`Unknown error: Can not decode '${hash}'`);
  }

  return ret;
}

export function toBase(num: number): string {
  num = Math.abs(Number(num));

  let ret = '';

  while (true) {
    const r: number = num % radix;
    ret = seed.substr(r, 1) + ret;
    num = Math.ceil((num - r) / radix);

    if (0 === num) {
      break;
    }
  }

  return ret;
}

const randChar = () => seed[Math.floor(Math.random() * radix)];
const randChars = (n = 3) =>
  Array.from({ length: n }, () => randChar()).join('');

const getId = () => randChars(3) + toBase(Date.now());

const ids = Array.from({length:50}, getId).map(id => [id,fromBase(id)];
console.log(ids);
