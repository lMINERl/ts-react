// this folder only for testing configurations
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../redux';

import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

const myStore = createStore(rootReducer);

configure({ adapter: new Adapter() });

export { Provider, myStore, renderer, configure, shallow, Adapter, expect };
