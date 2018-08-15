const ArrayChange = ({ inputArray, children }) => {
  let count = 0;
  inputArray.forEach((el, i) => {
    if (inputArray[i] >= inputArray[i + 1]) {
      let diff = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += diff;
    }
  });
  return children(count);
};

export default ArrayChange;

//* ------ Usage ------ *//
/*
<ArrayChange inputArray={[1, 1, 1]}>
  {count => (
    <div>
      {Array.from({ length: count }, () => (
        <span role="img" aria-label="Clock">
          ⏰
        </span>
      ))}
    </div>
  )}
</ArrayChange>
*/

// #17
// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg
