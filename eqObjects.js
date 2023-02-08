// Helper Code
const assertEqual = (actual, expected) => console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

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









// Tests

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);