export const tail = <T>(a: Array<T>): T => a[a.length - 1];

export const chunkReducerForSize = (chunkSize = 5) => <T>(result: T[][], item: T) => {
  const lastChunk = tail(result);
  if (lastChunk.length === chunkSize) {
    result.push([item]);
  } else {
    lastChunk.push(item);
  }
  return result;
};

export const toChunks = <T>(arr: T[], chunkSize = 5): Array<T[]> => {
  return arr.reduce(chunkReducerForSize(chunkSize), [[]]);
};
interface Blah {
  [x: string]: any;
}

function sample() {
  const fixedSizeData = Array.from(
    { length: Math.floor(Math.random() * 500) + 75 },
    (e, id) => ({ size: Math.floor(Math.random() * 50) + 75, i: id } as Blah)
  );
  const chunked = toChunks(fixedSizeData);
  console.log(chunked);
}
