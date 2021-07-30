const eqArrays = (arr1, arr2) => {
  if (arr1 === arr2) { return true };
  if (arr1 === null || arr2 === null) { return false };
  if (arr1.length !== arr2.length) { return false };

/*Since we have already tested if arrays are the same length 
then we only need to loop through one array and check it against the second*/
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const takeUntil = function(array, callback) {
  const retArray = [];
  for (item of array) {
    // If the item is falsy for our callback push it to the array
    if (!(callback(item) === true)) {
      retArray.push(item)
    }
    // If the item is truthy for our callback return the array 
    if (callback(item) === true) {
      return retArray;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [true, true, true, false]
assertArraysEqual(takeUntil(data3, x => Boolean(x) !== true), [true, true, true]);

const data4 = [99, 22, 88, 33, null]
assertArraysEqual(takeUntil(data4, x => Boolean(x) !== true), [99, 22, 88, 33]);

