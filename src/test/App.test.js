import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import { reducer } from '../reducer';
it('renders without crashing', () => {
  shallow(<App />);
});