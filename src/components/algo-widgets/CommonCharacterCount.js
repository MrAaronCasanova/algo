const CommonCharacterCount = ({ s1, s2, children }) => {
  let count = 0;
  s1.split('').forEach(letter => {
    if (s2.indexOf(letter) !== -1) {
      s2 = s2.replace(letter, '');
      count++;
    }
  });

  return children(count);
};

export default CommonCharacterCount;

//* ------ Usage ------ *//
/*
<CommonCharacterCount s1="aabcc" s2="adcaa">
  {commonCharacters => (
    <div>The two strings have {commonCharacters} common characters</div>
  )}
</CommonCharacterCount>
*/

//* --------- Coding360 Approach ------- *//
// let arr1 = s1.split('');
// let arr2 = s2.split('');
// let countObj = arr =>
//   arr.reduce((count, letter) => {
//     count[letter] = (count[letter] || 0) + 1;
//     return count;
//   }, {});
// let obj1Count = countObj(arr1);
// let obj2Count = countObj(arr2);

// let total = 0;
// for (let prop in obj1Count) {
//   // quick typeof check to see if obj1 prop is in obj2
//   if (typeof obj2Count[prop] !== 'undefined') {
//     // obj1 prop is in obj2
//     // increment total by smallest value (aka common characters)
//     obj2Count[prop] < obj1Count[prop]
//       ? (total += obj2Count[prop])
//       : (total += obj1Count[prop]);
//   }
// }

// return children(total);

// #10
// https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32/solutions/2Adt9QPoztXedxjv6
