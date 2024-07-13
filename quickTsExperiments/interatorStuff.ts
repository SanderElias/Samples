const log = (x: any) => ({
  [Symbol.iterator]: function* () {
    for (let element of x) {
      yield console.log(element);
    }
  },
});

const log1 = function* (x: any) {
  for (let element of x) {
    yield console.log(element);
  }
};

// [...log1(new Set([1, 2]))] ?//
