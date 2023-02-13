const eqObjects = require('./eqObjects')


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;