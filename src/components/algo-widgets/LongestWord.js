const LongestWord = ({ sentence, children }) => {
  // first create an array of every word excluding special characters
  let senArr = sentence.match(/[a-z0-9]+/gi);
  // then sort the array and return first item
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
