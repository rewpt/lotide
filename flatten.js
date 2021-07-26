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

const flatten = (array) => {
  let newArr = [];
  for (item of array) {
    if (Array.isArray(item) === true) {
      for(nestedItem of item) {
        console.log(nestedItem);
        newArr.push(nestedItem);
      }
    }else {
    newArr.push(item);
    }
  }
  return newArr;
}

let flattened = flatten([1,2,[3,4],5,[6,7]]);
assertArraysEqual(flattened, [1,2,3,4,5,6,7])
