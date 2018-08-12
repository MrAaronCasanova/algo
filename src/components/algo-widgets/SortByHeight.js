const SortByHeight = ({ a, children }) => {
  let ascArr = a.filter(item => item !== -1).sort((a, b) => a - b);

  return children(a.map(item => (item !== -1 ? ascArr.shift() : '🌴')));
};

export default SortByHeight;

//* ------ Usage ------ *//
/*
<SortByHeight a={[-1, 150, 190, 170, -1, -1, 160, 190]}>
  {arr => (
    <div>
      {arr.map((item, i) => (
        <span key={i}>{item} </span>
      ))}
    </div>
  )}
</SortByHeight>
*/

//* ---------- Coding360 Approach with mod -------- *//
// let ascArr = a.filter(item => item !== -1).sort((a, b) => a - b);
// let indexTracker = 0;
// a.forEach((item, i) => {
//   if (item !== -1) {
//     a[i] = ascArr[indexTracker];
//     indexTracker++;
//   }
// });

// return children(a);

// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM
