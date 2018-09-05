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
