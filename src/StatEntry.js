import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './StatEntry.css';

// import PlayerStats from './PlayerStats';
import PlayerSelector from './PlayerSelector';
import Team from './Team';
import Player from './Player';
import PlayerStats from './PlayerStats';

class StatEntry extends Component {
  constructor() {
    super();
    const players = [
      new Player('Wertz', '23', 'offense'),
      new Player('Glover', '66', 'offense'),
      new Player('Garrick', '64', 'offense'),
      new Player('Kelton', '97', 'offense'),
      new Player('Kazmierski', '10', 'offense'),
      new Player('Krohn', '17', 'offense'),
      new Player('Liu', '83', 'offense'),
      new Player('Pandey', '47', 'offense'),
      new Player('Perry', '30', 'offense'),
      new Player('Gallagher', '3', 'defense'),
      new Player('Johnson', '12', 'defense'),
      new Player('Krasner', '41', 'defense'),
      new Player('Berger', '4', 'defense'),
      new Player('Rotan', '40', 'defense'),
    ];
    this.onPlayerStatChange = this.onPlayerStatChange.bind(this);
    this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
    this.state = {
      team: new Team('10U A', players),
      currentPlayer: null,
    };
  }

    chunk = (arr, size) => Array.from(
      { length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size),
    );

    handlePlayerSelection = (value) => {
      this.setState({ currentPlayer: value });
    }

    onPlayerStatChange = (player) => {
      console.log(`onPlayerStatChange player = ${JSON.stringify(player)}`);
      this.setState(
        (prevState) => prevState.team.players.map((p) => (p.number === player.number ? player : p)),
      );
    }

    PlayerShown = () => {
      const { currentPlayer } = this.state;
      if (currentPlayer) {
        return (
          <PlayerStats player={currentPlayer} onStatChange={this.onPlayerStatChange} />
        );
      }
      return null;
    }

    render() {
      const { team } = this.state;
      const offenseRows = this.chunk(team.players.filter((p) => p.position === 'offense'), 3);
      const defenseRows = this.chunk(team.players.filter((p) => p.position === 'defense'), 2);
      return (
        <div className="stat-entry">
          <Container fluid="true">
            <Row>
              <Col md={7}>
                <Row>
                  <Col>
                    <h3>Offense</h3>
                  </Col>
                </Row>
                {offenseRows.map((row) => (
                  <Row>
                    {row.map((player) => (
                      <Col>
                        <PlayerSelector
                          player={player}
                          statWeights={team.statWeights}
                          onPlayerClick={this.handlePlayerSelection}
                        />
                      </Col>
                    ))}
                  </Row>
                ))}
                <Row>
                  <Col>
                    <h3>Defense</h3>
                  </Col>
                </Row>
                {defenseRows.map((row) => (
                  <Row className="justify-content-md-center">
                    {row.map((player) => (
                      <Col md={{ span: 4 }}>
                        <PlayerSelector
                          player={player}
                          statWeights={team.statWeights}
                          onPlayerClick={this.handlePlayerSelection}
                        />
                      </Col>
                    ))}
                  </Row>
                ))}
              </Col>
              <Col md={5}>
                <this.PlayerShown />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}

export default StatEntry;
