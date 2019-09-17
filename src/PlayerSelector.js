import React, { Component } from 'react';

import './PlayerSelector.css';

class PlayerSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player
    }
  }

  handlePlayerClick = () => {
    this.props.onPlayerClick(this.state.player);
  }

  render() {
    return(
      <div class="player-selector" onClick={this.handlePlayerClick}>
        <div class="name">{this.state.player.name}</div>
        <div class="number">{this.state.player.number}</div>
      </div>
    );
  }
  
}

export default PlayerSelector;