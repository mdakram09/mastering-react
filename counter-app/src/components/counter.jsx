import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCounter()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
