const countLetters = str => {

  let result = {};

  for (let char of str) {

    if (char === ' ')
      continue;

    if (!result[char])
      result[char] = 0;

    result[char]++;

  }
  return result;

};

module.exports = countLetters;