const LongestWord = ({ sentence, children }) => {
  // first replace anything that's not a word character with and empty space and split
  let senArr = sentence.replace(/[^a-z0-9]/gi, ' ').split(' ');
  // then sort the array and return first item
  let longestWord = senArr.sort((a, b) => b.length - a.length)[0];

  return children(longestWord);
};

export default LongestWord;

// --- Usage --- //

/* <LongestWord sentence="Argument goes here">
  {longestWord => <h3>{longestWord}</h3>}
</LongestWord> */
