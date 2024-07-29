import React, { Component } from 'react'

export default class ListObjectRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [
                { title: 'Cabbage', isFruit: false, id: 11 },
                { title: 'Garlic', isFruit: false, id: 22 },
                { title: 'Apple', isFruit: true, id: 33 },
              ],
        }
    }
    render() {
        let elements = this.state.products.map((item, index)=>{
            return (
                <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.isFruit?"Active":"Non-Active"}</td>
                </tr>
            )
        })
        return (
        <div>
            <h1>ListObjectRender</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>
        </div>
        )
    }
}
