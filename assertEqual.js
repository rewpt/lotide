const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("The quick brown fox", "The quick brown fox");
assertEqual(2, 74);
assertEqual(1, 1);
