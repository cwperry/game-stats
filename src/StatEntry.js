import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './StatEntry.css';

// import PlayerStats from './PlayerStats';
import PlayerSelector from './PlayerSelector';
import Player from './Player';
import PlayerStats from './PlayerStats';

class StatEntry extends Component {

    constructor() {
        super();
        this.state = {
            players: {
                offense: [
                    new Player("Wertz", "23"),
                    new Player("Glover", "66"),
                    new Player("Garrick", "64"),
                    new Player("Kelton", "97"),
                    new Player("Kazmierski", "10"),
                    new Player("Krohn", "17"),
                    new Player("Liu", "83"),
                    new Player("Pandey", "47"),
                    new Player("Perry", "30")    
                ],
                defense: [
                    new Player("Gallagher", "3"),
                    new Player("Johnson", "12"),
                    new Player("Krasner", "41"),
                    new Player("Berger", "4"),
                    new Player("Rotan", "40")    
                ]
            },
            currentPlayer: new Player("Seguin", "91")
        }
    }

    chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size));

    handlePlayerSelection = (value) => {
        console.log("StatEntry.handlePlayerSelection called with value: " + value);
        this.setState({currentPlayer: value});
    }       
  

    render() {
        const offenseRows = this.chunk(this.state.players.offense, 3);
        const defenseRows = this.chunk(this.state.players.defense, 2)
        return(
            <div class="stat-entry">
                <Container fluid="true" >
                    <Row>
                        <Col md={7}>
                            <Row>
                                <Col>
                                    <h3>Offense</h3>
                                </Col>
                            </Row>
                            {offenseRows.map((row) => {
                                return (
                                    <Row>
                                        {row.map((player) => {
                                            return (
                                                <Col>
                                                    <PlayerSelector player={player} onPlayerClick={this.handlePlayerSelection}/> 
                                                </Col> 
                                            )
                                        })}
                                        
                                    </Row>    
                                )
                            })}
                            <Row>
                                <Col>
                                    <h3>Defense</h3>
                                </Col>
                            </Row>
                            {defenseRows.map((row) => {
                                return (
                                    <Row className="justify-content-md-center">
                                        {row.map((player) => {
                                            return (
                                                <Col md={{ span: 4}}>
                                                    <PlayerSelector player={player} onPlayerClick={this.handlePlayerSelection}/> 
                                                </Col> 
                                            )
                                        })}
                                        
                                    </Row>    
                                )
                            })}
                        </Col>
                        <Col md={5}>
                            <PlayerStats player={this.state.currentPlayer}/>
                        </Col>
                    </Row>
                </Container> 
            </div>
        );
    }
}

export default StatEntry;