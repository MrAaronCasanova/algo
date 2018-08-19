const ArrayMaximalAdjacentDifference = ({ inputArray, children }) => {
  let maxDiff = inputArray.reduce((acc, val, i) => {
    let currentDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
    currentDiff > acc && (acc = currentDiff);
    return acc;
  }, 0);
  return children(maxDiff);
};

export default ArrayMaximalAdjacentDifference;

//* ------ Usage ------ *//
/*
<ArrayMaximalAdjacentDifference inputArray={[20, 96, 14, 0, 6]}>
  {maxDiff => <div>{maxDiff} bottles of 🍻 on the wall!</div>}
</ArrayMaximalAdjacentDifference>
*/

// #20
// https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE
