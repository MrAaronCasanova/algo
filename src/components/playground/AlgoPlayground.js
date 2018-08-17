import React, { Component } from 'react';
import PalindromeRearranging from './../algo-widgets/PalindromeRearranging';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <PalindromeRearranging inputString={'aabb'}>
          {isPossible => <div>{isPossible ? '🎊🎁🎉' : '😿'}</div>}
        </PalindromeRearranging>
      </div>
    );
  }
}

export default AlgoPlayground;
