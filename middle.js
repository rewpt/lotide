const middle = (arr) => {
  let finalArray = [];
  const arrLength = arr.length;
  let remainder =  arrLength % 2;
  let middle = arrLength / 2;

  if (arrLength <= 2) {return finalArray}
  if (remainder === 0) {
    let middleIndex1 = middle - 1;
    let middleIndex2 = middle
    let floorVal = arr[middleIndex1];
    let ceilVal = arr[middleIndex2];
    finalArray.push(floorVal);
    finalArray.push(ceilVal);
  };
  if (remainder > 0) {
    let floorMiddle = Math.floor(middle);
    let middleVal = arr[floorMiddle];
    finalArray.push(middleVal);
  };
  return finalArray;
}

module.exports = middle;