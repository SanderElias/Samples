export const isAsyncIterable = (x: any): x is AsyncIterable<any> => {
  if (x===null || x===undefined) return false;
  return x && typeof x[Symbol.asyncIterator] === 'function';
};
