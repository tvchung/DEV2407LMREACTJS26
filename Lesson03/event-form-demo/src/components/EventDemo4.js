import React from 'react'

export default function EventDemo4({onSubmit}) {

    const handleClickMe = () =>{
        onSubmit("Data in EventDemo4", 1000);
    }
    return (
        <div className='alert alert-success'>
            <h2>EventDemo4 - props </h2>
            <button onClick={handleClickMe}>Click here</button>
        </div>
    )
}
