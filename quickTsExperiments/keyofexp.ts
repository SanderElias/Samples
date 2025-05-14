const someSample: SomeSample = {
  a: 1,
  hello: 'hello',
  b: new Date()
};

interface SomeSample {
  a: 0 | 1 | boolean;
  hello: string;
  b: Date;
}

Object.keys(someSample).forEach(key => {
  if (key === 'a') {
    someSample[key] = someSample[key] === 1 ? true : false;
  }
});

console.dir(someSample);
