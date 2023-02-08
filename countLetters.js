// Assertion code
const assertEqual = (actual, expected) => console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

// Main Function
const countLetters = str => {

  let result = {};

  for (let char of str) {

    if (char !== ' ') {
      if (result[char])
        result[char]++;
      else
        result[char] = 1;

    }
  }
  return result;

};

// Tests

assertEqual(countLetters("LHL")["L"], 2);
assertEqual(countLetters("LHL")["H"], 1);
const ans = countLetters("lighthouse in the house");
assertEqual(ans["l"], 1);
assertEqual(ans["i"], 2);
assertEqual(ans["g"], 1);
assertEqual(ans["h"], 4);
assertEqual(ans["t"], 2);
assertEqual(ans["o"], 2);
assertEqual(ans["u"], 2);
assertEqual(ans["s"], 2);
assertEqual(ans["e"], 3);
assertEqual(ans["n"], 1);

