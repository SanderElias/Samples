const seed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const randomInt = (max = 2000) => Math.floor(Math.random() * max);
const randChar = () => seed[randomInt(seed.length)];
const randChars = (n = 3) =>
  Array.from({ length: n }, () => randChar()).join('');

export const getId = () =>
  randChars(4) + '-' + Math.round(performance.now() * 10000000000).toString(36);

/* *
 This is not a UUID, but it is unique enough for demo purposes.
 It is based on the current time and some random characters, so it should be unique.
 as  long as it is not called millions of times times in the same millisecond.
 (when you generate 17.5 million ids in the same millisecond, you have a 50% chance of a collision
 */
export const createUniqueId = () =>
  Date.now()
    .toString(36)
    .split('')
    .reverse()
    .map(c => c + randChar())
    .join('');
