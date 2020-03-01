import React, { useMemo } from 'react';
import { shallow } from '../../test/Configurations';
import UseMemo from './useMemo';
import { render, getByTestId, fireEvent } from '@testing-library/react';

describe('<UseMemo />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<UseMemo initiate={true} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('has number display', () => {
    const { container } = render(<UseMemo initiate={true} />);
    const renderCount = getByTestId(container, 'number-display');
    expect(renderCount.textContent).toMatch(/[a-zA-Z]* \: [0-9]+/);
  });

  it('has button', () => {
    const { container } = render(<UseMemo initiate={true} />);
    const renderCount = getByTestId(container, 'incremental-button');
    expect(renderCount.nodeName).toBe('BUTTON');
  });

  it('should increase count from initial 0 to 1', () => {
    const { container } = render(<UseMemo initiate={true} />);
    const incrementButton = getByTestId(container, 'incremental-button');
    const displayCount = getByTestId(container, 'number-display');
    fireEvent.click(incrementButton);
    expect(displayCount.textContent).toMatch(/[a-zA-Z]* \: 1/);
  });
});
