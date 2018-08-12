const ReverseParentheses = ({ s, children }) => {
  while (s.includes('(')) {
    s = s.replace(/\(([^()]+)\)/, (match, inside) => {
      return inside
        .split('')
        .reverse()
        .join('');
    });
  }

  return children(s);
};

export default ReverseParentheses;

//* ------ Usage ------ *//
/*
<ReverseParentheses s="12(87(56)43)9">
  {result => <div>{result}</div>}
</ReverseParentheses>
*/

//* ----- While Loop Approach ----- *//
// const reverse = str =>
//   str
//     .split('')
//     .reverse()
//     .join('');

// while (s.includes('(')) {
//   let lastOpenIdx = s.lastIndexOf('(');
//   let firstCloseIdx = s.indexOf(')', s.lastIndexOf('('));
//   s =
//     s.slice(0, lastOpenIdx) +
//     reverse(s.slice(lastOpenIdx + 1, firstCloseIdx)) +
//     (firstCloseIdx + 1 === s.length
//       ? s.slice(firstCloseIdx, -1)
//       : s.slice(firstCloseIdx + 1));
// }

// return children(s);

// #13
// https://app.codesignal.com/arcade/intro/level-3/3o6QFqgYSontKsyk4
