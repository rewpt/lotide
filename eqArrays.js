const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS