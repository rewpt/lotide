const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = (sentence) => {
  letterObj = {};
  for (let letter of sentence) {
    if (letter !== ' '){
      letterObj[letter] ? letterObj[letter] +=1 : letterObj[letter] = 1; 
    }
  }
  return letterObj;
}

let lighter = countLetters("lighthouse in the house");
console.log(lighter);

//Not sure why LHL had me import assertEqual because you can't compare objects with it.
//But they mentioned manual verification and my result is the same as the LHL result

// const checkObj = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }