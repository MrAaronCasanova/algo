import React, { Component } from 'react';
import LongestWord from './../algo-widgets/LongestWord';

class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <LongestWord sentence="Argument goes here">
          {longestWord => <h3>{longestWord}</h3>}
        </LongestWord>
      </div>
    );
  }
}

export default AlgoPlayground;
