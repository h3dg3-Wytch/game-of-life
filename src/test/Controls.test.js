import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../componets/Controls';
import sinon from 'sinon';

describe('Cell', () => {
  it('renders without crashing', () => {
    shallow(<Controls />);
  });

  it('renders its children', () => {
    const component = shallow(<Controls isRunning={false}/>);
    expect(component).toHaveLength(1);
  });

  it('can click on buttons', () => {
    const onButtonClick = sinon.spy();
    const component = shallow(<Controls isRunning={false} handleRandom={onButtonClick} handleClear={onButtonClick}/>);

    for(let i = 0; i < 3; i++) {
        component.find('.button').at(i).simulate('click');
    }

    expect(onButtonClick).toHaveProperty('callCount', 2);
  });

  it('can click on buttons', () => {
    const onButtonClick = sinon.spy();
    const component = shallow(<Controls isRunning={true} handleRandom={onButtonClick} handleClear={onButtonClick} stopGame={onButtonClick} runGame={onButtonClick}/>);
    for(let i = 0; i < 3; i++) {
        component.find('.button').at(i).simulate('click');
    }
    expect(onButtonClick).toHaveProperty('callCount', 3);
  });
})

