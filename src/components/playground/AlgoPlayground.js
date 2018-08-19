import React, { Component } from 'react';
import ArrayMaximalAdjacentDifference from './../algo-widgets/ArrayMaximalAdjacentDifference';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <ArrayMaximalAdjacentDifference inputArray={[20, 96, 14, 0, 6]}>
          {maxDiff => <div>{maxDiff} bottles of 🍻 on the wall!</div>}
        </ArrayMaximalAdjacentDifference>
      </div>
    );
  }
}

export default AlgoPlayground;
