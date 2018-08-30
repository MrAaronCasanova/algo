const hasSum = (array, target) => {
  let sums = [];
  let diffTable = {};
  array.forEach(val => {
    // calculate target - current element
    let targetValDiff = target - val;

    // check if this number exists in diffT able
    // if so then we found a pair of numbers that sum to target
    if (diffTable[targetValDiff]) {
      sums.push([val, targetValDiff]);
    }

    // add the current number to the hash table
    diffTable[val] = val;
  });

  return sums;
};

console.log('hasSum()', hasSum([2, 4, 6, 4], 8));
