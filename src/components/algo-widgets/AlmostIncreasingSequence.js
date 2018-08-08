const AlmostIncreasingSequence = ({ sequence, children }) => {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    //first check if current val is less than previous
    if (sequence[i] <= sequence[i - 1]) {
      //increment counter
      count++;
      // seconday check for increasing value
      // if current val is less then (2)previous and next val is less than previous val
      // force false
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        // increase count once more to force false
        count++;
      }
    }
  }

  return children(count <= 1);
};

export default AlmostIncreasingSequence;

//* -------- usage ---------- *//
/*
<AlmostIncreasingSequence sequence={[1, 3, 2, 4]}>
  {isIncreasing => <div>{`${isIncreasing}`}</div>}
</AlmostIncreasingSequence>
*/

// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG/solutions/k6S5Q8x6sqJnrRcha
