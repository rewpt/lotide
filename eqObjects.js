const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    console.log('lengths are not the same');
    return false;
  }
  
    for (let i = 0; i < keys1.length; i++) {
      if (!(keys2.includes(keys1[i]))) return false;
      if (Array.isArray(object1[keys1[i]])) {
        let arrayBoolean = eqArrays(object1[keys1[i]], object2[keys1[i]]);
        if (!arrayBoolean) return false;
      } else {
        if (object1[keys1[i]] !== object2[keys1[i]]) {
          return false
        }
      }
      
    }
  return true
};


module.exports = eqObjects;