import React from 'react';
import { mount } from 'enzyme';

import StatEntry from './StatEntry';
import PlayerSelector from './PlayerSelector';
import PlayerStats from './PlayerStats';

import Player from './Player';
import Team from './Team';

let component;

describe('StatEntry initial', () => {
  const janmark = new Player('Janmark', '13', 'offense', 1);
  const seguin = new Player('Seguin', '91', 'offense', 1);
  const radulov = new Player('Radulov', '47', 'offense', 1);
  const klinberg = new Player('Klinberg', '3', 'defense', 1);
  const heiskanen = new Player('Heiskanen', '4', 'defense', 1);

  const players = [
    janmark,
    seguin,
    radulov,
    klinberg,
    heiskanen,
  ];
  const team = new Team('Dallas Stars', players);

  beforeEach(() => {
    component = mount(<StatEntry team={team} />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should not show player stats component if currentPlayer is null', () => {
    expect(component.state('currentPlayer')).toBeNull();

    expect(component.exists(PlayerStats)).toBe(false);
  });


  test('handlePlayerSelection sets current player to the player clicked', () => {
    expect(component.state('currentPlayer')).toBeNull();

    const playerSelector = component.find(PlayerSelector).find({ player: janmark });

    playerSelector.prop('onPlayerClick')(janmark);

    component.update();

    expect(component.state('currentPlayer')).toBe(janmark);

    expect(component.exists(PlayerStats)).toBe(true);
  });

  test('updating player stats updates the current player', () => {
    component.setState({ currentPlayer: janmark });
    expect(component.state('currentPlayer')).toBe(janmark);
    component.update();

    expect(component.exists(PlayerStats)).toBe(true);

    const newJanmark = janmark;
    newJanmark.stats.goalsFor = 1;

    const playerStats = component.find(PlayerStats);
    playerStats.prop('onStatChange')(newJanmark);

    expect(component.state('currentPlayer')).toBe(newJanmark);
  });
});
