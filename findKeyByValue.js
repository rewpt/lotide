const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = (obj, val) => {
  for (let [key, value] of Object.entries(obj)) {
    if (value === val){
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const dogs = {
  Moey : "Australian Shepherd",
  Yoshi : "Australian Shepherd",
  Cocoa : "Golden Retriever"
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(dogs, "Australian Shepherd"), "Moey");
assertEqual(findKeyByValue(dogs, "Golden Retriever"), "Cocoa");
