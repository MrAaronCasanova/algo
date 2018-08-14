const AreSimilar = ({ a, b, children }) => {
  const aDiffs = a.filter((el, i) => el !== b[i]);
  const bDiffs = b.filter((el, i) => el !== a[i]);
  return children(
    aDiffs.length === 0 ||
      (aDiffs.length === 2 && aDiffs.join('') === bDiffs.reverse().join(''))
  );
};

export default AreSimilar;

//* ------ Usage ------ *//
/*
<AreSimilar a={[1, 2, 3]} b={[2, 1, 3]}>
  {similar => (
    <div>
      {similar
        ? 'The two arrays are similar'
        : 'The two arrays are NOT similar'}
    </div>
  )}
</AreSimilar>
*/

//* ------ Coding 360 Approach ------ *//
// if (a.toString() === b.toString()) return children(true);

// let c = [];
// let d = [];

// a.forEach((el, i) => {
//   if (a[i] !== b[i]) {
//     c.push(a[i]);
//     d.push(b[i]);
//   }
// });

// d = d.reverse();

// if (c.length === 2 && c.toString() === d.toString()) {
//   return children(true);
// }

// return children(false);
