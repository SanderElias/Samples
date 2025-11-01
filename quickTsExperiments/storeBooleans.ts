const gridSize = 4;
const numberOfBits = 5;
const numberOfBytes = Math.ceil((gridSize * gridSize * numberOfBits) / 8);
const store = new Uint8Array(new ArrayBuffer(numberOfBytes + 4)); //?

const setSubBit = (x: number, b: boolean, byte: number) => {
  const mask = 1 << x;
  return b ? (byte |= mask) : (byte &= ~mask);
};

const setBit = (pos: number, b: boolean) => {
  const group = Math.floor(pos / 8);
  const bitpos = pos % 8;
  store[group] = setSubBit(bitpos, true, store[group]);
  // store.set([tmp],group)
};

// setBit(2, true)

const showByte = (n: number) =>
  (n + 256)
    .toString(2)
    .slice(1)
    .split('')
    .reduce((s, b, i) => (s += b + (i % 2 ? '' : '')), '');

const results: any[] = [];
for (let n = 0; n < 100; n += 1) {
  setBit(n, true);
  results.push(store.map(n => n));
}

console.table(results);
