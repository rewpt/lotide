const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length <= 1) {
    let tailArr = [];
    return tailArr;
  }
  let tailArr = array.slice(1);
  return tailArr;
};

module.exports = tail;