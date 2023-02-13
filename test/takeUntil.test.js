const assert = require('chai').assert;
const  takeUntil = require('../takeUntil');

describe("#takeUntil", () => {

  it(`returns [1, 2, 5, 7, 2] for takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)`, () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it(`returns ['I\'ve', 'been', 'to', 'Hollywood'] for takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ',')`, () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });

  it('returns [1, 5, 7] for takeUntil([1, 5, 7, 2, -1, 2, 4, 5], x => x % 2 === 0)', () => {
    assert.deepEqual( takeUntil([1, 5, 7, 2, -1, 2, 4, 5], x => x % 2 === 0), [1, 5, 7]);
  });

  it('returns [] for takeUntil([], x => x % 2 === 0)', () => {
    assert.deepEqual(takeUntil([], x => x % 2 === 0), []);
  });

  it('returns [] for takeUntil([2], x => x % 2 === 0)', () => {
    assert.deepEqual(takeUntil([2], x => x % 2 === 0), []);
  });

  it('returns [] for takeUntil([2,3], x => x % 2 === 0)', () => {
    assert.deepEqual(takeUntil([2,3], x => x % 2 === 0), []);
  });

  it('returns  [3] for takeUntil([3,2], x => x % 2 === 0)', () => {
    assert.deepEqual(takeUntil([3,2], x => x % 2 === 0), [3]);
  });

  it('returns [3] for takeUntil([3], x => x % 2 === 0)', () => {
    assert.deepEqual(takeUntil([3], x => x % 2 === 0), [3]);
  });

});