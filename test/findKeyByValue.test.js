const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it(`returns the key "drama" when searching by the valye "The Wire" in 
  {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  }`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undifened when searching by a value that does not exist', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });


});