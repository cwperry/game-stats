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
      this.setState((prevState) => prevState.player.handleShotsChanged(value));
      this.handleStatChange();
    }

    handleMissedShotClick = (value) => {
      this.setState((prevState) => prevState.player.handleMissedShotsChanged(value));
      this.handleStatChange();
    }

    handleGoalsForClick = (value) => {
      this.setState((prevState) => prevState.player.handleGoalsForChanged(value));
      this.handleStatChange();
    }

    handleGoalsAgainstClick = (value) => {
      this.setState((prevState) => prevState.player.handleGoalsAgainstChanged(value));
      this.handleStatChange();
    }

    handleHustlesClick = (value) => {
      this.setState((prevState) => prevState.player.handleHustlesChanged(value));
      this.handleStatChange();
    }

    handleHesitationsClick = (value) => {
      this.setState((prevState) => prevState.player.handleHesitationsChanged(value));
      this.handleStatChange();
    }

    handleTakeawaysClick = (value) => {
      this.setState((prevState) => prevState.player.handleTakeawaysChanged(value));
      this.handleStatChange();
    }

    handleGiveawaysClick = (value) => {
      this.setState((prevState) => prevState.player.handleGiveawaysChanged(value));
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
