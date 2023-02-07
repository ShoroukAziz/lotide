// HELPER FUNCTIONS 
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

// FUNCTION IMPLEMENTATION

  const without = (source, itemsToRemove) => {

    let result =[];
    for (let item of source) {

      let remove = false;
      for(let removable of itemsToRemove){

        if(item === removable){
          remove = true;
          break;
        }
      }
      if(!remove)
        result.push(item);

    }
    return result;

  }


 
// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// Test functionality
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, ["world"]), ["hello", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2]), ["1", "2", "3"]);
