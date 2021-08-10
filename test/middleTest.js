const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const middle = require('../middle');
const assert = require('chai').assert;

//Test Code 
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe('#middle', () => {
  it(`returns [] when passed [1]`, () => {
    input = [1];
    expected = [];
    assert.deepEqual(middle(input), expected);
  })
  it(`returns [] when passed [1,2]`, () => {
    input = [1,2];
    expected = [];
    assert.deepEqual(middle(input), expected);
  })
  it(`returns [2] when passed [1,2,3]`, () => {
  input = [1,2,3];
    expected = [2];
    assert.deepEqual(middle(input), expected);
  })
  it(`returns [2,3] when passed [1,2,3,4]`, () => {
    input = [1,2,3,4];
    expected = [2,3];
    assert.deepEqual(middle(input), expected);
  })
  it(`returns [3,4] when passed [1,2,3,4,5,6]`, () => {
    input = [1,2,3,4,5,6];
    expected = [3,4];
    assert.deepEqual(middle(input), expected);
  })
  it(`returns [3] when passed [1,2,5,4,3]`, () => {
    input = [1,2,3,4,5];
    expected = [3];
    assert.deepEqual(middle(input), expected);
  })
})