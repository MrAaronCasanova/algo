import React, { Component } from 'react';
import AddBorder from './../algo-widgets/AddBorder';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <AddBorder picture={['abc', 'ded']}>
          {newPic => newPic.map((val, i) => <div key={i}> {val} </div>)}
        </AddBorder>
      </div>
    );
  }
}

export default AlgoPlayground;
