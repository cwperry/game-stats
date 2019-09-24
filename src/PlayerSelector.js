import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './PlayerSelector.css';

class PlayerSelector extends Component {

  constructor(props) {
    super(props);
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    this.state = {
      player: this.props.player,
      statWeights: this.props.statWeights
    }
  }

  handlePlayerClick = () => {
    this.props.onPlayerClick(this.props.player);
  }

  determineIconClass = (performance) => {
    const value = Math.abs(performance);
    if (value >= 3) {
      return "performance-3x"
    } else {
      return "performance-" + Math.round(value) + "x";
    }
  }

  showPerformance = () => {
    const performance = this.props.player.stats.performance(this.props.statWeights);
    const iconClass = this.determineIconClass(performance);
    console.log("performance = " + performance);
    if(performance > 0) {
      return <FontAwesomeIcon icon={faChevronUp} color="green" className={iconClass}/>
    } else if (performance < 0) {
      return <FontAwesomeIcon icon={faChevronDown} color="red" className={iconClass}/>
    } else {
      return null;
    }

    // return performance;
  }

  render() {
    return(
      <div class="player-selector" onClick={this.handlePlayerClick}>
        <div class="name">{this.props.player.name}</div>
        <div class="number-container">
          <span class="number">{this.props.player.number}</span>
          <span class="performance">{this.showPerformance()}</span>
        </div>
      </div>
    );
  }
  
}

export default PlayerSelector;