const assert = require('chai').assert;
const flatten = require('../flatten');


describe("#flatten", () => {

  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('returns["1", 2, 3, 4, 5, 6] for ["1", 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten(["1", 2, [3, 4], 5, [6]]), ["1", 2, 3, 4, 5, 6]);
  });

  it('returns an array of on element when given an array of an array of one element', () => {
    assert.deepEqual(flatten([[1]]), [1]);
  });

  it('returns an empty array when given an array of an empty array', () => {
    assert.deepEqual(flatten([[]]), []);
  });

  it('returns an empty array when given an empty array', () => {
    assert.deepEqual(flatten([]), []);
  });
  
});