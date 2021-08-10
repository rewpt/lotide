const tail = require('../tail');
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);
// console.log(tail([1]));
// console.log(tail([]));

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