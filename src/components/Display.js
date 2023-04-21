import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      arraylist: [1, 3, 5, 7],
    };
    // để chỉ rõ đối tượng this hay để bind 1 phương thức sử dụng this
    // this.increase = this.increase.bind(this);
  }
  //   increase = function () {
  //     // để thay đổi giá trị của 1 state bắt buộc phải dùng hàm setState
  //     this.setState({ count: this.state.count + 1 });
  //   };

  // ES6
  increase = () => {
    // để thay đổi giá trị của 1 state bắt buộc phải dùng hàm setState
    let random = Math.floor(Math.random() * 100); // hàm random tạo cho 1 số thực ngẫu nhiên từ 0-1
    // hàm floor làm tròn xuống
    console.log(random);

    this.setState({
      count: this.state.count + 1,
      arraylist: [...this.state.arraylist, random],
    });
  };
  showNotify = () => {
    window.alert(" thành công");
  };
  render() {
    let { name, age, array } = this.props; // destructoring object
    let [a, ...rest] = array; // destructoring + rest parameter
    // console.log(rest);

    this.props.fun({ id: 1, task: "đi học" });
    return (
      <>
        <div>Tên là : {name}</div>
        <div>Tuổi là : {age}</div>
        <div>{this.state.count}</div>
        <div>{this.state.arraylist}</div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.showNotify}>alert</button>
      </>
    );
  }
}
