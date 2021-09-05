const flatten = (array) => {
  let newArr = [];
  for (item of array) {
    if (Array.isArray(item) === true) {
      for(nestedItem of item) {
        console.log(nestedItem);
        newArr.push(nestedItem);
      }
    }else {
    newArr.push(item);
    }
  }
  return newArr;
}

module.exports = flatten;