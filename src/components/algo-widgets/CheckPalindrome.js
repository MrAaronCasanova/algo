const CheckPalindrome = ({ inputString, children }) => {
  const strNoSpaces = inputString.replace(/\s/g, '');
  const reverseStr = strNoSpaces
    .split('')
    .reverse()
    .join('');

  return children(strNoSpaces === reverseStr);
};

export default CheckPalindrome;

// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
