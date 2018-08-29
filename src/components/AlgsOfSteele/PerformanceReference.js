// * ---------------- Data Structure Performance Reference ------------- *//

// ------ Objects ------ //
// Unordered, key value pairs!

// When to use objects
// When you don't need order
// When you need fast access / insertion and removal
// When you don't need any ordering, objects are an excellent choice!

// Big O of Objects
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N) - within value
// Access - O(1)

// Big O of Object Methods
// Object.keys - O(N)
// Object.values - O(N)
// Object.entries - O(N)
// hasOwnProperty - O(1)

// ------ Arrays ------ //
// Ordered lists!

// When to use arrays
// When you need order
// When you need fast access / insertion and removal(sort of....)

// Big O of Arrays
// Insertion - It depends.... (O(n) if reindexing occurs)
//    (arr.push O(1)) anywhere else the indices have to be reassigned O(n)
// Removal - It depends.... (O(n) if reindexing occurs)
//    (arr.pop O(1)) anywhere else the indices have to be reassigned O(n)
// Searching - O(N)
// Access - O(1)

// Big O of Array Methods
// push - O(1)
// pop - O(1)
// shift - O(N)
// unshift - O(N)
// concat - O(N)
// slice - O(N)
// splice - O(N)
// sort - O(N * log N)
// forEach / map / filter / reduce / etc. - O(N)
