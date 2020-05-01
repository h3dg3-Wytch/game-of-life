import React from 'react';
import { shallow } from 'enzyme';
import Board, {matrixToComponent, componentsToRows} from '../componets/Board';
import Row from '../componets/Row';
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
      let row = [];
      for(let j = 0; j < m; j++) {
        let cell = <Cell n={i} m={j} key={`${i},${j}`} handleClick={noop} active={cells[i][j]}/>
        row.push(cell);
      }
      result.push(row);
    }

    return result.map(cells => <Row cells={cells}/>);
  }

  it('renders without crashing', () => {
    shallow(<Board cells={[]}/>);
  });

  it('can render a matrix of cell components', () => {
    const result = matrixToComponent(sampleGrid, noop);
    const expected = generateCellList(4, 3, sampleGrid);
    expect(result).toMatchObject(expected);
  });

});

