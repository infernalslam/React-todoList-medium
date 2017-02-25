import React, { Component } from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class ActionButton extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={10} />
          <Col xs={2}>
            <Button bsStyle='danger' bsSize='large'>
              <FontAwesome name='plus' /> +
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ActionButton
