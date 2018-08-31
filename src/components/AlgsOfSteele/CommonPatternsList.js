//* -------------- SOME PATTERNS... ---------- *//
// Frequency Counter - This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N ^ 2) operations with arrays / strings

// Multiple Pointers - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

// Sliding Window - This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes(and a new window is created). Very useful for keeping track of a subset of data in an array / string etc.

// Divide and Conquer
// Dynamic Programming
// Greedy Algorithms
// Backtracking
// Many more!

//* ------ Frequency Counter Ex. ------ *//
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let buildCounterObj = arr => {
    return arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  };
  let frequencyCounter1 = buildCounterObj(arr1);
  let frequencyCounter2 = buildCounterObj(arr2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 1], [1, 4, 9, 1]));

// --------------------------------------------

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1Counter = {};
  let str2Counter = {};
  for (let letter of str1) {
    str1Counter[letter] = (str1Counter[letter] || 0) + 1;
  }
  for (let letter of str2) {
    str2Counter[letter] = (str2Counter[letter] || 0) + 1;
  }

  for (let key in str1Counter) {
    if (str1Counter[key] !== str2Counter[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));

//* ------ Multiple Pointers Ex. ------ *//

const sumZero = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

// --------------------------------------------

const countUniqueValues = arr => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

//* ------ Sliding Window Ex. ------ *//

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
