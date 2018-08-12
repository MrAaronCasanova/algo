const CheckPalindrome = ({ inputString, children }) => {
  const strNoSpaces = inputString.replace(/\s/g, '').toLowerCase();
  const reverseStr = strNoSpaces
    .split('')
    .reverse()
    .join('');

  return children(strNoSpaces === reverseStr);
};

export default CheckPalindrome;

//* ------ Usage ------ *//
/*
<CheckPalindrome inputString="Evil Olive">
  {isPalidrome => (
    <div>
      {isPalidrome
        ? 'Input is a palidrome'
        : 'Input is not a palidrome'}
    </div>
  )}
</CheckPalindrome>
*/

// #3
// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
