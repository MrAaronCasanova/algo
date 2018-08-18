import React, { Component } from 'react';
import AreEquallyStrong from './../algo-widgets/AreEquallyStrong';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AreEquallyStrong
          yourLeft={10}
          yourRight={15}
          friendsLeft={15}
          friendsRight={10}
        >
          {isEqual => <div>{isEqual ? '💪💪💪💪' : '👎🏽'}</div>}
        </AreEquallyStrong>
      </div>
    );
  }
}

export default AlgoPlayground;
