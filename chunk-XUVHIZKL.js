// src/app/util/random-things.ts
var seed = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomInt = (max = 2e3) => Math.floor(Math.random() * max);
var randChar = () => seed[randomInt(seed.length)];
var createUniqueId = () => Date.now().toString(36).split("").reverse().map((c) => c + randChar()).join("");

export {
  createUniqueId
};
