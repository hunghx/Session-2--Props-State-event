import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, task: "đi học" },
        { id: 2, task: "đi chơi" },
        { id: 3, task: "đi ngủ" },
      ],
    };
  }
  handleAdd = (newTask) => {
    // tạo id mới
    let newID =
      this.state.list.length === 0
        ? 1
        : this.state.list[this.state.list.length - 1].id + 1;
    this.setState({
      list: [...this.state.list, { id: newID, task: newTask }],
    });
  };
  handleDelete = (idDel) => {
    let newArr = this.state.list.filter((element) => element.id !== idDel);
    this.setState({
      list: [...newArr],
    });
  };
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <List list={this.state.list} handleDelete={this.handleDelete} />
        <Form handleAdd={this.handleAdd} />
      </div>
    );
  }
}
