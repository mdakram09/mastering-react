import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
