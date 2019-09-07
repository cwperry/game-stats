import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './StatEntry.css';

import PlayerStats from './PlayerStats';
import Player from './Player';

class StatEntry extends Component {
    render() {
        return(
            <div class="stat-entry">
                <Container fluid="true" >
                    <Row>
                        <Col>
                            <h3>Offense</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PlayerStats player={new Player("Kane Wertz", "23")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("John Glover", "66")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("Rush Garrick", "64")}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PlayerStats player={new Player("Philip Kelton", "97")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("Jack Kazmierski", "10")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("Benjamin Krohn", "17")}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PlayerStats player={new Player("Ronald Liu", "83")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("Saryan Pandey", "47")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("Jackson Perry", "30")}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Defense</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PlayerStats player={new Player("Hudson Gallagher", "3")}/>
                        </Col>
                        <Col> 
                            <PlayerStats player={new Player("Blake Johnson", "12")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("Ben Krasner", "41")}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <PlayerStats player={new Player("Luke Berger", "4")}/>
                        </Col>
                        <Col>
                            <PlayerStats player={new Player("Kason Rotan", "40")}/>
                        </Col>
                    </Row>
                </Container> 
            </div>
               
        );
    }
}

export default StatEntry;