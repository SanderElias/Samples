function replacer(key, value) {
  if (value instanceof Map) {
    return { __type: 'Map', value: Object.fromEntries(value) };
  }
  if (value instanceof Set) {
    return { __type: 'Set', value: Array.from(value) };
  }
  return value;
}

function reviver(key, value) {
  if (value?.__type === 'Set') {
    return new Set(value.value);
  }
  if (value?.__type === 'Map') {
    return new Map(Object.entries(value.value));
  }
  return value;
}

const obj = {
  set: new Set([1, 2]),
  map: new Map([
    ['key', 'value'],
    ['key1', 'value']
  ])
}; //?
const str = JSON.stringify(obj, replacer); //?
const newObj = JSON.parse(str, reviver); //?
