const letterPositions = function(sentence){
  const results = { };
  for (let i = 0; i < sentence.length; i++) {
    let curLetter = sentence[i];
    results[curLetter] ? results[curLetter].push(i) : results[curLetter] = [i]; 
  }
  return results;
}

module.exports = letterPositions;
