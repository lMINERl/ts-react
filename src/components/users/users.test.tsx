import * as React from 'react';
import { shallow, Provider, myStore } from '../../test/Configurations';
import Users from './users';

describe('<Users />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Provider store={myStore}>
        <Users />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
