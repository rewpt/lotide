const without = (arr1, arr2) => {

  let newArr1 = [];
  
  for (item1 of arr1) {
    if (!(arr2.includes(item1))){
      newArr1.push(item1);
    }
  }
  return newArr1;
}

module.exports = without;