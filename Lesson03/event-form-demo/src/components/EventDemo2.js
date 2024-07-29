import React, { Component } from 'react'

export default class EventDemo2 extends Component {
    // Hàm xử lý sự kiện
    eventHandleClick1 = (param)=>{
        alert(param)
    }

    eventHandleClick2 = ()=>{
        alert("XIn chào");
    }

    render() {
        return (
        <div>
            <h2>Event Demo </h2>
            {/* Gọi hàm có tham số  */}
            <button onClick={()=>this.eventHandleClick1("Chung chung")}> Button01 </button>
            {/* Gọi hàm không có tham số  */}
            <button onClick={()=>this.eventHandleClick2()}> Button02 </button>
            <button onClick={this.eventHandleClick2}> Button03 </button>
        </div>
        )
    }
}
