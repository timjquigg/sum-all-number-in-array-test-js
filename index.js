const sumItems = (array) => {
  let sum = 0;
  for (const item of array) {

    // Base case:
    if (!Array.isArray(item)) {
      sum += item;
      continue;
    }
    
    sum += sumItems(item);
  }
  return sum;
};

module.exports = sumItems;