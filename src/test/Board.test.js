import React from 'react';
import { shallow } from 'enzyme';
import Board from '../componets/Board';
import sinon from 'sinon';

describe('Cell', () => {
  it('renders without crashing', () => {
    shallow(<Board cells={[]}/>);
  });

  it('correctly creates board section', () => {
    const component = shallow(<Board cells={[]}/>);
    expect(component).toHaveLength(1);
  });

  it('can correctly click on buttons', () => {
    const onButtonClick = sinon.spy();
    const component = shallow(<Board cells={[]} handleClick={onButtonClick}/>);
    component.find('.Board').simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

})

