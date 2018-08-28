// * ---------------- Big O Time Complexity ------------- *//

// O(n)
// the number of simple operations grow with n
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

addUpTo(6);
console.log('addUpTo(6)', addUpTo(6));

// ---------------------------------------------------

// O(1)
// the number of simple operations is constant
// always 3 operations
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

addUpTo2(6);
console.log('addUpTo2(6)', addUpTo2(6));

// ---------------------------------------------------

// O(n)
// operations grow with n
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

console.log('logAtLeast5(6)', logAtLeast5(6));

// ---------------------------------------------------

// O(1)
// constant at 5 operations max
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

console.log('logAtMost5(19)', logAtMost5(19));

//* ---------------- Notes ---------------- *//

// Time Complexity - how we analyze the runtime of an algorithm as the size of the input increases

// Arithmetic operations are constant
// Variable assignment is constant
// Accessing elements in an array(by index) or object(by key) is constant
// In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

// f(n) could be linear(f(n) = n)
// f(n) could be quadratic(f(n) = n**2)
// f(n) could be constant(f(n) = 1)
// f(n) could be something entirely different!

// ------ General rules for simplifying Big O Expressions

// Constants Don't Matter
// O(2n) = O(n)
// O(500) = O(1)
// O(13n**2) = O(n2)

// ------ Smaller Terms Don't Matter

// O(n + 10) = O(n)
// O(1000n + 50) = O(n)
// O(n**2 + 5n + 8) = O(n**2)
