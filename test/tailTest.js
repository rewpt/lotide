const tail = require('../tail');
const assert = require('chai').assert;

describe ("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] when passed ["Yo Yo", "Lighthouse", "Labs"])`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(words), expected);
  });
  
  it(`returns [] when passed []`, () => {
    const words = [];
    const expected = [];
    assert.deepEqual(tail(words), expected);
  });

  it(`returns [] when passed [1]`, () => {
    const words = [1];
    const expected = [];
    assert.deepEqual(tail(words), expected);
  });

});