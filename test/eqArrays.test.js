const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {

  it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });


  it('returns false when the orders of the arrays values are different ', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('returns false when all the types of the values are different', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], [1, 2, 3]));
  });

  it('returns false when any of the types of the values is different', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });


  it('returns false when the size of the arrays is not the same', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2" ]));
  });

});