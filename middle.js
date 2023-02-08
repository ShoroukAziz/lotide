// TEST/ASSERTION FUNCTIONS
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


// FUNCTION
const middle = function (array) {

  const result = [];
  const arrayLength = array.length;
  if (arrayLength <= 2) return result;
 
  if (arrayLength % 2 !== 0)
    result.push( array[(arrayLength-1)/2] );
  else{
    result.push( array[(arrayLength/2)-1] );
    result.push( array[arrayLength/2] );
  }
  return result;
  
}

// TEST CODE
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);

