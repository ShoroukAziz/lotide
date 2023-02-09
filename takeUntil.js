// Helper Code
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



// Function

const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (callback(element))
      break;

    results.push(element);
  }


  return results;
};




// Tests

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil([1,  5, 7, 2, -1, 2, 4, 5], x => x % 2 === 0), [1, 5, 7]);
assertArraysEqual(takeUntil([], x => x % 2 === 0), []);
assertArraysEqual(takeUntil([2], x => x % 2 === 0), []);
assertArraysEqual(takeUntil([2,3], x => x % 2 === 0), []);
assertArraysEqual(takeUntil([3,2], x => x % 2 === 0), [3]);
assertArraysEqual(takeUntil([3], x => x % 2 === 0), [3]);
