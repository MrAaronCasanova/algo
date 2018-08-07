import React, { Component } from 'react';
import ReverseArrayInPlace from './../algo-widgets/ReverseArrayInPlace';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <ReverseArrayInPlace arr={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>
          {reverseArr => (
            <div>
              {reverseArr.map((item, i) => <span key={i}>{item}</span>)}
            </div>
          )}
        </ReverseArrayInPlace>
      </div>
    );
  }
}

export default AlgoPlayground;
