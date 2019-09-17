import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import './StatButton.css';

class StatButton extends Component {

  handlePlusClick = () => {
    this.handleStatClick(1);
  }

  handleMinusClick = () => {
    this.handleStatClick(-1);
  }

  handleStatClick = (value) => {
    console.log("handleStatClick clicked");
    this.props.onStatClick(value);
  }

  render() {
    return (
      <div class="statbutton">
        <Row noGutters="true">
          <Col sm={5}>
            <div class="button-title">
              { this.props.buttonText }
            </div>
          </Col>
          <Col md={3}>
            <h1>
              <Badge variant="light">{this.props.stat}</Badge>
            </h1>
          </Col>
          <Col md={2}>
            <FontAwesomeIcon icon={faPlusSquare} color="green" size="3x" onClick={this.handlePlusClick}/>
          </Col>
          <Col md={2}>
            <FontAwesomeIcon icon={faMinusSquare} color="red" pull="left" size="3x" onClick={this.handleMinusClick}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StatButton;