export const isAsyncIterable = (x: any): x is AsyncIterable<any> => {
  return x && typeof x[Symbol.asyncIterator] === 'function';
};
