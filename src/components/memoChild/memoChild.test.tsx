import * as React from 'react';
import { shallow } from '../../test/Configurations';
import MemoChild from './memoChild';
import { render, getByTestId } from '@testing-library/react';

describe('<MemoChild />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MemoChild />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has number display', () => {
    const { container } = render(<MemoChild />);
    const renderCount = getByTestId(container, 'render-count');
    expect(renderCount.textContent).toMatch(/[a-z A-Z]* \: [0-9]+/);
  });

  it('should increase render-count on rerender', () => {
    const { container, rerender } = render(<MemoChild />);
    const renderCount = getByTestId(container, 'render-count');
    expect(renderCount.textContent).toMatch(/[a-z A-Z]* \: 1/);
    rerender(<MemoChild />);
    expect(renderCount.textContent).toMatch(/[a-z A-Z]* \: 2/);
  });
});
