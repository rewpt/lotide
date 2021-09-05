// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const letterPositions = require('./letterPositions');


module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  eqArrays,
  assertEqual, 
  without,
  takeUntil,
  map,
  flatten,
  findKeyByValue,
  findKey,
  eqObjects,
  countOnly,
  countLetters,
  assertObjectsEqual,
  letterPositions
};