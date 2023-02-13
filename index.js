const head = require('./head'); 
const tail = require('./tail'); 
const middle = require('./middle');
const countLetters = require('./countLetters'); 
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual'); 
const eqObjects = require('./eqObjects'); 
const countOnly = require('./countOnly'); 
const findKeyByValue = require('./findKeyByValue'); 
const letterPositions = require('./letterPositions'); 
const takeUntil = require('./takeUntil'); 
const findKey = require('./findKey'); 
const flatten = require('./flatten'); 
const map = require('./map');  
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  countLetters: countLetters,
  findKey: findKey,
  flatten: flatten,
  map: map,
  without: without,

};