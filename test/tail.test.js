const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })

  it("Doesn't mutilate the original array", () => {

    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length,3);
  })

  it("returns [] for [1]", ()=>{
    assert.deepEqual(tail([1]),[]);
  })

  it("returns [] for []", ()=>{
    assert.deepEqual(tail([]),[]);
  })
})
