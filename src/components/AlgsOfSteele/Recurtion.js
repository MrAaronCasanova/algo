//* -------------- Recursion ---------- *//
// A process(a function in our case) that calls itself
// Invoke the same function with a different input until you reach your base case!

// Base Case
// The condition when the recursion ends.
// This is the most important concept to understand

// Two essential parts of a recursive function!
// Base Case
// Different Input

// ------ Recursive Examples ------ //
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// ------------------------------------

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// ------------------------------------

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Where things go wrong
// No base case
// Forgetting to return or returning the wrong thing!
// Stack overflow!

// ------ Helper Method Recursion ------ //
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

// ------ ^^^ in action vvv ------ //

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// ------ vvv --- more --- vvv ------ //

function recursiveRange(range) {
  let total = 0;

  function acc(num) {
    if (num === 0) return;
    total += num;
    return acc(num - 1);
  }

  acc(range);

  return total;
}

// ---------- Solutions ---------------- //
// POWER SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
// FACTORIAL SOLUTION
function factorial(x) {
  if (x < 1) return 0;
  if (x === 1) return 1;
  return x * factorial(x - 1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
// FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
