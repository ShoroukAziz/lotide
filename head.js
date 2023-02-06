const assertEqual = (actual, expected) => console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

// FUNCTION IMPLEMENTATION
const head = arr =>  arr[0];

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([4]), 4);
assertEqual(head([4.6,5]), 4.6);