// Helper Functions
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

const assertArraysEqual = (actual, expected) =>
  console.log(eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);


// Main Function

const letterPositions =  sentence => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char !== " ") {

      if (results[char])
        results[char].push(i);
      else
        results[char] = [i];
    }
  }

  return results;
};


// Tests
const result1 = letterPositions("hello");
assertArraysEqual(result1.h, [0]);
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2, 3]);
assertArraysEqual(result1.o, [4]);
const result2 = letterPositions("hello world");
assertArraysEqual(result2.l, [2, 3, 9]);
assertArraysEqual(result2.o, [4, 7]);
