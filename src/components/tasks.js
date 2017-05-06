import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class Task extends Component {
  constructor (props) {
    super(props)
    this.delTask = this.props.delTask.bind(this)
  }
  render () {
    return (
      <div>
        <Row>
          <Col xs={1}>
            <div>
              <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}> {this.props.time} <br />
                <span> { this.props.period }</span>
              </p>
            </div>
          </Col>
          <Col xs={10}>
            <h4 id='activity-title'> { this.props.title }</h4>
            <p> { this.props.description } : {this.props.id}</p>
          </Col>

          <Col xs={1}>
            <Row style={{paddingTop: '10px'}}>
              <Col xs={6}> <FontAwesome name='times' onClick={this.delTask.bind(this, this.props.id)} /> </Col>
              <Col xs={6}> <FontAwesome name='check' /> </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Task
