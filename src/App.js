import "./App.css";
import Display from "./components/Display";
import React, { Component } from "react";
import Todolist from "./components/Todolist";

export default class App extends Component {
  render() {
    let age = 25;
    let name = " Nguyễn Văn A";
    let arr = [1, 3, 5, 7];
    function displayName(number) {
      console.log(number);
      console.log("helo , my name is " + name);
    }
    return (
      <div className="App">
        <Todolist />
        {/* <Display name={name} age={age} array={arr} fun={displayName}></Display> */}
      </div>
    );
  }
}
