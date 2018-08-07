import React, { Component } from 'react';
import MakeArrayConsecutive2 from './../algo-widgets/MakeArrayConsecutive2';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <MakeArrayConsecutive2 statues={[2, 4, 5, 7]}>
          {count => <div>{count} values are missing from the array!</div>}
        </MakeArrayConsecutive2>
      </div>
    );
  }
}

export default AlgoPlayground;
