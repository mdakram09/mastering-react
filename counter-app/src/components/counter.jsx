import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 && "Please create a new tag."}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
