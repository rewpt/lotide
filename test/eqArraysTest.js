const eqArrays = require('../eqArrays')
const assert = require('chai').assert;

describe("#eqArraysTest", () => {
  it(`returns true for ["1", "2", "3"], ["1", "2", "3"]`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it(`returns false for ["1", "2", "3"], ["1", "2", 3]`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it(`returns true when passed [1, 2, 3], [1, 2, 3]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});
