import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../componets/Cell';

describe('Cell', () => {
  it('renders without crashing', () => {
    shallow(<Cell />);
  });
});

