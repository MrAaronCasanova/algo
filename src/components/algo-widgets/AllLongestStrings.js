const AllLongestStrings = ({ inputArray, children }) => {
  let maxLength = Math.max(...inputArray.map(str => str.length));

  return children(inputArray.filter(str => str.length === maxLength));
};

export default AllLongestStrings;

//* ------ Usage ------ *//
/*
<AllLongestStrings
  inputArray={['mmm', '**', 'eee', 'ooo', '_', 'www', '!']}
>
  {longestStrings => (
    <div>
      {longestStrings.map((str, i) => <span key={i}>{str}</span>)}
    </div>
  )}
</AllLongestStrings>
*/

// -------- Coding360 Approach --------- //
// let maxLength = 0;
// inputArray.forEach(str => {
//   if (maxLength < str.length) maxLength = str.length;
// });

// inputArray = inputArray.filter(str => str.length === maxLength);

// return children(inputArray);

// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL/solutions/73vJ8j8bEwRp9SGPr
