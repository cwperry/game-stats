import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import StatButton from './StatButton';

import './PlayerStats.css'; 

class PlayerStats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player
        }
    }

    handleShotOnGoalClick = (value) => {
        const tempPlayer = this.state.player;
        tempPlayer.handleShotsChanged(value);
        this.setState({player: tempPlayer});
    }

    handleMissedShotClick = (value) => {
        const tempPlayer = this.state.player;
        tempPlayer.handleMissedShotsChanged(value);
        this.setState({player: tempPlayer});
    }

    handleGoalsForClick = (value) => {
        const tempPlayer = this.state.player;
        tempPlayer.handleGoalsForChanged(value);
        this.setState({player: tempPlayer});
    }

    handleGoalsAgainstClick = (value) => {
        const tempPlayer = this.state.player;
        tempPlayer.handleGoalsAgainstChanged(value);
        this.setState({player: tempPlayer});
    }

    handleHustlesClick = (value) => {
        const tempPlayer = this.state.player;
        tempPlayer.handleHustlesChanged(value);
        this.setState({player: tempPlayer});
    }

    handleHesitationsClick = (value) => {
        const tempPlayer = this.state.player;
        tempPlayer.handleHesitationsChanged(value);
        this.setState({player: tempPlayer});
    }

    render() {
        return(
            <div class="player-stats">
                <Container fluid="true">
                    <Row>
                        <Col>
                            <h5>{this.state.player.number}: {this.state.player.name}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <ButtonGroup>
                            <StatButton buttonText="Sh" stat={this.state.player.stats.shotsOnGoal} onStatClick={this.handleShotOnGoalClick}/> 
                            <StatButton variant="secondary" buttonText="Ms" stat={this.state.player.stats.missedShots} onStatClick={this.handleMissedShotClick}/>  
                            <StatButton buttonText="Gf" stat={this.state.player.stats.goalsFor} onStatClick={this.handleGoalsForClick}/> 
                            <StatButton variant="secondary" buttonText="Ga" stat={this.state.player.stats.goalsAgainst} onStatClick={this.handleGoalsAgainstClick}/>
                            <StatButton buttonText="Hu" stat={this.state.player.stats.hustles} onStatClick={this.handleHustlesClick}/>
                            <StatButton variant="secondary" buttonText="He" stat={this.state.player.stats.hesitations} onStatClick={this.handleHesitationsClick}/>
                        </ButtonGroup>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default PlayerStats;