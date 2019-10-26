import React from 'react';

import StatEntry from './StatEntry';

import Player from './Player';
import Team from './Team';

import './App.css';

function App() {
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
  const team = new Team('10U A', players);

  return (
    <StatEntry team={team} />
  );
}

export default App;
