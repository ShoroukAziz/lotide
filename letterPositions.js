const letterPositions = sentence => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === " ")
      continue;

    if (!results[char])
      results[char] = [];

    results[char].push(i);
  }

  return results;
};

module.exports = letterPositions;