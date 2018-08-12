const IsLucky = ({ n, children }) => {
  const sum = (start, end) => {
    return numString
      .substring(start, end)
      .split('')
      .reduce((acc, val) => {
        return parseInt(acc, 10) + parseInt(val, 10);
      });
  };
  const numString = n.toString();
  const middle = numString.length / 2;
  const firstHalf = sum(0, middle);
  const secondHalf = sum(middle, n.length);

  return children(firstHalf === secondHalf);
};

export default IsLucky;

//* ------ Usage ------ *//
/*
<IsLucky n={1230}>
  {isLucky =>
    isLucky ? (
      <div>
        <span role="img" aria-label="Lucky">
          💰🤑💰
                </span>
      </div>
    ) : (
        <div>
          <span role="img" aria-label="Unlucky">
            😞👎🏽
                </span>
        </div>
      )
  }
</IsLucky>
*/

// #11
// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ
