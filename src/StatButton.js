import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Badge from 'react-bootstrap/Badge';
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
    const { onStatClick } = this.props;
    onStatClick(value);
  }

  render() {
    const { buttonText, stat } = this.props;
    return (
      <div className="statbutton">
        <Row noGutters="true">
          <Col sm={5}>
            <div className="button-title">
              { buttonText }
            </div>
          </Col>
          <Col md={3}>
            <h1>
              <Badge variant="light">{ stat }</Badge>
            </h1>
          </Col>
          <Col md={2}>
            <FontAwesomeIcon icon={faPlusSquare} color="green" size="3x" onClick={this.handlePlusClick} />
          </Col>
          <Col md={2}>
            <FontAwesomeIcon icon={faMinusSquare} color="red" pull="left" size="3x" onClick={this.handleMinusClick} />
          </Col>
        </Row>
      </div>
    );
  }
}

StatButton.propTypes = {
  onStatClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  stat: PropTypes.number.isRequired,
};

export default StatButton;
