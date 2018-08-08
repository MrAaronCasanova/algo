import React, { Component } from 'react';
import AlmostIncreasingSequence from './../algo-widgets/AlmostIncreasingSequence';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AlmostIncreasingSequence sequence={[1, 3, 2, 4]}>
          {isIncreasing => <div>{`${isIncreasing}`}</div>}
        </AlmostIncreasingSequence>
      </div>
    );
  }
}

export default AlgoPlayground;
