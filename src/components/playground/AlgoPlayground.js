import React, { Component } from 'react';
import ShapeArea from './../algo-widgets/ShapeArea';
class AlgoPlayground extends Component {
  render() {
    return (
      <div>
        <ShapeArea n={15}>
          {area => (
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  background: 'lightsteelblue',
                  height: `${area}px`,
                  width: `${area}px`,
                  transform: 'rotate(45deg)'
                }}
              />
            </div>
          )}
        </ShapeArea>
      </div>
    );
  }
}

export default AlgoPlayground;
