const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array) {
  if (array.length <= 1) {
    let tailArr = [];
    return tailArr;
  }
  let tailArr = array.slice(1);
  return tailArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
console.log(tail([1]));
console.log(tail([]));