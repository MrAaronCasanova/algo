import React, { Component } from 'react';
import AlternatingSums from './../algo-widgets/AlternatingSums';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AlternatingSums a={[50, 60, 60, 45, 70]}>
          {teamWeights =>
            teamWeights.map((val, i) => (
              <div key={i}>
                Team {i + 1}: {val}
                /lb 🏋️‍
              </div>
            ))
          }
        </AlternatingSums>
      </div>
    );
  }
}

export default AlgoPlayground;
