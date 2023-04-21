import React, { Component } from "react";

export default class List extends Component {
  handleDelete = (idDel) => {
    this.props.handleDelete(idDel);
  };
  render() {
    console.log(this.props.list);
    let string = this.props.list.map((element) => (
      <li key={element.id}>
        <button onClick={() => this.handleDelete(element.id)}>X</button>
        <span>{element.task}</span>
      </li>
    ));
    return (
      <div>
        <ul>
          {/* {this.props.list.map((element) => (
            <li>
              <button>X</button>
              <span>{element.task}</span>
            </li>
          ))} */}
          {string}
        </ul>
      </div>
    );
  }
}
