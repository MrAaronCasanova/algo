const AlternatingSums = ({ a, children }) => {
  let sum1 = 0;
  let sum2 = 0;
  a.forEach((val, i) => (i % 2 === 0 ? (sum1 += val) : (sum2 += val)));
  return children([sum1, sum2]);
};

export default AlternatingSums;

//* ------ Usage ------ *//
/*
<AlternatingSums a={[50, 60, 60, 45, 70]}>
  {teamWeights =>
    teamWeights.map((val, i) => (
      <div key={i}>
        Team {i + 1}: {val}
        /lb 🏋️‍
      </div>
    ))
  }
</AlternatingSums>
*/

// #14
// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9
