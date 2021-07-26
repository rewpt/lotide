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
//Determine middle of an array, 2 arr items if even length, 1 if odd and none if 2 or less items
const middle = (arr) => {
  let finalArray = [];
  const arrLength = arr.length;
  let remainder =  arrLength % 2;
  let middle = arrLength / 2;

  if (arrLength <= 2) {return finalArray}
  if (remainder === 0) {
    let middleIndex1 = middle - 1;
    let middleIndex2 = middle
    let floorVal = arr[middleIndex1];
    let ceilVal = arr[middleIndex2];
    finalArray.push(floorVal);
    finalArray.push(ceilVal);
  };
  if (remainder > 0) {
    let floorMiddle = Math.floor(middle);
    let middleVal = arr[floorMiddle];
    finalArray.push(middleVal);
  };
  return finalArray;
}

//Test Code 
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

