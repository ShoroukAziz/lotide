// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);


// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 15);