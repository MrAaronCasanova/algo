import React, { Component } from 'react';
import ArrayChange from './../algo-widgets/ArrayChange';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <ArrayChange inputArray={[1, 1, 1]}>
          {count => (
            <div>
              {Array.from({ length: count }, () => (
                <span role="img" aria-label="Clock">
                  ⏰
                </span>
              ))}
            </div>
          )}
        </ArrayChange>
      </div>
    );
  }
}

export default AlgoPlayground;
