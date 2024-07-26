import React from 'react'
export default function JSX_Expression() {
    // Biến 
    const name = "Devmaster Academy"
    // Biến đối tượng
    const person = {
        name:"Chung Trịnh",
        age:45
    }
    // Hàm
    const fnInfo = (user)=>{
        return  <h3>Welcome to, {user.name} - {user.age}</h3> 
    }
    // element
    const element = (
        <div className='alert alert-danger'>
            <h2> Xin chào: {person.name}</h2>
            <h3> Tuổi: {person.age}</h3>
            <p> Bạn già rồi!</p>
        </div>
    )
    // 
    const fnElementSayHello = (param)=>{
        if(param > 30){
            return <h4> Bạn hơi già </h4>;
        }else{
            return <h3> Hello, bạn trẻ quá </h3>
        }
    }
  return (
    <div>
        <b>JSX_Expression</b>
        <br/>
        <h3 style={{ color:'blue'}}>Welcome to, {name} tuổi!</h3>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <hr/>
        {fnInfo(person)}
        {element}
        {fnElementSayHello(person.age)}
    </div>
  )
}
