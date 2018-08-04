import React, { Component } from 'react';
import AdjacentElementsProduct from './../algo-widgets/AdjacentElementsProduct';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AdjacentElementsProduct inputArray={[3, 6, -2, -5, 7, 3]}>
          {largestProduct => <div>{largestProduct}</div>}
        </AdjacentElementsProduct>
      </div>
    );
  }
}

export default AlgoPlayground;
