const AdjacentElementsProduct = ({ inputArray, children }) => {
  let product = inputArray[0] * inputArray[1];
  inputArray.forEach((num, i, arr) => {
    let checkProduct = num * arr[i + 1];
    if (checkProduct >= product) product = checkProduct;
  });
  return children(product);
};

export default AdjacentElementsProduct;

// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
