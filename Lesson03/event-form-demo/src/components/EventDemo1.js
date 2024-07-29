import React from 'react'

export default function EventDemo1() {

    // Hàm xử lý sự kiện
    const eventHandleClick1 = ()=>{
        alert("eventHandleClick1 - Button01")
    }
    const eventHandleClick2 = ()=>{
        alert("eventHandleClick2 - Button02")
    }
    const eventHandleClick3 = (param) =>{
        alert("Xin chào, \n" + param)
    }
    return (
        <div className='alert alert-info'>
            <h2>Event Demo </h2>
            {/* Hàm được gọi một lần duy nhất khi trang được render  */}
            {/* <button onClick={eventHandleClick1()}>Button01</button> */}

            {/* Hàm được gọi khi người dùng click vào button02  */}
            <button onClick={eventHandleClick2}>Button02</button>
            {/* gọi hàm -> arrow fungtion  */}
            <button onClick={()=>eventHandleClick2()}> Button02</button>

            {/* Gọi hàm có tham số  */}
            <button onClick={()=>eventHandleClick3("Devmaster Academy")}> Button03 </button>
            <button> Button04 </button>
        </div>
    )
}
