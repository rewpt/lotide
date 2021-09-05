const countOnly = function(allItems, itemsToCount) {
  const results = {}

  for (let item of allItems) {
    if (itemsToCount[item] === true){
    (!results[item]) ? results[item] = 1 : results[item] +=1;
    }
  }
  console.log(results)
  return results;
}  

module.exports = countOnly;
