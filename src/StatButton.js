import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'

class StatButton extends Component {

  handleStatClick = () => {
    console.log("handleStatClick clicked");
    this.props.onStatClick(1);
  }

  determineVariant = () => {
    console.log("variant for " + this.props.buttonText + " : " + this.props.variant);
    return this.props.variant != null ? this.props.variant : "primary";
  }

  render() {
    return (
      <Button variant={this.determineVariant()} onClick={this.handleStatClick}>
        { this.props.buttonText } <Badge variant="light">{this.props.stat}</Badge>
      </Button>
    );
  }
}

export default StatButton;