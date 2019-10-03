/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './StatEntry.css';

import PlayerSelector from './PlayerSelector';
import Team from './Team';
import Player from './Player';
import PlayerStats from './PlayerStats';

class StatEntry extends Component {
  constructor() {
    super();
    const players = [
      new Player('Wertz', '23', 'offense', 1),
      new Player('Glover', '66', 'offense', 1),
      new Player('Garrick', '64', 'offense', 1),
      new Player('Kelton', '97', 'offense', 2),
      new Player('Kazmierski', '10', 'offense', 2),
      new Player('Krohn', '17', 'offense', 3),
      new Player('Liu', '83', 'offense', 3),
      new Player('Pandey', '47', 'offense', 3),
      new Player('Perry', '30', 'offense', 2),
      new Player('Gallagher', '3', 'defense', 1),
      new Player('Johnson', '12', 'defense', 1),
      new Player('Krasner', '41', 'defense', 1),
      new Player('Berger', '4', 'defense', 2),
      new Player('Rotan', '40', 'defense', 2),
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

    handlePlayerSelection = (player) => {
      this.setState({ currentPlayer: player });
    }

    onPlayerStatChange = (player) => {
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
      // const offenseRows = this.chunk(team.players.filter((p) => p.position === 'offense'), 3);
      const offenseRows = team.offenseRows();
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
                {offenseRows.map((row, i) => (
                  <Row key={i}>
                    {row.map((player) => (
                      <Col key={player.number}>
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
                {defenseRows.map((row, i) => (
                  <Row className="justify-content-md-center" key={i}>
                    {row.map((player) => (
                      <Col md={{ span: 4 }} key={player.number}>
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
