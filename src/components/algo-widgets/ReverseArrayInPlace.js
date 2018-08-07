const ReverseArrayInPlace = ({ arr, children }) => {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }

  return children(arr);
};

export default ReverseArrayInPlace;

// from stephen griders algo course
