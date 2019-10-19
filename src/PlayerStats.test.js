import React from 'react';
import { shallow } from 'enzyme';

import StatButton from './StatButton';
import PlayerStats from './PlayerStats';
import Player from './Player';
import Stats from './Stats';

jest.mock('./Player');

describe('PlayerStats initial', () => {
  const mockHandleStatChange = jest.fn();
  const mockHandleShotsChanged = jest.fn();
  const mockHandleMissedShotsChanged = jest.fn();
  const mockHandleGoalsForChanged = jest.fn();
  const mockHandleGoalsAgainstChanged = jest.fn();
  const mockHandleHustlesChanged = jest.fn();
  const mockHandleHesitationsChanged = jest.fn();
  const mockHandleTakeawaysChanged = jest.fn();
  const mockHandleGiveawaysChanged = jest.fn();

  let player;
  let component;

  beforeAll(() => {
    Player.mockImplementation(() => ({
      name: 'Janmark',
      number: 13,
      position: 'offense',
      lineNumber: 1,
      stats: new Stats(),
      handleShotsChanged: mockHandleShotsChanged,
      handleMissedShotsChanged: mockHandleMissedShotsChanged,
      handleGoalsForChanged: mockHandleGoalsForChanged,
      handleGoalsAgainstChanged: mockHandleGoalsAgainstChanged,
      handleHustlesChanged: mockHandleHustlesChanged,
      handleHesitationsChanged: mockHandleHesitationsChanged,
      handleTakeawaysChanged: mockHandleTakeawaysChanged,
      handleGiveawaysChanged: mockHandleGiveawaysChanged,
    }));
  });

  beforeEach(() => {
    player = new Player();

    component = shallow(<PlayerStats
      player={player}
      onStatChange={mockHandleStatChange}
    />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test('handleShotOnGoalClick calls Player.handleShotsChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Shots' });
    button.prop('onStatClick')(1);

    expect(mockHandleShotsChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });

  test('handleMissedShotClick calls Player.handleMissedShotsChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Missed Shots' });
    button.prop('onStatClick')(1);

    expect(mockHandleMissedShotsChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });

  test('handleGoalsForClick calls Player.handleGoalsForChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Goals For' });
    button.prop('onStatClick')(1);

    expect(mockHandleGoalsForChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });

  test('handleGoalsAgainstClick calls Player.handleGoalsAgainstChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Goals Against' });
    button.prop('onStatClick')(1);

    expect(mockHandleGoalsAgainstChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });

  test('handleHustlesClick calls Player.handleHustlesChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Hustles' });
    button.prop('onStatClick')(1);

    expect(mockHandleHustlesChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });

  test('handleHesitationsClick calls Player.handleHesitationsChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Hesitations' });
    button.prop('onStatClick')(1);

    expect(mockHandleHesitationsChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });

  test('handleTakeawaysClick calls Player.handleTakeawaysChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Takeaways' });
    button.prop('onStatClick')(1);

    expect(mockHandleTakeawaysChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });

  test('handleGiveawaysClick calls Player.handleGiveeawaysChanged() and then onStatChange()', () => {
    const button = component.find(StatButton).find({ buttonText: 'Giveaways' });
    button.prop('onStatClick')(1);

    expect(mockHandleGiveawaysChanged).toHaveBeenCalledWith(1);
    expect(mockHandleStatChange).toHaveBeenCalled();
  });
});
