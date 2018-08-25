import React, { Component } from 'react';
import MeanMedianMode from '../algo-widgets/MeanMedianMode';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <MeanMedianMode inputArray={[1, 2, 3, 4, 5, 4, 6, 1]}>
          {({ mean, median, mode }) => (
            <div>
              <p>
                <strong>Mean</strong>: {mean}
              </p>
              <p>
                <strong>Median</strong>: {median}
              </p>
              <p>
                <strong>Mode</strong>: \
                {mode.map(el => (
                  <span>\ {el} \</span>
                ))}
                \
              </p>
            </div>
          )}
        </MeanMedianMode>
      </div>
    );
  }
}

export default AlgoPlayground;
