import React from 'react'

export default function FuncComp1({renderData, renderStudents}) {
    // const {renderData, renderStudents} = props;
  return (
    <div className='alert alert-danger'>
        <p> Danh sách thuộc tính: </p>
        <p>Data: {renderData}</p>
        <p>Students: {renderStudents}</p>
    </div>
  )
}
