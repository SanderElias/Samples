import { da } from '@faker-js/faker';

export type UniqueId = string & { __brand: 'Unique identifier' };

const datePartLength = Date.now().toString(36).length;
const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// create a unique id, based on the current time, with a random character inserted between each digit.
export const createId = (date = Date.now()) =>
  date
    .toString(36) // convert to a base 36 string
    .split('') // split into an array of characters
    .reverse() // reverse, so the least significant digits are first (make sure not all id's start with the same chars)
    .map(ch => `${ch}${randomChar()}`) // insert a random character between each digit
    .join('') as UniqueId; // join back into a string

// check if a string is a valid id, also functions as a type guard
export const isId = (id: string): id is UniqueId => {
  if (typeof id !== 'string') {
    return false;
  }
  if (id.length !== datePartLength * 2) {
    return false;
  }
  const dateString = datePart(id as UniqueId);
  if (dateString.length !== datePartLength || isNaN(datePart2Date(dateString).getTime())) {
    return false;
  }
  return true;
};

// extract the date part of the id
const datePart = (id: UniqueId) =>
  id
    .match(/.{1,2}/g) // split into pairs of characters
    ?.map(p => p[0]) // take the first character of each pair
    .reverse() // reverse back to the original order
    .join('') ?? ''; // join back into a string, or return an empty string if the input is invalid

// convert the date part back into a date
const datePart2Date = (datePart: string) => new Date(parseInt(datePart, 36));

// helper function tp extract the date out of an id. For completeness sake.
export const dateFromId = (id: UniqueId) => {
  if (!isId(id)) {
    throw new Error('Invalid id');
  }
  return datePart2Date(datePart(id));
};
