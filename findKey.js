const findKey = function(obj, callback){
  for ([key, value] of Object.entries(obj)) {
    if (callback(value) === true) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;