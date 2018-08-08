const MatrixElementsSum = ({ matrix, children }) => {
  let priceTotal = 0;
  let banndedIndices = [];

  matrix.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 0) {
        banndedIndices.push(j);
      } else if (banndedIndices.indexOf(j) === -1) {
        priceTotal += val;
      }
    });
  });

  return children(priceTotal);
};

export default MatrixElementsSum;

// Matrix Format -----------
// [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
// ]

//* ------ Usage ------ *//
/*
<MatrixElementsSum matrix={[[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]}>
  {priceTotal => (
    <div>The total cost for the rooms is ${priceTotal}</div>
  )}
</MatrixElementsSum>
*/

// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr
