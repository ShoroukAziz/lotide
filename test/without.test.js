const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  const words = ["hello", "world", "lighthouse"];

  it(" doesn't alter the original array", () => {
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it('returns ["hello", "world"] for  ["hello", "world", "lighthouse"] without ["lighthouse"]', () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });

  it('returns ["hello", "lighthouse"] for  ["hello", "world", "lighthouse"] without ["world"]', () => {
    assert.deepEqual(without(words, ["world"]), ["hello", "lighthouse"]);
  });

  it('returns [2, 3] for  [1, 2, 3] without [1]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns the same array if the without elements are not in the original array', () => {
    assert.deepEqual(without([1, 2, 3], [6]), [1, 2, 3]);
  });

  it('returns the same array if the without array is empty', () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });

});