import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import StatButton from './StatButton';

import './PlayerStats.css'; 

class PlayerStats extends Component {

    handleShotOnGoalClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleShotsChanged(value);
        this.setState({player: tempPlayer});
    }

    handleMissedShotClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleMissedShotsChanged(value);
        this.setState({player: tempPlayer});
    }

    handleGoalsForClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleGoalsForChanged(value);
        this.setState({player: tempPlayer});
    }

    handleGoalsAgainstClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleGoalsAgainstChanged(value);
        this.setState({player: tempPlayer});
    }

    handleHustlesClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleHustlesChanged(value);
        this.setState({player: tempPlayer});
    }

    handleHesitationsClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleHesitationsChanged(value);
        this.setState({player: tempPlayer});
    }

    handleTakeawaysClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleTakeawaysChanged(value);
        this.setState({player: tempPlayer});
    }

    handleGiveawaysClick = (value) => {
        const tempPlayer = this.props.player;
        tempPlayer.handleGiveawaysChanged(value);
        this.setState({player: tempPlayer});
    }

    render() {
        return(
            <div class="player-stats">
                <Container fluid="true">
                    <div class="player-header">
                        <div class="name">{this.props.player.name}</div>
                        <div class="number">{this.props.player.number}</div>
                    </div>
                    <StatButton buttonText="Shots" stat={this.props.player.stats.shotsOnGoal} onStatClick={this.handleShotOnGoalClick}/> 
                    <StatButton variant="secondary" buttonText="Missed Shots" stat={this.props.player.stats.missedShots} onStatClick={this.handleMissedShotClick}/>  
                    <StatButton buttonText="Goals For" stat={this.props.player.stats.goalsFor} onStatClick={this.handleGoalsForClick}/> 
                    <StatButton variant="secondary" buttonText="Goals Against" stat={this.props.player.stats.goalsAgainst} onStatClick={this.handleGoalsAgainstClick}/>
                    <StatButton buttonText="Hustles" stat={this.props.player.stats.hustles} onStatClick={this.handleHustlesClick}/>
                    <StatButton variant="secondary" buttonText="Hesitations" stat={this.props.player.stats.hesitations} onStatClick={this.handleHesitationsClick}/>
                    <StatButton buttonText="Takeaways" stat={this.props.player.stats.takeaways} onStatClick={this.handleTakeawaysClick}/>
                    <StatButton variant="secondary" buttonText="Giveaways" stat={this.props.player.stats.giveaways} onStatClick={this.handleGiveawaysClick}/>
                </Container>
            </div>
            
        );
    }
}

export default PlayerStats;