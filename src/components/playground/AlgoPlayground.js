import React, { Component } from 'react';
import CheckPalindrome from './../algo-widgets/CheckPalindrome';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <CheckPalindrome inputString="evil olive">
          {isPalindrome =>
            isPalindrome ? (
              <span role="img" aria-label="Thumbs Up">
                👍🏽
              </span>
            ) : (
              <span role="img" aria-label="Thumbs Down">
                👎🏽
              </span>
            )
          }
        </CheckPalindrome>
      </div>
    );
  }
}

export default AlgoPlayground;
