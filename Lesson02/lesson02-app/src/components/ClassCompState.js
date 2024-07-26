import React, { Component } from 'react'

export default class ClassCompState extends Component {
    // hàm khởi tạo
    constructor(props){
        super(props);
        // Tạo đối tượng state
        this.state = {
            name:"Chung Chung",
            age:45,
            email:"chungtrinhj@gmail.com",
            list:["Toán","Văn","Anh"]
        }
    }

    // Hàm xử lý sự kiện 
    ChangeName=()=>{
        this.setState({
            name:"Chung Trịnh",
            age:100,
            list:["Văn", "Sử", "Địa"]
        });
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h1>Demo state - Hiển thị / thay đôi dữ liệu trong state</h1>
        <hr/>
        <h3>Name: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <h3>Email: {this.state.email}</h3>
        <h3>List:{this.state.list}</h3>
        <button onClick={this.ChangeName}>Change Name</button>
      </div>
    )
  }
}
