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

//New function starts here eventually will just import functions above
const without = (arr1, arr2) => {
  //create new array to avoid mutating arr 1
  let newArr1 = [];
  
  //check if item from arr1 is in arr2, if not push to newArr1
  for (item1 of arr1) {
    if (!(arr2.includes(item1))){
      newArr1.push(item1);
    }
  }
  return newArr1;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);