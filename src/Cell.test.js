import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('Cell', () => {
  it('renders without crashing', () => {
    shallow(<Cell />);
  });

  it('renders its children', () => {
    const component = shallow(<Cell x={100} y={100} size={20}/>);
    expect(component.get(0).props).toEqual({
      className: 'Cell', 
      style: { 
        left: '2001px', 
        top: '2001px', 
        width: '19px', 
        height: '19px' 
      }
    }
    );
  });

})

