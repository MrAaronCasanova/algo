import React, { Component } from 'react';
import CheckPalindrome from './../algo-widgets/CheckPalindrome';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <CheckPalindrome inputString="Evil Olive">
          {isPalidrome => (
            <div>
              {isPalidrome
                ? 'Input is a palidrome'
                : 'Input is not a palidrome'}
            </div>
          )}
        </CheckPalindrome>
      </div>
    );
  }
}

export default AlgoPlayground;
