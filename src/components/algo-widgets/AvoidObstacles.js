const AvoidObstacles = ({ inputArray, children }) => {
  let maxLength = Array.from({ length: Math.max(...inputArray) + 1 });
  let minLength =
    1 +
    maxLength.findIndex((empty, length) =>
      inputArray.every(el => el % (length + 1) !== 0)
    );
  return children(minLength);
};

export default AvoidObstacles;

//* ------ Usage ------ *//
/*
<AvoidObstacles inputArray={[5, 3, 6, 7, 9]}>
  {minLength =>
    Array.from({ length: minLength }, (empty, i) => (
      <span key={i}>{i % 2 === 0 ? '👟' : '🌵'}</span>
    ))
  }
</AvoidObstacles>
*/

//------- Cleaner Coding 360 Approach ----------//
// let maxPossible = Math.max(...inputArray) + 1;
// for (let i = 1; 1 < maxPossible; i++) {
//   if (inputArray.every(el => el % i !== 0)) {
//     return i
//   }
// }

// #22
// https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5
