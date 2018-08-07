const MakeArrayConsecutive2 = ({ statues, children }) => {
  // max minus min gives you the amount of values needed to make array consecutive
  // then subract by the amount of items are currently in the array .length+1
  return children(
    Math.max(...statues) - Math.min(...statues) - statues.length + 1
  );
};

export default MakeArrayConsecutive2;

//* ------ Coding360 Approach ------- *//
// statues.sort();
// let min = statues[0];
// let max = statues[statues.length - 1];
// let count = 0;

// for (let i = min; i < max; i++) {
//   if (statues.indexOf(i) === -1) {
//     count += 1;
//   }
// }

// return children(count);

// ------- usage ----------- //
/*
<MakeArrayConsecutive2 statues={[2, 4, 5, 7]}>
  {count => <div>{count} values are missing from the array!</div>}
</MakeArrayConsecutive2>
*/

// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC
