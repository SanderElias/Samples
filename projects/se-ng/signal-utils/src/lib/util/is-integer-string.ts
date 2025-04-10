/**
 * checks if a string is an integer
 * @param str the string to check
 * @returns true if the string is an integer, false otherwise
 */

export const isIntegerString = (str: string) => {
  const n = parseInt(str, 10);
  return !isNaN(n) && `${n}` === str;
};
