const takeUntil = function(array, callback) {
  const retArray = [];
  for (item of array) {

    if (!(callback(item) === true)) {
      retArray.push(item)
    }
    
    if (callback(item) === true) {
      return retArray;
    }
  }
}

module.exports = takeUntil;