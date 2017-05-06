import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import Button from './button.js'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: '',
      period: '',
      title: '',
      description: ''
    }
    this.time = this.time.bind(this)
    this.period = this.period.bind(this)
  }

  time (e) {
    console.log(e.target.value)
  }

  period (e) {
    console.log(e.target.value)
  }

  render () {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <h2>พื้นที่ไว้สร้าง form สำหรับกรอกข้อมูล</h2>
            <label>วันที่ (time)</label>
            <input type="text" onChange={this.time} /> <br/>
            <label>เวลา (period) </label>
            <select onChange={this.period}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select><br/>
            <label>เรื่อง (title)</label>
            <input type="text" /><br/>
            <label>รายละเอียด (description)</label>
            <input type="text" /><br/>
            <Button addTask={this.props.addTask.bind(this)}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Form
