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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log('ab and ba comparison: ', eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log('ab and abc comparison: ', eqObjects( ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

