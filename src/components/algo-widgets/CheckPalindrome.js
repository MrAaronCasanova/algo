const CheckPalindrome = ({ inputString, children }) => {
  const strNoSpaces = inputString.replace(/\s/g, '');
  const reverseStr = strNoSpaces
    .split('')
    .reverse()
    .join('');

  return children(strNoSpaces === reverseStr);
};

export default CheckPalindrome;
