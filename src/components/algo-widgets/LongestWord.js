const LongestWord = ({ sentence, children }) => {
  // first create an array of every word excluding special characters/stripping away punctuation
  let senArr = sentence.match(/[a-z0-9]+/gi);
  // sort the array in decending order and return the first item
  let longestWord = senArr.sort((a, b) => b.length - a.length)[0];

  return children(longestWord);
};

export default LongestWord;

// --- Usage --- //
/*
<LongestWord sentence="the $$$longest# word is casanova">
  {longestWord => <h3>{longestWord}</h3>}
</LongestWord>
*/

// https://www.coderbyte.com/results/aaronccasanova:Longest%20Word:JavaScript
