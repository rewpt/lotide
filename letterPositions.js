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


const letterPositions = function(sentence){
  const results = { };
  for (let i = 0; i < sentence.length; i++) {
    let curLetter = sentence[i];
    // let objectKey = results[curLetter];
    results[curLetter] ? results[curLetter].push(i) : results[curLetter] = [i]; 
  }
  return results;
}
letterPositions('hello');
assertArraysEqual(letterPositions('hello').h, [0])
assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('hello').l, [2,3])
assertArraysEqual(letterPositions('hello').o, [4])