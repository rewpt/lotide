const findKeyByValue = (obj, val) => {
  for (let [key, value] of Object.entries(obj)) {
    if (value === val){
      return key;
    }
  }
}

module.exports = findKeyByValue;