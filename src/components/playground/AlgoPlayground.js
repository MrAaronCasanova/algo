import React, { Component } from 'react';
import LongestWord from './../algo-widgets/LongestWord';

class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <LongestWord sentence="the $$$longest# word is casanova">
          {longestWord => <h3>{longestWord}</h3>}
        </LongestWord>
      </div>
    );
  }
}

export default AlgoPlayground;
