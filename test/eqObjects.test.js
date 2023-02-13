const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {

  it('returns true for identical objects even if the order of the keys is different', () => {
    assert.isTrue(eqObjects({ color: "red", size: "medium" },{ size: "medium", color: "red" }));
  });
  
  it('returns false when the objects have different count of keys', () => {
    assert.isFalse(eqObjects({ color: "red", size: "medium" },{ size: "medium", color: "red", sleeveLength: "long" }));
  });

  it('returns true when the objects are identical and the values contain arrays', () => {
    assert.isTrue(eqObjects({ colors: ["red", "blue"], size: "medium" },{ size: "medium", colors: ["red", "blue"] }));
  });

});