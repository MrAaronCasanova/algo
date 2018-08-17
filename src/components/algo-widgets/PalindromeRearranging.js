const PalidromeRearranging = ({ inputString, children }) => {
  const letterCount = inputString.split('').reduce((acc, val) => {
    acc[val] ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});
  const oddCount = Object.values(letterCount).reduce((acc, val) => {
    if (val % 2 !== 0) acc += 1;
    return acc;
  }, 0);
  return children(oddCount > 1 ? false : true);
};

export default PalidromeRearranging;

//* ------ Usage ------ *//
/*
<PalindromeRearranging inputString={'aabb'}>
  {isPossible => <div>{isPossible ? '🎊🎁🎉' : '😿'}</div>}
</PalindromeRearranging>
*/

// #18
// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
