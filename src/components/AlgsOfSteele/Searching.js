//* -------------- Searching Algorithms ---------- *//

// JavaScript has search!
// There are many different search methods on arrays in JavaScript:
// --- linearSearch methods --- //
// indexOf
// includes
// find
// findIndex

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

linearSearch([1, 2, 3, 4, 5], 6);

// Binary Search
// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays!

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (arr[middle] < val) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === val ? middle : -1;
}
