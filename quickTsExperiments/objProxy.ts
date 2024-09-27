const sample = { a: { b: { c: [{ a: 1, name: 'sander' }] } } };

const objProxy = new Proxy(sample, {
  get(target, prop, receiver) {
    console.log('get', prop);
    if (prop in target) {
      return Reflect.get(target, prop, receiver);
    }

    const path = (prop as string).split(/\./g).flatMap((p) => p.split(/\[|\]/g)).filter((p) => p);
    let value = target;
    for (const key of path) {
      console.log('key', key);
      if (key in value) {
        value = value[key];
      } else {
        return undefined;
      }
    }

    return value;
  },
});

console.log(objProxy["a.b.c[0].name"]); // sander
