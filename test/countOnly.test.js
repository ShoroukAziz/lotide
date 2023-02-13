const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it('counts how many times aname appears in the "all items" array when it\'s set to true in the "items to count" array', () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it('returns undefined when the "item to count" is not in the "all items" array', () => {
    assert.isUndefined(result["Karima"]);
  });

  it('returns undefined when the item is set to false in the "items to count" array', () => {
    assert.isUndefined(result["Agouhanna"]);
  });


});