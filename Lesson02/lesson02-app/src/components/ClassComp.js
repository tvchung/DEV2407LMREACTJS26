import React, { Component } from 'react'

export default class ClassComp extends Component {
  render() {
    return (
      <div className='alert alert-info'>
            <h1>Class Component Demo </h1>
            <p>Xin chào: {this.props.renderFullName}</p>
            <p>Company: {this.props.renderCompany}</p>
      </div>
    )
  }
}
