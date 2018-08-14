import React, { Component } from 'react';
import AreSimilar from './../algo-widgets/AreSimilar';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AreSimilar a={[1, 2, 3]} b={[2, 1, 3]}>
          {similar => (
            <div>
              {similar
                ? 'The two arrays are similar'
                : 'The two arrays are NOT similar'}
            </div>
          )}
        </AreSimilar>
      </div>
    );
  }
}

export default AlgoPlayground;
