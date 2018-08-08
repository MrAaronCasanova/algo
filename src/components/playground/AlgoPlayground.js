import React, { Component } from 'react';
import AllLongestStrings from './../algo-widgets/AllLongestStrings';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AllLongestStrings
          inputArray={['mmm', '**', 'eee', 'ooo', '_', 'www', '!']}
        >
          {longestStrings => (
            <div>
              {longestStrings.map((str, i) => <span key={i}>{str}</span>)}
            </div>
          )}
        </AllLongestStrings>
      </div>
    );
  }
}

export default AlgoPlayground;
