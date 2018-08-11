import React, { Component } from 'react';
import SortByHeight from './../algo-widgets/SortByHeight';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <SortByHeight a={[-1, 150, 190, 170, -1, -1, 160, 190]}>
          {arr => (
            <div>
              {arr.map((item, i) => (
                <span key={i}>{item} </span>
              ))}
            </div>
          )}
        </SortByHeight>
      </div>
    );
  }
}

export default AlgoPlayground;
