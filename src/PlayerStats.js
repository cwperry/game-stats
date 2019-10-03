/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';

import StatButton from './StatButton';

import './PlayerStats.css';

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.handleStatChange = this.handleStatChange.bind(this);
    const { player } = this.props;
    this.state = {
      player,
    };
  }

  handleShotOnGoalClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleShotsChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleMissedShotClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleMissedShotsChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleGoalsForClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleGoalsForChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleGoalsAgainstClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleGoalsAgainstChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleHustlesClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleHustlesChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleHesitationsClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleHesitationsChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleTakeawaysClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleTakeawaysChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleGiveawaysClick = (value) => {
    const { player } = this.state;
    const tempPlayer = player;
    tempPlayer.handleGiveawaysChanged(value);
    this.setState({ player: tempPlayer });
    this.handleStatChange();
  }

  handleStatChange = () => {
    const { onStatChange } = this.props;
    const { player } = this.state;
    onStatChange(player);
  }

  render() {
    const { player } = this.state;
    return (
      <div className="player-stats">
        <Container fluid="true">
          <div className="player-header">
            <div className="name">{player.name}</div>
            <div className="number">{player.number}</div>
          </div>
          <StatButton buttonText="Shots" stat={player.stats.shotsOnGoal} onStatClick={this.handleShotOnGoalClick} />
          <StatButton buttonText="Missed Shots" stat={player.stats.missedShots} onStatClick={this.handleMissedShotClick} />
          <StatButton buttonText="Goals For" stat={player.stats.goalsFor} onStatClick={this.handleGoalsForClick} />
          <StatButton buttonText="Goals Against" stat={player.stats.goalsAgainst} onStatClick={this.handleGoalsAgainstClick} />
          <StatButton buttonText="Hustles" stat={player.stats.hustles} onStatClick={this.handleHustlesClick} />
          <StatButton buttonText="Hesitations" stat={player.stats.hesitations} onStatClick={this.handleHesitationsClick} />
          <StatButton buttonText="Takeaways" stat={player.stats.takeaways} onStatClick={this.handleTakeawaysClick} />
          <StatButton buttonText="Giveaways" stat={player.stats.giveaways} onStatClick={this.handleGiveawaysClick} />
        </Container>
      </div>

    );
  }
}

PlayerStats.propTypes = {
  player: PropTypes.object.isRequired,
  onStatChange: PropTypes.func.isRequired,
};

export default PlayerStats;
