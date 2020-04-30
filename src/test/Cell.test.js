import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../componets/Cell';

describe('Cell', () => {
  it('renders without crashing', () => {
    shallow(<Cell />);
  });

  // it('renders its children', () => {
  //   const component = shallow(<Cell x={100} y={100} size={20}/>);
   
  // });

})

