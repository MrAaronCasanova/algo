// * ---------------- Big O Space Complexity ------------- *//

// O(1)
// algorithm takes up 2 spaces in memory
// 1 for total & 1 for i in the for loop
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

sum([1, 2, 3, 4, 5]);
console.log('sum([1, 2, 3, 4, 5])', sum([1, 2, 3, 4, 5]));

// ---------------------------------------------------

// O(n)
// space needed grows portional to array length
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log('double([1, 2, 3])', double([1, 2, 3]));

//* ---------------- Notes ---------------- *//

// Space Complexity - how much additional memory do we need to allocate in order to run the code in our algorithm

// Auxiliary Space Complexity - refers to the space required by the algorithm, not including space taken up by the inputs

// Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity

// ------ Space Complexity Reference

// Most primitives(booleans, numbers, undefined, null) are constant space
// Strings require O(n) space(where n is the string length)
// Reference types are generally O(n), where n is the length(for arrays) or the number of keys(for objects)
