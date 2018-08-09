import React, { Component } from 'react';
import CommonCharacterCount from './../algo-widgets/CommonCharacterCount';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <CommonCharacterCount s1="aabcc" s2="adcaa">
          {commonCharacters => (
            <div>The two strings have {commonCharacters} common characters</div>
          )}
        </CommonCharacterCount>
      </div>
    );
  }
}

export default AlgoPlayground;
