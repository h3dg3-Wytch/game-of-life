import React from 'react';
import { shallow } from 'enzyme';
import Board, {matrixToComponent, componentsToRows} from '../componets/Board';
import Cell from '../componets/Cell';
import sinon from 'sinon';

describe('Board', () => {

  const sampleGrid = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, true, false]
  ];

  const noop = () => {}

  const generateCellList = (n, m, cells) => {
    const result = [];
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < m; j++) {
        let cell = <Cell n={i} m={j} onClick={noop} active={cells[i][j]}/>
        result.push(cell);
      }
    }
    return result;
  }

  it('renders without crashing', () => {
    shallow(<Board cells={[]}/>);
  });

  it('can render a matrix of cell components', () => {
    const result = matrixToComponent(sampleGrid, noop);
    expect(result).toMatchObject(generateCellList(4, 3, sampleGrid));
  });

  it('can take those components and turn them into rows', () => {
    const result = componentsToRows();
    expect(result).toEqual(  
    <div className="row">
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
      <div className="Cell"></div>
    </div>);
  });

});

