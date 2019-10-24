import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import StatButton from './StatButton';

describe('PlayerStats initial', () => {
  const mockOnStatClick = jest.fn();

  let component;

  beforeEach(() => {
    component = shallow(<StatButton
      buttonText="Stat to track"
      stat={1}
      onStatClick={mockOnStatClick}
    />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call onStatChange with a 1 when plus icon is pressed', () => {
    const icon = component.find(FontAwesomeIcon)
      .find({ icon: faPlusSquare });

    icon.simulate('click');

    expect(mockOnStatClick).toHaveBeenCalledWith(1);
  });

  it('should call onStatChange with a -1 when minus icon is pressed', () => {
    const icon = component.find(FontAwesomeIcon)
      .find({ icon: faMinusSquare });

    icon.simulate('click');

    expect(mockOnStatClick).toHaveBeenCalledWith(-1);
  });
});
