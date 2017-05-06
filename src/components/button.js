import React, { Component } from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class ActionButton extends Component {
  constructor (props) {
    super(props)
    this.addTask = this.props.addTask.bind(this)
  }
  render () {
    return (
      <div>
        <Row>
          <Col xs={10} />
          <Col xs={2}>
            <Button bsStyle='danger' className='green-button' bsSize='large' onClick={this.addTask.bind(this)}>
              <FontAwesome name='plus' />
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ActionButton
