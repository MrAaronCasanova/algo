import React, { Component } from 'react';
import MatrixElementsSum from './../algo-widgets/MatrixElementsSum';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <MatrixElementsSum matrix={[[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]}>
          {priceTotal => (
            <div>The total cost for the rooms is ${priceTotal}</div>
          )}
        </MatrixElementsSum>
      </div>
    );
  }
}

export default AlgoPlayground;
