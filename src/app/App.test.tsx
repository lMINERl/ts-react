import React from 'react';
import { shallow, Provider, myStore } from '../test/Configurations';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(
    <Provider store={myStore}>
      <App />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
