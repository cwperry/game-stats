import React from 'react';
import { shallow } from 'enzyme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PlayerSelector from './PlayerSelector';
import Player from './Player';
import StatWeights from './StatWeights';

jest.mock('./Player');

const statWeights = new StatWeights();
const mockOnPlayerClick = jest.fn();

let component;
let player;

describe('PlayerSelector initial', () => {
  beforeAll(() => {
    Player.mockImplementation(() => ({
      name: 'Janmark',
      number: 13,
      position: 'offense',
      lineNumber: 1,
      performance: () => 0,
    }));
  });

  beforeEach(() => {
    player = new Player();

    component = shallow(<PlayerSelector
      player={player}
      statWeights={statWeights}
      onPlayerClick={mockOnPlayerClick}
    />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test('clicking should call onPlayerClick', () => {
    component.simulate('click');

    expect(mockOnPlayerClick).toHaveBeenCalled();
  });
});

describe('performance rendering', () => {
  const mockPerformance = jest.fn();

  mockPerformance
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(-1)
    .mockReturnValueOnce(-2)
    .mockReturnValueOnce(-3)
    .mockReturnValueOnce(-4)
    .mockReturnValue(0);

  beforeAll(() => {
    Player.mockImplementation(() => ({
      name: 'Janmark',
      number: 13,
      position: 'offense',
      lineNumber: 1,
      performance: mockPerformance,
    }));
  });

  beforeEach(() => {
    Player.mockClear();

    player = new Player();

    component = shallow(<PlayerSelector
      player={player}
      statWeights={statWeights}
      onPlayerClick={mockOnPlayerClick}
    />);
  });

  test('when performance 0 should display no chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon).toEqual({});
  });

  test('when performance 1 should display small green chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-1x')).toBeTruthy();
    expect(icon.prop('color')).toBe('green');
    expect(icon.prop('icon')).toBe(faChevronUp);
  });

  test('when performance 2 should display medium green chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-2x')).toBeTruthy();
    expect(icon.prop('color')).toBe('green');
    expect(icon.prop('icon')).toBe(faChevronUp);
  });

  test('when performance 3 should display large green chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-3x')).toBeTruthy();
    expect(icon.prop('color')).toBe('green');
    expect(icon.prop('icon')).toBe(faChevronUp);
  });

  test('when performance 4 should display large green chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-3x')).toBeTruthy();
    expect(icon.prop('color')).toBe('green');
    expect(icon.prop('icon')).toBe(faChevronUp);
  });

  test('when performance -1 should small large red chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-1x')).toBeTruthy();
    expect(icon.prop('color')).toBe('red');
    expect(icon.prop('icon')).toBe(faChevronDown);
  });

  test('when performance -2 should small large red chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-2x')).toBeTruthy();
    expect(icon.prop('color')).toBe('red');
    expect(icon.prop('icon')).toBe(faChevronDown);
  });

  test('when performance -3 should small large red chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-3x')).toBeTruthy();
    expect(icon.prop('color')).toBe('red');
    expect(icon.prop('icon')).toBe(faChevronDown);
  });

  test('when performance -4 should small large red chevron', () => {
    const icon = component.find(FontAwesomeIcon);
    expect(icon.hasClass('performance-3x')).toBeTruthy();
    expect(icon.prop('color')).toBe('red');
    expect(icon.prop('icon')).toBe(faChevronDown);
  });
});
