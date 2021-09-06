const countLetters = (sentence) => {
  letterObj = {};
  for (let letter of sentence) {
    if (letter !== ' '){
      letterObj[letter] ? letterObj[letter] +=1 : letterObj[letter] = 1; 
    }
  }
  return letterObj;
}

module.exports = countLetters;