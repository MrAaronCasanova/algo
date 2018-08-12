import React, { Component } from 'react';
import AdjacentElementsProduct from './../algo-widgets/AdjacentElementsProduct';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AdjacentElementsProduct inputArray={[3, 6, -2, -5, 7, 3]}>
          {result => (
            <div>
              {result} is the largest product of all the adjecent elements
            </div>
          )}
        </AdjacentElementsProduct>
      </div>
    );
  }
}

export default AlgoPlayground;
