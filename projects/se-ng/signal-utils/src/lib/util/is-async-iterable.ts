export const isAsyncIterable = (x: any): x is AsyncIterable<any> => {
  if (!x) return false;
  return x && typeof x[Symbol.asyncIterator] === 'function';
};
