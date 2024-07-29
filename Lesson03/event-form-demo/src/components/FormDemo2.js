import React, { Component } from 'react'

export default class FormDemo2 extends Component {
    // Bước 2
    constructor(props){
        super(props);
        this.state = {
            studentName:'',
            age:0,
            course:''
        }
    }
    // Bước 3
    handleChange = (ev)=>{
        // lấy tên điều khiển trên form
        let name=ev.target.name 
        // lấy giá trị
        let value = ev.target.value
        // Cập nhật state
        this.setState({
            [name]:value
        })

    }

    // Bước 4: Xử lý khi submit form
    handleSubmit=(event)=>{
        event.preventDefault();
        // chuyển lên app
        this.props.onSubmit(this.state);
    }
    render() {

        // Bước 1
        return (
            <div className='alert alert-danger'>
                <h1>Kết hợp nhiều thành phần</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="studentName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="studentName" 
                            name='studentName'
                            value={this.state.studentName}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" id="age" 
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="course" className="form-label">Course</label>
                        <select id="course"  className="form-control"
                            name='course'
                            value={this.state.course}
                            onChange={this.handleChange}>
                                <option value={''}>---Chọn khóa học---</option>
                                <option value={'html5'}>HTML5</option>
                                <option value={'css3'}>CSS3</option>
                                <option value={'js'}>Javascript</option>
                        </select>
                    </div>
                    <button className='btn btn-success' onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
