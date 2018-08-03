const FirstFactorial = ({ num, children }) => {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return children(factorial);
};

export default FirstFactorial;

//* ------ Usage ------ *//
/*
<FirstFactorial num={4}>
  {factorial => {
    return Array.from({ length: factorial }, (empty, i) => (
      <span key={i} role="img" aria-label="t-rex">
        🦖
      </span>
    ));
  }}
</FirstFactorial>
*/

//* ------ Recursive Approach ------ *//
// const FirstFactorial = ({ num, children }) => {
//   // our factorial function
//   const factorial = n => {
//     // terminate the recursion once we hit zero
//     if (n === 0) {
//       return 1;
//     }

//     // otherwise keep calling the function recursively
//     else {
//       return factorial(n - 1) * n;
//     }
//   };

//   return children(factorial(num));
// };

// https://www.coderbyte.com/results/aaronccasanova:First%20Factorial:JavaScript
