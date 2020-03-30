import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: []
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>there is no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={() => this.handleIncrement(product)}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2 glyphicon glyphicon-plus-sign"
        >
          Decrement
        </button>
        <button
          //   onClick={() => this.handleIncrement(product)}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          <span class="glyphicon glyphicon-plus-sign"></span>
          Increment
        </button>
        <a href="#" onClick={() => this.props.onIncrement(this.props.counter)}>
          <span className="glyphicon glyphicon-plus-sign"></span>
        </a>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <div>{this.renderTags()}</div> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
