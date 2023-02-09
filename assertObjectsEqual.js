const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

// Main Function
const eqObjects = function(object1, object2) {

  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);


  if (objectOneKeys.length !== objectTwoKeys.length)
    return false;

  for (let key in object1) {

    if (Array.isArray(object1[key]))
      if (!eqArrays(object1[key], object2[key]))
        return false;

      else if (object1[key] !== object2[key])
        return false;
  }
  return true;
};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);