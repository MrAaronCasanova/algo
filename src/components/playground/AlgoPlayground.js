import React, { Component } from 'react';
import AvoidObstacles from '../algo-widgets/AvoidObstacles';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AvoidObstacles inputArray={[5, 3, 6, 7, 9]}>
          {minLength =>
            Array.from({ length: minLength }, (empty, i) => (
              <span key={i}>{i % 2 === 0 ? '👟' : '🌵'}</span>
            ))
          }
        </AvoidObstacles>
      </div>
    );
  }
}

export default AlgoPlayground;
