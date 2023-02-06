const assertEqual = (actual, expected) => console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

// FUNCTION IMPLEMENTATION
const tail = arr =>  arr.slice(1);

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test Case: Check an array with one element
const one = tail([1]);
assertEqual(one.length, 0);

// Test Case: Empty array
const empty = tail([]);
assertEqual(empty.length, 0);

