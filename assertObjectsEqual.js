const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // If there are not the same amount of keys the objects are not equal
  if (keys1.length !== keys2.length) {
    console.log('lengths are not the same');
    return false;
  }
  // Loop through the keys
    for (let i = 0; i < keys1.length; i++) {
      //If the key in the first array is not the second array they are not the same
      if (!(keys2.includes(keys1[i]))) return false;
      // If the value of they key is an array
      if (Array.isArray(object1[keys1[i]])) {
        //use array equality comparison 
        let arrayBoolean = eqArrays(object1[keys1[i]], object2[keys1[i]]);
        //If they are false we can return false
        if (!arrayBoolean) return false;
      } else {
        // This will run if the value checked is not an array
        if (object1[keys1[i]] !== object2[keys1[i]]) {
          return false
        }
      }
      
    }
  return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({dog: '55', chimp: 99}, {dog: '55', chimp: 99} );