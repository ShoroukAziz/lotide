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


const flatten = arr => {

  let result = [];
  for (element of arr){
    
    if (Array.isArray(element)){
      for (subelement of element){
        result.push(subelement);
      }
    }
    else
      result.push(element);

  }
  return result;

}  

//Tests
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], 2, [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", 2, [3, 4], 5, [6]]), ["1", 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([["1"]]), ["1"]);
assertArraysEqual(flatten([[]]), []);
assertArraysEqual(flatten([]), []);
