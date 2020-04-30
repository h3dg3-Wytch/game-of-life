import React from 'react';
import Cell from './Cell';
import Controls from './Controls';



const Board = ({ cells, handleClick }) =>
  <div className="Board">
    {matrixToComponent(cells, handleClick)}
  </div>


export function matrixToComponent(cells, handleClick) {
    const result = [];
    for(let i = 0; i < cells.length; i++ ){
        for(let j = 0; j < cells[0].length; j++) {
            result.push(<Cell key={`${i},${j}`} n={i} m={j} handleClick={handleClick} active={cells[i][j]}/>)
        }
    }
    return result;
}
export default Board;