/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './PlayerSelector.css';

class PlayerSelector extends Component {
  constructor(props) {
    super(props);
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    const { player, statWeights } = this.props;
    this.state = {
      player,
      statWeights,
    };
  }

  handlePlayerClick = () => {
    const { onPlayerClick } = this.props;
    const { player } = this.state;
    onPlayerClick(player);
  }

  determineIconClass = (performance) => {
    const value = Math.abs(performance);
    if (value >= 3) {
      return 'performance-3x';
    }
    return `performance-${Math.round(value)}x`;
  }

  showPerformance = () => {
    const { player, statWeights } = this.state;
    const performance = player.performance(statWeights);
    const iconClass = this.determineIconClass(performance);
    // console.log(`performance = ${player.name} ${performance}`);
    if (performance > 0) {
      return <FontAwesomeIcon icon={faChevronUp} color="green" className={iconClass} />;
    } if (performance < 0) {
      return <FontAwesomeIcon icon={faChevronDown} color="red" className={iconClass} />;
    }
    return null;
  }

  render() {
    const { player } = this.state;
    return (
      <div className="player-selector" onClick={this.handlePlayerClick} onKeyPress={this.handlePlayerClick} role="presentation">
        <div className="name">{player.name}</div>
        <div className="number-container">
          <span className="number">{player.number}</span>
          <span className="performance">{this.showPerformance()}</span>
        </div>
      </div>
    );
  }
}

PlayerSelector.propTypes = {
  player: PropTypes.object.isRequired,
  statWeights: PropTypes.object.isRequired,
  onPlayerClick: PropTypes.func.isRequired,
};

export default PlayerSelector;
