const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it('returns ["g", "c", "t", "m", "t"] for map(["ground", "control", "to", "major", "tom"], word => word[0])', () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });

  it('returns [6, 7, 2, 5, 3] for map(["ground", "control", "to", "major", "tom"], word.length)', () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });

  it('returns ["Say ground", "Say control", "Say to", "Say major", "Say tom"] for map(["ground", "control", "to", "major", "tom"], `Say ${word}`)', () => {
    assert.deepEqual(map(words, word => `Say ${word}`), ["Say ground", "Say control", "Say to", "Say major", "Say tom"]);
  });

});