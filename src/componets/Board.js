import React from 'react';
import Cell from './Cell';
import Controls from './Controls';
import Row from './Row';



const Board = ({ cells, handleClick }) =>
  <div className="Board">
    {matrixToComponent(cells, handleClick)}
  </div>


export function matrixToComponent(cells, handleClick) {
    const result = [];
    for(let i = 0; i < cells.length; i++ ){
     let row = [];
     for(let j = 0; j < cells[0].length; j++) {
         row.push(<Cell key={`${i},${j}`} n={i} m={j} handleClick={handleClick} active={cells[i][j]}/>)
      }
      result.push(row);
    }

   return result.map(cells => <Row cells={cells}/>)

}
export function componentsToRows(components) {
  const result = [];
  let rowLimit = 0;
  
  for(let i = 0; i < components.length; i++, rowLimit++) {
    if(rowLimit === 10) {
        rowLimit = 0;
    }
    
  }  
}
export default Board;