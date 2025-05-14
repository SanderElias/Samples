const seed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const randomInt = (max = 2000) => Math.floor(Math.random() * max);
const randChar = () => seed[randomInt(seed.length)];
const randChars = (n = 3) => Array.from({ length: n }, () => randChar()).join('');

export const getId = () => randChars(4) + '-' + Math.round(performance.now() * 10000000000).toString(36);
export const createUniqueId = () =>
  Date.now()
    .toString(36)
    .split('')
    .reverse()
    .map(c => c + randChar())
    .join('');
