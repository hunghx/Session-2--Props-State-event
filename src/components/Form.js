import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }
  handleSetTask = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };
  handleAddTask = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.newTask);
    // add finish
    this.setState({
      newTask: "",
    });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.newTask}
          onChange={(e) => this.handleSetTask(e)}
        />
        <button onClick={(e) => this.handleAddTask(e)}>Add</button>
      </form>
    );
  }
}
