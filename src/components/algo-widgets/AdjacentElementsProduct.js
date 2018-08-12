const AdjacentElementsProduct = ({ inputArray, children }) => {
  let product = inputArray[0] * inputArray[1];
  inputArray.forEach((num, i, arr) => {
    let checkProduct = num * arr[i + 1];
    if (checkProduct >= product) product = checkProduct;
  });
  return children(product);
};

export default AdjacentElementsProduct;

//* ------ Usage ------ *//
/*
<AdjacentElementsProduct inputArray={[3, 6, -2, -5, 7, 3]}>
  {result => (
    <div>
      {result} is the largest product of all the adjecent elements
    </div>
  )}
</AdjacentElementsProduct>
*/

// #4
// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
